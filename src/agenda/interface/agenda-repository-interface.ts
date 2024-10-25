import { AgendaDto } from "../dto/agenda-dto"

export interface AgendaRepositoryInterface {
	getAgendaLista(): AgendaDto[]
	getAgendaById(id: number): AgendaDto
}
