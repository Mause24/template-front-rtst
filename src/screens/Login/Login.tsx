import { Button, Input, Text } from "@/components"
import clsx from "clsx"
import { Formik } from "formik"
import { useLogin } from "./useLogin"

export const Login = (): JSX.Element => {
	const { onSubmit, validationSchema } = useLogin()

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
					email: "",
					password: "",
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
							Iniciar Sesion
						</Text>

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
						/>

						<Button
							className={clsx(
								"border-2",
								"border-black",
								"rounded"
							)}
							type="submit"
							disabled={isSubmitting}
						>
							Iniciar Sesion
						</Button>
					</form>
				)}
			</Formik>
		</div>
	)
}
