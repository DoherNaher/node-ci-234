FROM node:10

WORKDIR /app

COPY package*.json ./
 
## install only the packages defined in the package-lock.json (faster than the normal npm install)
RUN   npm install
# Copy the contents of the project to the image
COPY . .  

CMD ["npm","run","start"]