import { StausCodeEnum } from "../../utils/enum/status-code-enum"
import { ResponseModel } from "../../utils/model/response-model"
import { AgendamentoFactory } from "../factory/agendamento-factory"

exports.handler = async function handler(
	event: any,
	_context: any
): Promise<ResponseModel> {
	const requestBody = JSON.parse(event.body)
	const agendamentoService = AgendamentoFactory.createService()

	return {
		statusCode: StausCodeEnum.OK,
		body: JSON.stringify(
			agendamentoService.agendar(
				requestBody.medico_id,
				requestBody.paciente_nome,
				requestBody.data_horario
			)
		),
	}
}
