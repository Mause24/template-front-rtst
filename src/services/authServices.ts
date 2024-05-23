import {
	LoginServiceBody,
	RegisterServiceBody,
	ResponseBody,
} from "@/interfaces"
import { Session } from "@/stores"
import axios from "axios"

export const loginService = async (
	body: LoginServiceBody
): Promise<Session> => {
	const response = await axios.post<ResponseBody<Session>>(
		"/auth/login/",
		body
	)

	if (response.status === 200 && response.data.data) {
		return response.data.data
	}

	throw new Error(response.data.message)
}

export const registerService = async (body: RegisterServiceBody) => {
	const response = await axios.post<ResponseBody<Session>>(
		"/auth/register/",
		body
	)

	if (response.status === 201 && response.data.data) {
		return response.data.data
	}

	throw new Error(response.data.message)
}
