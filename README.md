 API REST de Gestión de Negocio
Este proyecto es una API REST construida con Node.js, Express, MongoDB y documentada con Swagger. Utiliza Docker Compose para levantar los servicios del backend y la base de datos.

 Tecnologías utilizadas
Node.js + Express

MongoDB + Mongoose

Docker + Docker Compose

Swagger UI

dotenv

 Instalación local (sin Docker)
bash
npm install
npm run dev
Asegúrate de tener MongoDB corriendo en tu máquina local y un archivo .env con:

MONGO_URL=mongodb://localhost:27017/miapp
🐳 Ejecución con Docker Compose
Asegúrate de tener Docker instalado, luego ejecuta:

bash
docker compose up --build
Esto levantará:

backend: API Express conectada a MongoDB

mongo: Base de datos MongoDB

Documentación Swagger
Una vez en funcionamiento, accede a la documentación interactiva:

http://localhost:3000/api-docs
Aquí podrás probar los endpoints y ver las estructuras esperadas de los datos.

 Estructura del proyecto
mi-api-rest/
├── controllers/        # Lógica de negocio
├── models/             # Esquemas de MongoDB con Swagger
├── routes/             # Endpoints REST
├── config/             # Configuración de Swagger
├── server.js           # Punto de entrada principal
├── docker-compose.yml  # Configuración de servicios
└── Dockerfile          # Imagen del backend
✅ Endpoints disponibles
Clientes → /api/clientes

Productos → /api/productos

Órdenes → /api/ordenes

Detalles de orden → /api/detalles

Todos los endpoints están documentados en Swagger con parámetros, cuerpo esperado y respuestas.

🔐 Variables de entorno
En .env:

MONGO_URL=mongodb://mongo:27017/miapp
PORT=3000
Docker Compose pasa estas variables automáticamente.
