import { AgendaFactory } from "../../agenda/factory/agenda-factory"
import { AgendamentoRepositoryInterface } from "../interface/agendamento-repository-interface"
import { AgendamentoServiceInterface } from "../interface/agendamento-service-interface"
import { AgendamentoMock } from "../mocks/agendamento-mock"
import { AgendamentoService } from "../service/agendamento-service"

export class AgendamentoFactory {
	private static createRepository(): AgendamentoRepositoryInterface {
		return new AgendamentoMock()
	}

	static createService(): AgendamentoServiceInterface {
		const agendaService = AgendaFactory.createService()
		const agendaRepository = this.createRepository()
		return new AgendamentoService(agendaService, agendaRepository)
	}
}
