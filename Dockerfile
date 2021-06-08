FROM node:10 as build-step

WORKDIR /app
COPY package.json .

RUN npm install

# COPY . /app

EXPOSE 3000

# FROM nginx:1.17.1-alpine
# COPY --from=build-step /app/build /usr/share/nginx/html
CMD ["npm", "start"]