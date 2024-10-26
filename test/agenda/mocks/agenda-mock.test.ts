import { AgendaRepositoryInterface } from "../../../src/agenda/interface/agenda-repository-interface"
import { AgendaMock } from "../../../src/agenda/mocks/agenda-mock"

describe("AgendaMock", () => {
	let agendaMock: AgendaRepositoryInterface

	beforeEach(() => {
		agendaMock = new AgendaMock()
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	test("should return a list of agenda", () => {
		const response = agendaMock.getAgendaLista()
		expect(response).toBe(AgendaMock.agendas)
	})

	test("should return a agenda when receive an id", () => {
		const response = agendaMock.getAgendaById(1)
		expect(response).toBe(AgendaMock.agendas[0])
	})

	test("should throw 400 if id not exist", () => {
		expect(() => agendaMock.getAgendaById(3)).toThrow(
			"Médico não encontrado"
		)
	})
})
