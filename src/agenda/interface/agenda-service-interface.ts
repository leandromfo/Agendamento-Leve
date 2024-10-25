import { AgendaDto } from "../dto/agenda-dto"

export interface AgendaServiceInterface {
	getAgenda(): GetAgendaResponse
	getAgendaById(id: number): AgendaDto
}

export interface GetAgendaResponse {
	medicos: AgendaDto[]
}
