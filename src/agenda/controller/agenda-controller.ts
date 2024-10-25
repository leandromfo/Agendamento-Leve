import { StausCodeEnum } from "../../utils/enum/status-code-enum"
import { ResponseModel } from "../../utils/model/response-model"
import { AgendaFactory } from "../factory/agenda-factory"

exports.handler = async function handler(
	_event: any,
	_context: any
): Promise<ResponseModel> {
	const agendaService = AgendaFactory.createService()
	return {
		statusCode: StausCodeEnum.OK,
		body: JSON.stringify(agendaService.getAgenda()),
	}
}
