# Imagen base con Node.js
FROM node:18-alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de archivos
COPY . .

# Construir la aplicación
RUN npm run build

# Puerto expuesto (el mismo que usa Next.js)
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]