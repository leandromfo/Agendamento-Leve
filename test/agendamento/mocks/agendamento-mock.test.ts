import { AgendamentoRepositoryInterface } from "../../../src/agendamento/interface/agendamento-repository-interface"
import { AgendamentoMock } from "../../../src/agendamento/mocks/agendamento-mock"

describe("AgendamentoMock", () => {
	let agendamentoMock: AgendamentoRepositoryInterface

	beforeEach(() => {
		agendamentoMock = new AgendamentoMock()
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	test("should return a list of agenda", () => {
		const teste = {
			medico_id: 1,
			paciente_nome: "paciente1",
			data_horario: "data1",
		}
		const response = agendamentoMock.agendar(teste.medico_id,teste.paciente_nome, teste.data_horario)
		expect(response).toEqual(teste)
	})
})
