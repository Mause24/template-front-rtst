import { Button, Input, Text } from "@/components"
import clsx from "clsx"
import { Formik } from "formik"
import { useRegister } from "./useRegister"

export const Register = () => {
	const { onSubmit, validationSchema } = useRegister()

	return (
		<div
			className={clsx(
				"w-full",
				"min-h-[calc(100dvh-290px)]",
				"py-2",
				"flex",
				"justify-center",
				"items-center"
			)}
		>
			<Formik
				initialValues={{
					name: "",
					lastname: "",
					email: "",
					password: "",
					confirmPassword: "",
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					onSubmit(values, setSubmitting)
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<form
						onSubmit={handleSubmit}
						className={clsx(
							"flex",
							"flex-col",
							"gap-y-4",
							"w-[50%]",
							"border-2",
							"shadow-md",
							"px-3",
							"py-10",
							"rounded-md"
						)}
					>
						<Text
							type="h2"
							props={{
								className: clsx(
									"text-2xl",
									"text-primary-normal",
									"text-center"
								),
							}}
						>
							Registro
						</Text>

						<Input
							type="text"
							label="Nombres"
							id="name"
							name="name"
							autoComplete="name"
							customType="googleInput"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
							error={touched.name ? errors.name : undefined}
							required
						/>

						<Input
							type="text"
							label="Apellidos"
							id="lastname"
							autoComplete="family-name"
							name="lastname"
							customType="googleInput"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.lastname}
							error={
								touched.lastname ? errors.lastname : undefined
							}
							required
						/>

						<Input
							type="email"
							label="E-mail"
							id="email"
							name="email"
							autoComplete="username"
							customType="googleInput"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							error={touched.email ? errors.email : undefined}
							required
						/>

						<Input
							type="password"
							label="Contraseña"
							id="password"
							name="password"
							customType="googleInput"
							autoComplete="current-password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							error={
								touched.password ? errors.password : undefined
							}
							required
						/>
						<Input
							type="password"
							label="Confirmar Contraseña"
							id="confirmPassword"
							name="confirmPassword"
							customType="googleInput"
							autoComplete="current-password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.confirmPassword}
							error={
								touched.confirmPassword
									? errors.confirmPassword
									: undefined
							}
							required
						/>

						<Button
							type="submit"
							disabled={isSubmitting}
							label="Registrar"
						/>
					</form>
				)}
			</Formik>
		</div>
	)
}
