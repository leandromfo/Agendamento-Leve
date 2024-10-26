import { StatusCodeEnum } from "../../utils/enum/status-code-enum"
import { ResponseModel } from "../../utils/model/response-model"
import { AgendamentoFactory } from "../factory/agendamento-factory"

exports.handler = async function handler(
	event: any,
	_context: any
): Promise<ResponseModel> {
	try {
		const requestBody = JSON.parse(event.body)
		const agendamentoService = AgendamentoFactory.createService()
		const response = agendamentoService.agendar(
			requestBody.medico_id,
			requestBody.paciente_nome,
			requestBody.data_horario
		)

		return {
			statusCode: StatusCodeEnum.OK,
			body: JSON.stringify(response),
		}
	} catch (err: any) {
		return {
			statusCode:
				StatusCodeEnum.BAD_REQUEST ||
				StatusCodeEnum.INTERNAL_SERVER_ERROR,
			body: err.message,
		}
	}
}
