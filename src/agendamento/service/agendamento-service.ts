import { AgendaServiceInterface } from "../../agenda/interface/agenda-service-interface"
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

		this.validahorario(data_horario, agenda.getHorarios_disponiveis())

		const agendamento = this.agendamentoRepository.agendar(
			medico_id,
			paciente_nome,
			data_horario
		)

		return {
			mensagem: "Agendamento realizado com sucesso",
			agendamento: {
				medico: agenda.getNome(),
				paciente: agendamento.getPaciente_nome(),
				data_horario: agendamento.getData_horario(),
			},
		}
	}

	private validahorario(
		data_horario: string,
		horarios_disponiveis: string[]
	) {
		if (data_horario! in horarios_disponiveis)
			throw new Error("Horário não disponível!")
	}
}
