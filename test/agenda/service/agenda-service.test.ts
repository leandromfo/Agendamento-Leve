import { describe, test } from "@jest/globals"
import { AgendaRepositoryInterface } from "../../../src/agenda/interface/agenda-repository-interface"
import { AgendaService } from "../../../src/agenda/service/agenda-service"

const mockAgendaRepository: jest.Mocked<AgendaRepositoryInterface> = {
	getAgendaLista: jest.fn(),
	getAgendaById: jest.fn().mockImplementation(id => {
		return id
	}),
}

describe("AgendaService", () => {
	let agendaService: AgendaService

	beforeEach(() => {
		agendaService = new AgendaService(mockAgendaRepository)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	test("should return agendas", () => {
		const mockMedicos = [
			{
				id: 1,
				nome: "nome1",
				especialidade: "especialidade1",
				horarios_disponiveis: ["horario1", "horario2"],
			},
			{
				id: 2,
				nome: "nome2",
				especialidade: "especialidade2",
				horarios_disponiveis: ["horario3", "horario4"],
			},
		]
		mockAgendaRepository.getAgendaLista.mockReturnValue(mockMedicos)

		const response = agendaService.getAgenda()
		const mock = {
			medicos: mockMedicos,
		}
		expect(response).toEqual(mock)
		expect(mockAgendaRepository.getAgendaLista).toHaveBeenCalledTimes(1)
	})

	test("should return object agenda when called with id", () => {
		const mockAgenda = {
			id: 1,
			nome: "nome1",
			especialidade: "especialidade1",
			horarios_disponiveis: ["horario1", "horario2"],
		}
		mockAgendaRepository.getAgendaById.mockReturnValue(mockAgenda)

		const response = agendaService.getAgendaById(1)
		expect(response).toEqual(mockAgenda)
		expect(mockAgendaRepository.getAgendaById).toHaveBeenCalledTimes(1)
	})
})
