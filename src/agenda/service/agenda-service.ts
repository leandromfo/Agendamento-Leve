import { AgendaDto } from "../dto/agenda-dto"
import { AgendaRepositoryInterface } from "../interface/agenda-repository-interface"
import {
	AgendaServiceInterface,
	GetAgendaResponse,
} from "../interface/agenda-service-interface"

export class AgendaService implements AgendaServiceInterface {
	constructor(private agendaRepository: AgendaRepositoryInterface) {}

	getAgenda(): GetAgendaResponse {
		return {
			medicos: this.agendaRepository.getAgendaLista(),
		}
	}

	getAgendaById(id: number): AgendaDto {
		return this.agendaRepository.getAgendaById(id)
	}
}
