import { Button, Input, Text } from "@/components"
import { Alert, Snackbar } from "@mui/material"
import clsx from "clsx"
import { Formik } from "formik"
import { useLogin } from "./useLogin"

export const Login = (): JSX.Element => {
	const { onSubmit, validationSchema, setAlert, alert } = useLogin()

	return (
		<>
			<div
				className={clsx(
					"w-full",
					"min-h-[calc(100dvh-290px)]",
					"py-2",
					"flex",
					"justify-center",
					"items-center",
					"px-6"
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
								"2xl:w-[50%]",
								"w-full",
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
									touched.password
										? errors.password
										: undefined
								}
								required
							/>

							<Button
								type="submit"
								disabled={isSubmitting}
								label="Iniciar Sesion"
							/>
						</form>
					)}
				</Formik>
			</div>
			{alert.show && (
				<>
					<Snackbar
						open={alert.show}
						autoHideDuration={6000}
						onClose={() => setAlert({ ...alert, show: false })}
						anchorOrigin={{
							vertical: "top",
							horizontal: "center",
						}}
					>
						<Alert
							onClose={() => setAlert({ ...alert, show: false })}
							severity="error"
							variant="filled"
							sx={{ width: "100%" }}
						>
							{alert.message}
						</Alert>
					</Snackbar>
				</>
			)}
		</>
	)
}
