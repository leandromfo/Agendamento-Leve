import { AgendaServiceInterface } from "../../../src/agenda/interface/agenda-service-interface"
import { AgendamentoRepositoryInterface } from "../../../src/agendamento/interface/agendamento-repository-interface"
import { AgendamentoService } from "../../../src/agendamento/service/agendamento-service"

const mockAgendaService: jest.Mocked<AgendaServiceInterface> = {
	getAgenda: jest.fn(),
	getAgendaById: jest.fn().mockImplementation(() => {
		return {
			id: 1,
			nome: "nome1",
			especialidade: "especialidade1",
			horarios_disponiveis: ["horario1", "horario2"],
		}
	}),
}

const mockAgendamentoRepository: jest.Mocked<AgendamentoRepositoryInterface> = {
	agendar: jest
		.fn()
		.mockImplementation((medico_id, paciente_nome, data_horario) => {
			return { medico_id, paciente_nome, data_horario }
		}),
}

describe("AgendamentoService", () => {
	let agendamentoService: AgendamentoService

	beforeEach(() => {
		agendamentoService = new AgendamentoService(
			mockAgendaService,
			mockAgendamentoRepository
		)
	})

	test("should return agendamento realizado", () => {
		const medico_id = 2
		const paciente_nome = "paciente1"
		const data_horario = "horario1"
		const response = agendamentoService.agendar(
			medico_id,
			paciente_nome,
			data_horario
		)
		expect(response.mensagem).toBe("Agendamento realizado com sucesso")
	})

	test("should throw 400 if id not exist", () => {
		const medico_id = 1
		const paciente_nome = "paciente1"
		const data_horario = "horario3"
		expect(() =>
			agendamentoService.agendar(medico_id, paciente_nome, data_horario)
		).toThrow("Horário selecionado não disponível!")
	})
})
