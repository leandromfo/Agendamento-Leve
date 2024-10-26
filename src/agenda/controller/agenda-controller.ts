import { StatusCodeEnum } from "../../utils/enum/status-code-enum"
import { ErrorUtil } from "../../utils/error/error-util"
import { ResponseModel } from "../../utils/model/response-model"
import { AgendaFactory } from "../factory/agenda-factory"

exports.handler = async function handler(
	_event: any,
	_context: any
): Promise<ResponseModel> {
	try {
		const agendaService = AgendaFactory.createService()
		const response = agendaService.getAgenda()
		return {
			statusCode: StatusCodeEnum.OK,
			body: JSON.stringify(response),
		}
	} catch (err: ErrorUtil | any) {
		return {
			statusCode: err.statusCode | StatusCodeEnum.INTERNAL_SERVER_ERROR,
			body: err.message,
		}
	}
}
