# Projeto de Agendamento Leve Saúde

## Pré-requisitos para execução

- Node.js: v20.15.0

## Instruções de Uso

Navegue até a pasta do projeto e execute `npm i` para instalação das dependências de projeto.

Executar `npm run server` que irá iniciar o serviço serverless offline.

Executar `npm run test` para testes automatizados com jest.

## Estrura do código 

- src/
    - agenda/: Contém a lógica para gerenciar agendas
    - agendamento/: Lida com agendamentos de consultas
    - utils/: Funções utilitárias

## Acesso

As rotas para acessos serão:
- http://localhost:3000/dev

### Endpoints

- GET /agendas
    - Resposta: 
        ```json {
            "medicos": [
                {
                    "id": 1,
                    "nome": "Dr. João Silva",
                    "especialidade": "Cardiologista",
                    "horarios_disponiveis": [
                        "2024-10-05 09:00",
                        "2024-10-05 10:00",
                        "2024-10-05 11:00"
                    ]
                },
                {
                    "id": 2,
                    "nome": "Dra. Maria Souza",
                    "especialidade": "Dermatologista",
                    "horarios_disponiveis": [
                        "2024-10-06 14:00",
                        "2024-10-06 15:00"
                    ]
                }
            ]
        }
- POST /agendamento
    - Parâmetros:
        - medico_id: number
        - paciente_nome: string
        - data_horario: string
    - Resposta: 
        ```json {
            "mensagem": "Agendamento realizado com sucesso",
            "agendamento": {
                "medico": "Dr. João Silva",
                "paciente": "Carlos Almeida",
                "data_horario": "2024-10-05 09:00"
            }
        }