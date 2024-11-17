# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./
COPY . .

# Instalar dependencias
RUN npm install --production

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]