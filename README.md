# Pousada Pedra Furada
Aplicação web desenvolvida como projeto da disciplina **Desenvolvimento Web III**.  
O objetivo do projeto é criar uma aplicação moderna utilizando **Next.js**, seguindo boas práticas de desenvolvimento como **TDD (Test Driven Development)**, **CI/CD** e **controle de versão com Git**.

---

## 📌 Objetivo do Projeto

Este projeto tem como finalidade construir uma aplicação web estruturada, utilizando tecnologias modernas do ecossistema JavaScript, além de aplicar conceitos importantes como:

- Versionamento de código com Git e GitHub
- Testes automatizados com Jest
- Organização de código em componentes
- Estrutura de APIs RESTful
- Boas práticas de desenvolvimento

---

## 🚀 Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias:

- **Node.js**
- **Next.js**
- **React**
- **Prisma ORM**
- **MySQL ou PostgreSQL**
- **Jest**
- **React Testing Library**
- **Docker (opcional para padronização de ambiente)**

---

## 📂 Estrutura do Projeto

A estrutura de pastas do projeto foi organizada da seguinte forma:
.github/
workflows/ → Configuração de CI (integração contínua)

src/
components/ → Componentes reutilizáveis da interface
hooks/ → Hooks personalizados do React
lib/ → Funções utilitárias e bibliotecas internas
pages/api/ → Rotas da API
tests/ → Testes automatizados da aplicação

prisma/
→ Schema do banco de dados e migrations

public/
→ Arquivos estáticos (imagens, ícones, etc.)

---

## ⚙️ Instalação do Projeto

Para executar o projeto em sua máquina, siga os passos abaixo.

### 1️⃣ Clonar o repositório


git clone https://github.com/seuusuario/pousada-pedra-furada.git


### 2️⃣ Acessar a pasta do projeto


cd pousada-pedra-furada


### 3️⃣ Instalar as dependências


npm install


### 4️⃣ Executar o projeto


npm run dev


Após isso, o projeto estará disponível no navegador em:


http://localhost:3000


---

## 🧪 Testes Automatizados

O projeto utiliza **Jest** e **React Testing Library** para realizar testes automatizados.

Para executar os testes:


npm test


O Jest irá:

- Procurar arquivos `.test.js` ou `.test.jsx`
- Criar um ambiente DOM virtual
- Executar os testes e mostrar os resultados no terminal

---

## 📦 Scripts Disponíveis

Os principais scripts do projeto são:


npm run dev


Executa o servidor de desenvolvimento.


npm run build


Cria a versão de produção da aplicação.


npm run start


Executa a aplicação em modo produção.


npm test


Executa os testes automatizados.

---

## 🔧 Boas Práticas de Commit

O projeto segue uma convenção de commits para facilitar o entendimento das mudanças.

Exemplos:


feat: adiciona nova funcionalidade
fix: corrige erro na API
docs: atualização da documentação
refactor: melhoria na estrutura do código
test: adiciona novos testes


---

## 👨‍💻 Autor

Projeto desenvolvido para fins acadêmicos na disciplina **Desenvolvimento Web III**.

Aluno: **Gabriel Costa Lima**

---

## 📚 Referência

Material de apoio e guia de montagem do repositório fornecido pelo professor **Renato de Pierri**.