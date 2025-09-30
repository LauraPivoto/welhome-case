# 🏡 Properties API - WelHome

API para gerenciamento de imóveis, com um **CRUD completo** (Create, Read, Update, Delete).

---

## 🚀 Funcionalidades

* 📋 Listar todos os imóveis
* ➕ Cadastrar um novo imóvel
* ✏️ Atualizar um imóvel existente
* ❌ Deletar um imóvel

---

## 📦 Tecnologias utilizadas

* **Node.js** + **Express**
* **MySQL**

---

## ⚙️ Instalação e execução


1. Clone este repositório:

   ```bash
   git clone https://github.com/LauraPivoto/welhome-case.git
   ```

2. Instale as dependências de todo o projeto, front e back-end(são pastas diferentes):

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env` (na raiz do projeto), no código tem o .env.example para ajudar:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD="sua_senha"
   DB_DATABASE=properties_db
   PORT=3000
   ```

4. Inicie o servidor em ambiente de desenvolvimento:

   Para back-end:
   ```bash
   npx nodemon index.js
   ```

   Para o front-end:
   ```bash
   npm run dev
   ```

   👉 Agora é só acessar a página que o terminal indicou!

---

## 🔗 Endpoints principais

### Listar imóveis

```http
GET /properties
```

### Criar novo imóvel

```http
POST /properties
```

### Atualizar imóvel

```http
PUT /properties/:id
```

### Deletar imóvel

```http
DELETE /properties/:id
```

---
