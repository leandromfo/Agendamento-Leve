import { StatusCodeEnum } from "../enum/status-code-enum"

export interface ResponseModel {
	statusCode: StatusCodeEnum
	body?: string
	message?: string
}
