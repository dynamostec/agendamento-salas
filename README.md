# Agendamento Salas

## Sobre #️⃣
Agendamento Salas é um projeto da universade (Unicesumar) que se resume em um sistema que permite gerenciar o agendameto de salas. O software segue os sequintes requisitos:

 1. Cadastro de Usuários 

- **Descrição Detalhada**: O sistema deve fornecer uma interface de cadastro onde os usuários possam criar uma conta. Os campos obrigatórios para o cadastro são: nome completo, e-mail (que deve ser único no sistema) e senha. O sistema deve validar o e-mail para garantir sua unicidade, e a senha deve seguir uma política de segurança mínima, como comprimento de pelo menos 8 caracteres. Após o cadastro, o usuário será redirecionado para a tela de login.

- **Critérios de Aceitação**:
    - O sistema deve impedir o cadastro de um e-mail já utilizado.
    - Se algum campo obrigatório estiver faltando ou inválido, uma mensagem de erro descritiva deve ser exibida.
    - O usuário deve ser redirecionado para a página de login após o cadastro bem-sucedido.

2. Login e Autenticação de Usuários

- **Descrição Detalhada**: Para acessar o sistema, o usuário deve fazer login utilizando o e-mail e a senha cadastrados. O sistema deve verificar as credenciais e, em caso de erro, fornecer uma mensagem explicativa. Após o login, o usuário deve ser direcionado para a página inicial do sistema, onde poderá visualizar e gerenciar suas reservas.
- **Critérios de Aceitação**:
    - Se as credenciais fornecidas estiverem corretas, o usuário deve ser autenticado e redirecionado para a página principal.
    - Em caso de falha na autenticação (ex: e-mail ou senha incorretos), o sistema deve exibir uma mensagem de erro clara.
    - O sistema deve permitir ao usuário redefinir sua senha caso a esqueça.


3. Visualização de Salas Disponíveis 

- **Descrição Detalhada**: A página principal do sistema deve listar todas as salas disponíveis, incluindo informações como nome, capacidade máxima, localização e uma descrição opcional. O usuário pode navegar pelas salas e selecionar uma para ver mais detalhes, como os recursos disponíveis (projetor, quadro branco, etc.).
- **Critérios de Aceitação**:
    - O usuário deve poder visualizar a lista completa de salas com informações relevantes.
    - Ao clicar em uma sala, o sistema deve exibir uma página com mais detalhes sobre a sala e recursos associados.
    - As informações devem ser apresentadas de forma clara e organizada para fácil visualização.

4. Reserva de Sala 
- **Descrição Detalhada**: Após escolher uma sala, o usuário deve poder reservar a sala especificando data, hora de início e término. O sistema deve verificar a disponibilidade no momento da reserva para evitar conflitos e então confirmar a reserva. Após a confirmação, o sistema deve exibir uma mensagem de sucesso e enviar um e-mail de confirmação ao usuário.
- **Critérios de Aceitação**:
    - A reserva deve ser feita somente se a sala estiver disponível no horário solicitado.
    - O sistema deve exibir uma mensagem de sucesso após a reserva.
    - Um e-mail de confirmação deve ser enviado ao usuário contendo os detalhes da reserva.

5. Cancelamento de Reserva 

- **Descrição Detalhada**: O sistema deve permitir que o usuário cancele reservas feitas anteriormente. Uma interface de gerenciamento de reservas deve ser oferecida, onde o usuário pode visualizar suas reservas e optar por cancelar qualquer uma delas. Ao cancelar, a sala deve ser disponibilizada novamente.
- **Critérios de Aceitação**:
    - O usuário deve poder acessar suas reservas e cancelar uma específica.
    - O sistema deve enviar uma confirmação de cancelamento ao usuário.
    - A sala deve ser marcada como disponível após o cancelamento da reserva.

6. Gerenciamento de Salas 

- **Descrição Detalhada**: O sistema deve permitir que administradores adicionem, editem e removam salas do sistema. Para cada sala, o administrador pode definir o nome, capacidade, localização, descrição e recursos disponíveis, como projetor e quadro branco. Apenas administradores devem ter acesso a essas funcionalidades.
- **Critérios de Aceitação**:
    - O administrador deve poder acessar uma interface para gerenciar salas, incluindo a criação de novas salas.
    - O sistema deve permitir ao administrador editar as informações de uma sala existente, como capacidade e recursos.
    - O administrador deve poder excluir uma sala, desde que não tenha reservas ativas no momento da exclusão.

7. Permissão para Administradores e Usuários Comuns 

- **Descrição Detalhada**: O sistema deve fornecer diferentes níveis de acesso, permitindo que administradores gerenciem salas e recursos, enquanto usuários comuns podem apenas visualizar e fazer reservas. Essa separação garante que apenas os administradores possam realizar tarefas de manutenção.
- **Critérios de Aceitação**:
    - O sistema deve permitir que administradores adicionem, editem e excluam salas e recursos.
    - Usuários comuns devem ser restritos a funcionalidades de visualização e reserva.
    - O sistema deve garantir que apenas administradores autenticados tenham acesso a funções administrativas.

---


## Tecnologias ⚒️

### Front-end
- Next.js
- React.js
- CSS
- TypeScript
- HTML
- Axios

### Back-end 
- Nest.js
- TypeORM
- TypeScript

### Banco de dados
- MySQL

---

## Como usar o projeto ⚙️

### Requisitos ⚠️

É necessário que você já tenha o Node.js instalado na sua máquina.

## Passo a passo
O seguinte passo a passo irá te guiar a execução do projeto, siga com atenção: 

### 1° Baixando o projeto

Para esta etapa, existem duas opções:

1. Com git clone.
2. Com aquivo .zip

#### Git Clone


```
IMPORTANTE ⚠️

Para está etapa você precisa ter o Git instalado em sua máquina.
```

Abra seu cmd, no diretório de sua preferência, e execute o seguinte comando: 

 ```
 git clone https://github.com/dynamostec/agendamento-salas.git
 ```

 Após isso, o git criará um pasta com o nome <strong>agendamento-salas</strong>.

#### Arquivo .zip

Acesse o link do repositório <a href="https://github.com/dynamostec/agendamento-salas">aqui</a>, procure pela aba code do repositório, ao abri-lá basta clicar no <strong>Download ZIP</strong> que ele baixará o arquivo .zip, após o download basta extrair no seu diretório de preferência.

### 2° Baixando bibliotecas
Agora, pelo cmd, acesse a pasta do projeto (agendamento-salas), logo depois acesse a pasta <strong>front-end</strong>(agendamento-salas/front-end) e execute o seguinte comando:

```
npm install
```

Após as instalações terminarem, acesse a pasta anterior a <strong>front-end</strong>, a <strong>back-end</strong> (agendamento-salas/back-end), logo depois execute o mesmo comando citado acima: 

```
npm install
```

### 3° Banco de dados
Caso ja tenha baixado o banco de dados MySQL na sua máquina, basta garantir que ele esteja em execução na sua máquina na porta padrão dele (3306). 

Caso não tenha baixado e queira baixar, acesse o seguinte <a href="https://dev.mysql.com/downloads/">link</a> para instalar.

Porém, caso prefire uma forma onde não precisa instalar nenhum banco de dados você pode executar container Docker do MySQL:

#### MySQL com Dokcer
```
IMPORTANTE ⚠️

Para está etapa você precisa ter o Docker instalado e configurado na sua máquina.
```

Com o Docker rodando em sua máquina, acesse a pasta <strong>back-end</strong> (agendamento-salas/back-end), execute o seguinte comando:

```
docker compose up -d
```

Após isso os containers <strong>adminer</strong> e <strong>database</strong> estarão rodando, para acessar o banco de dados, basta acessar o adminer na porta 8080.

### 4° Executando a aplicação

Agora, para executar a aplicação, abra dois cmd, no primeiro cmd, acesse a pasta <strong>front-end</strong> (agendamento-salas/front-end) e execute o seguinte comando:

```
npm run dev
```

Após isso, vá para o segundo cmd, acesse a pasta <strong>back-end</strong> (agendamento-salas/back-end) e execute o seguinte comando

```
npm run start
```

E pronto, a aplicação estará rodando, agora basta abrir o front-end, http://localhost:3000/, no seu navegador de preferência. 

---

## Participantes 👨‍💻

- <a href="https://www.linkedin.com/in/andré-g-oliveira-b41a1a250/">André Gustavo De Oliveira</a>
- <a href="https://www.linkedin.com/in/daniel-rinaldi-272907246/">Daniel Francis Rinaldi Araújo</a>
- <a href="https://www.linkedin.com/in/heitor-hrecek-630109339/">Heitor Gomes Hrecek</a>
- <a href="https://www.linkedin.com/in/joão-crestani-242175272/">João Victor Nascimento Crestani</a>
- <a href="https://www.linkedin.com/in/vitor-hugo-vieira-de-lima/">Vitor Hugo Vieira de Lima</a>

### Professor responsável
- <a href="https://www.linkedin.com/in/rafael-labegalini-61b7bb36/\">Rafael Labegalini</a>


