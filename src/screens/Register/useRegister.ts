import { RegisterServiceBody } from "@/interfaces"
import { registerService } from "@/services"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as Yup from "yup"

interface AlertMessagesProps {
	show: boolean
	message: string
	severity: "success" | "error"
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useRegister = () => {
	const [alert, setAlert] = useState<AlertMessagesProps>({
		show: false,
		message: "",
		severity: "success",
	})
	const navigate = useNavigate()

	const validationSchema = Yup.object({
		name: Yup.string().required("El nombre es requerido"),
		lastname: Yup.string().required("El apellido es requerido"),
		email: Yup.string()
			.email("Debe ser un correo electrónico válido")
			.required("El correo electrónico es requerido"),
		password: Yup.string()
			.min(8, "La contraseña debe tener al menos 8 caracteres")
			.matches(
				/[A-Z]/,
				"La contraseña debe tener al menos una letra mayúscula"
			)
			.matches(
				/[a-z]/,
				"La contraseña debe tener al menos una letra minúscula"
			)
			.matches(/[0-9]/, "La contraseña debe tener al menos un número")
			.matches(
				/[\W_]/,
				"La contraseña debe tener al menos un carácter especial"
			)
			.required("La contraseña es requerida"),
		confirmPassword: Yup.string()
			.oneOf(
				[Yup.ref("password"), undefined],
				"Las contraseñas deben coincidir"
			)
			.required("Debe confirmar la contraseña"),
	})

	const onSubmit = async (
		values: RegisterServiceBody,
		setSubmitting: (isSubmitting: boolean) => void
	): Promise<void> => {
		try {
			const response = await registerService({
				email: values.email,
				lastname: values.lastname,
				name: values.name,
				password: values.password,
			})
			if (response) {
				navigate("/login")
				setAlert({
					severity: "success",
					show: true,
					message: "Bienvenido a brooking",
				})
			}
		} catch (error) {
			console.error(error)
		} finally {
			setSubmitting(false)
			setAlert({
				severity: "error",
				show: true,
				message: "Error en el registro. Por favor, inténtelo de nuevo.",
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
