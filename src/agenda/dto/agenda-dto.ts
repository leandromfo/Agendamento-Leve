export class AgendaDto {
	constructor(
		private id: number,
		private nome: string,
		private especialidade: string,
		private horarios_disponiveis: string[]
	) {}

	getId(): number {
		return this.id
	}

	getNome(): string {
		return this.nome
	}

	getEspecialidade(): string {
		return this.especialidade
	}

	getHorarios_disponiveis(): string[] {
		return this.horarios_disponiveis
	}
}
