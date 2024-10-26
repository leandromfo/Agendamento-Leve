import { AgendaServiceInterface } from "../../agenda/interface/agenda-service-interface"
import { StatusCodeEnum } from "../../utils/enum/status-code-enum"
import { ErrorUtil } from "../../utils/error/error-util"
import { AgendamentoRepositoryInterface } from "../interface/agendamento-repository-interface"
import {
	AgendamentoServiceInterface,
	AgendarResponse,
} from "../interface/agendamento-service-interface"

export class AgendamentoService implements AgendamentoServiceInterface {
	constructor(
		private agendaService: AgendaServiceInterface,
		private agendamentoRepository: AgendamentoRepositoryInterface
	) {}

	agendar(
		medico_id: number,
		paciente_nome: string,
		data_horario: string
	): AgendarResponse {
		const agenda = this.agendaService.getAgendaById(medico_id)

		this.validahorario(data_horario, agenda.horarios_disponiveis)

		const agendamento = this.agendamentoRepository.agendar(
			medico_id,
			paciente_nome,
			data_horario
		)

		return {
			mensagem: "Agendamento realizado com sucesso",
			agendamento: {
				medico: agenda.nome,
				paciente: agendamento.paciente_nome,
				data_horario: agendamento.data_horario,
			},
		}
	}

	private validahorario(
		data_horario: string,
		horarios_disponiveis: string[]
	) {
		if (!horarios_disponiveis.includes(data_horario))
			throw new ErrorUtil(
				StatusCodeEnum.BAD_REQUEST,
				"Horário selecionado não disponível!"
			)
	}
}
