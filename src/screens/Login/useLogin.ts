import { LoginServiceBody } from "@/interfaces"
import { loginService } from "@/services"
import { useAuthStore } from "@/stores"
import { useState } from "react"
import * as Yup from "yup"

interface AlertMessagesProps {
	show: boolean
	message: string
	severity: "success" | "error"
}

export const useLogin = () => {
	const { setSession } = useAuthStore()
	const [alert, setAlert] = useState<AlertMessagesProps>({
		show: false,
		message: "",
		severity: "success",
	})

	const validationSchema = Yup.object({
		email: Yup.string()
			.email("Dirección de correo electrónico no válida")
			.required("Correo electrónico es requerido"),
		password: Yup.string()
			.min(8, "La contraseña debe tener al menos 8 caracteres")
			.matches(
				/[A-Z]/,
				"La contraseña debe contener al menos una letra mayúscula"
			)
			.matches(
				/[a-z]/,
				"La contraseña debe contener al menos una letra minúscula"
			)
			.matches(/[0-9]/, "La contraseña debe contener al menos un número")
			.matches(
				/[@$!%*?&]/,
				"La contraseña debe contener al menos un carácter especial"
			)
			.required("Contraseña es requerida"),
	})

	const onSubmit = async (
		values: LoginServiceBody,
		setSubmitting: (isSubmitting: boolean) => void
	): Promise<void> => {
		try {
			const response = await loginService(values)
			setAlert({
				severity: "success",
				show: true,
				message: "Bienvenido a brooking",
			})
			setSession(response)
		} catch (error) {
			console.error(error)
		} finally {
			setSubmitting(false)
			setAlert({
				severity: "error",
				show: true,
				message:
					"Error en la autenticación. Por favor, inténtelo de nuevo.",
			})
		}
	}

	return {
		validationSchema,
		onSubmit,
		alert,
		setAlert,
	}
}
