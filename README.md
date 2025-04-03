## Conecta tu proyecto
git clone https://github.com/BenitoBB/next

## Probar Con Contenedor Docker
# Construir la Imagen Docker
docker build -t nextjs-app .

# Una vez construida la imagen, inicia el contenedor:
docker run -p 3000:3000 nextjs-app


## Probar Localmenete 
# Instalar dependencias
npm install

# Correr proyecto
npm run dev"# Next" 
