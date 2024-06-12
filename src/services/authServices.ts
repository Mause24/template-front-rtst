import {
	LoginServiceBody,
	RegisterServiceBody,
	ResponseBody,
} from "@/interfaces"
import { API } from "@/providers"
import { Session } from "@/stores"

export const loginService = async (
	body: LoginServiceBody
): Promise<Session> => {
	const response = await API.post<ResponseBody<Session>>("/auth/login/", body)

	if (response.status === 200 && response.data.data) {
		return response.data.data
	}

	throw new Error(response.data.message)
}

export const registerService = async (body: RegisterServiceBody) => {
	const response = await API.post<ResponseBody<Session>>(
		"/auth/register/",
		body
	)

	if (response.status === 201 && response.data.data) {
		return response.data.data
	}

	throw new Error(response.data.message)
}
