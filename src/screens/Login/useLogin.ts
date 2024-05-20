import { ResponseBody } from "@/interfaces"
import { Session, useAuthStore } from "@/stores"
import axios from "axios"
import * as Yup from "yup"

export const useLogin = () => {
	const { setSession } = useAuthStore()

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
		values: {
			email: string
			password: string
		},
		setSubmitting: (isSubmitting: boolean) => void
	): Promise<void> => {
		try {
			const response = await axios.post<ResponseBody<Session>>(
				"/auth/login/",
				values
			)

			if (response.status === 200 && response.data.data) {
				setSession(response.data.data)
			}
		} catch (error) {
			console.log(error)
		} finally {
			setSubmitting(false)
		}
	}

	return {
		validationSchema,
		onSubmit,
	}
}
