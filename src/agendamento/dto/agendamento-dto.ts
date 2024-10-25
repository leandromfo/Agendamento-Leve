export class AgendamentoDto {
	constructor(
		private medico_id: number,
		private paciente_nome: string,
		private data_horario: string
	) {}

	getMedico_id(): number {
		return this.medico_id
	}

	getPaciente_nome(): string {
		return this.paciente_nome
	}

	getData_horario(): string {
		return this.data_horario
	}
}
