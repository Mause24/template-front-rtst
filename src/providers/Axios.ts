import { useAuthStore } from "@/stores"
import { CONFIGENV } from "@/utils"
import axios from "axios"

const BASE_URL = CONFIGENV.APP_URL

//Middleware
export const API = axios.create({
	baseURL: BASE_URL,
	validateStatus: () => true,
})

API.interceptors.request.use(config => {
	const configuration = config
	const { session, isAuth, deleteSession } = useAuthStore.getState()
	if (isAuth()) {
		configuration.headers.Authorization = `Barear ${session.token}`
	} else {
		deleteSession()
	}

	return configuration
})
