import { AgendaDto } from "../dto/agenda-dto"
import { AgendaRepositoryInterface } from "../interface/agenda-repository-interface"

export class AgendaMock implements AgendaRepositoryInterface {
	static agendas = [
		new AgendaDto(1, "Dr. João Silva", "Cardiologista", [
			"2024-10-05 09:00",
			"2024-10-05 10:00",
			"2024-10-05 11:00",
		]),
		new AgendaDto(2, "Dra. Maria Souza", "Dermatologista", [
			"2024-10-06 14:00",
			"2024-10-06 15:00",
		]),
	]

	getAgendaLista(): AgendaDto[] {
		return AgendaMock.agendas
	}

	getAgendaById(id: number): AgendaDto {
		const agenda = AgendaMock.agendas.find(agenda => agenda.getId() === id)
		if (!agenda) throw new Error("Horário não encontrado!")
		return agenda
	}
}
