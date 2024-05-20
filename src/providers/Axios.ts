import { CONFIGENV } from "@/utils"
import axios from "axios"

const BASE_URL = CONFIGENV.APP_URL

//Middleware
axios.defaults.baseURL = BASE_URL
axios.defaults.validateStatus = () => true
