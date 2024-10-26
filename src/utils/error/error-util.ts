import { StatusCodeEnum } from "../enum/status-code-enum"

export class ErrorUtil extends Error {
	statusCode: StatusCodeEnum
	constructor(statusCode: StatusCodeEnum, message: string) {
		super(message)
		this.statusCode = statusCode
	}
}
