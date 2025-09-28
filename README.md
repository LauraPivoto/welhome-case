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

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env` (na raiz do projeto):

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD="sua_senha"
   DB_DATABASE=properties_db
   PORT=3000
   ```

4. Inicie o servidor em ambiente de desenvolvimento:

   ```bash
   npx nodemon index.js
   ```

   O servidor rodará em:
   👉 http://localhost:3000

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

## 📑 Exemplo de corpo (Property)

```json
{
  "title": "Hotel 2",
  "address": "Endereço 5",
  "status": "inactive"
}
```
