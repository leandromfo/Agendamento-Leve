export interface AgendamentoServiceInterface {
	agendar(
		medico_id: number,
		paciente_nome: string,
		data_horario: string
	): AgendarResponse
}

export interface AgendarResponse {
	mensagem: string
	agendamento: { medico: string; paciente: string; data_horario: string }
}
