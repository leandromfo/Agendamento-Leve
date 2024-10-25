import { StausCodeEnum } from "../enum/status-code-enum"

export interface ResponseModel {
	statusCode: StausCodeEnum
	body: string
}
