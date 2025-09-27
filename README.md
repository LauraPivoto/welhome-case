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
* **MySQL** (ou outro banco de dados relacional)

---

## ⚙️ Instalação e execução

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/properties-api.git
   cd properties-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=properties_db
   PORT=3000
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

   O servidor rodará em:
   👉 [http://localhost:3000](http://localhost:3000)

---

## 🔗 Endpoints principais

### Listar imóveis

`GET /properties`

### Criar novo imóvel

`POST /properties`

### Atualizar imóvel

`PUT /properties/{id}`

### Deletar imóvel

`DELETE /properties/{id}`

---

## 📑 Exemplo de esquema (Property)

```json
{
  "title": "Hotel 2",
  "address": "Endereço 5",
  "status": "inactive"
}
```
