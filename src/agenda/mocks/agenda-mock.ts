import { StatusCodeEnum } from "../../utils/enum/status-code-enum"
import { ErrorUtil } from "../../utils/error/error-util"
import { AgendaDto } from "../dto/agenda-dto"
import { AgendaRepositoryInterface } from "../interface/agenda-repository-interface"

export class AgendaMock implements AgendaRepositoryInterface {
	static agendas = [
		{
			id: 1,
			nome: "Dr. João Silva",
			especialidade: "Cardiologista",
			horarios_disponiveis: [
				"2024-10-05 09:00",
				"2024-10-05 10:00",
				"2024-10-05 11:00",
			],
		},
		{
			id: 2,
			nome: "Dra. Maria Souza",
			especialidade: "Dermatologista",
			horarios_disponiveis: ["2024-10-06 14:00", "2024-10-06 15:00"],
		},
	]

	getAgendaLista(): AgendaDto[] {
		return AgendaMock.agendas
	}

	getAgendaById(id: number): AgendaDto {
		const agenda = AgendaMock.agendas.find(agenda => agenda.id === id)
		if (!agenda)
			throw new ErrorUtil(
				StatusCodeEnum.BAD_REQUEST,
				"Médico não encontrado!"
			)
		return agenda
	}
}
