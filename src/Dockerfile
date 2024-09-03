# Utiliser l'image officielle Node.js version 18.10.0 comme base
FROM node:18.10.0

WORKDIR /app

RUN npm install -g @angular/cli@16.2.15

COPY . .

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
