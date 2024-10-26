import { AgendamentoDto } from "../dto/agendamento-dto"
import { AgendamentoRepositoryInterface } from "../interface/agendamento-repository-interface"

export class AgendamentoMock implements AgendamentoRepositoryInterface {
	agendar(
		medico_id: number,
		paciente_nome: string,
		data_horario: string
	): AgendamentoDto {
		return { medico_id, paciente_nome, data_horario }
	}
}
