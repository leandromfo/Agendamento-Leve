import { AgendaRepositoryInterface } from "../interface/agenda-repository-interface"
import { AgendaServiceInterface } from "../interface/agenda-service-interface"
import { AgendaMock } from "../mocks/agenda-mock"
import { AgendaService } from "../service/agenda-service"

export class AgendaFactory {
	private static createRepository(): AgendaRepositoryInterface {
		return new AgendaMock()
	}

	static createService(): AgendaServiceInterface {
		const agendaRepository = this.createRepository()
		return new AgendaService(agendaRepository)
	}
}
