# BLOX - API Ruby on Rails + ReactJS

**Para esta versão, foi usado o princípio de MVP. Existem melhorias que podem ser discutidas e implementadas**

# Produção

A API_BASE está disponível no endereço:
https://blox-backend.herokuapp.com

O front-end foi hospedado usando surge.sh e está disponível em:
http://blox-frontend.surge.sh/


# Endpoints

**Users:**
* GET /api/v1/users             ----> Retorna a lista de usuários cadastrados
* GET /api/v1/users/:id         ----> Retorna um usuário, com base no parâmetro :id (**função não implementada no front-end**)
* POST /api/v1/users            ----> Cria usuários com base em dois parâmetros: {"name": "...", "cpf": "..."} que devem ser enviados no body da requisição. Existem validações no front e no back que exigem que o campo "name" tenha no mínimo 10 caracteres e que o campo "cpf" tenha 11 dígitos (**front**) e seja válido, conforme cálculo padrão de CPF.
* PUT/PATCH /api/v1/users/:id   ----> Atualiza os dados de um usuário, com base no parâmetro :id
* DELETE /api/v1/users/:id      ----> Deleta um usuário, com base no parâmetro :id
