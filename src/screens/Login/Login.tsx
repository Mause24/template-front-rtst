import { Button } from "@/components"
import { useAuthStore } from "@/stores"
import { CONFIGENV } from "@/utils"
import clsx from "clsx"
import { useState } from "react"

export const Login = (): JSX.Element => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	})
	const { setSession } = useAuthStore()

	const handleForm =
		(name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setForm(state => ({ ...state, [name]: event.target.value }))
		}

	const onSubmit = async (): Promise<void> => {
		try {
			const response = await fetch(CONFIGENV.APP_URL + "/auth/login/", {
				body: JSON.stringify(form),
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			})

			if (response.status === 200) {
				const parsedObject = await response.json()
				setSession(parsedObject.data)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div
			className={clsx(
				"w-full",
				"h-[calc(100dvh-290px)]",
				"flex",
				"justify-center",
				"items-center"
			)}
		>
			<form
				onSubmit={evt => evt.preventDefault()}
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
				<h2
					className={clsx(
						"text-2xl",
						"text-primary-normal",
						"text-center"
					)}
				>
					Iniciar Sesion
				</h2>
				<label
					className={clsx("text-base", "text-primary-normal")}
					htmlFor="email"
				>
					E-mail
				</label>
				<input
					className={clsx("border-2", "rounded-md", "outline-none")}
					onChange={handleForm("email")}
					type="email"
					name="email"
					autoComplete="username"
					id="email"
				/>
				<label
					className={clsx("text-base", "text-primary-normal")}
					htmlFor="password"
				>
					Contraseña
				</label>
				<input
					className={clsx("border-2", "rounded-md", "outline-none")}
					onChange={handleForm("password")}
					type="password"
					autoComplete="current-password"
					name="password"
					id="password"
				/>
				<Button
					className={clsx("border-2", "border-black", "rounded")}
					onClick={onSubmit}
				>
					Iniciar Sesion
				</Button>
			</form>
		</div>
	)
}
