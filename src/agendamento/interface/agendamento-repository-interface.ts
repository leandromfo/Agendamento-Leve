import { AgendamentoDto } from "../dto/agendamento-dto"

export interface AgendamentoRepositoryInterface {
	agendar(
		medico_id: number,
		paciente_nome: string,
		data_horario: string
	): AgendamentoDto
}
