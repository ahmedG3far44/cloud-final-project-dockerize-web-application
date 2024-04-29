# Cloud-final-project-dockerize-web-application
  <p>it's a university cloud computing project to dockerize a web application and run two contianers one for node js web server and the other is for mysql database using docker compose.</p>

## Used Technologies :

- <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" width="25" height="25"/>   NEXT JS
  
- <img src="https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png" width="25" height="25"/>   NODE JS (EXPRESS)

- <img src="https://cdn.worldvectorlogo.com/logos/mysql-4.svg" width="25" height="25"/>    MYSQL DB
 
- <img src="https://cdn.worldvectorlogo.com/logos/docker-4.svg" width="25" height="25"/>        Docker compose

  

## Files Structures:
### <img src="https://www.iconpacks.net/icons/4/free-icon-blue-open-folder-11570.png" width="25" height="25"/>  cloud-project-files:
  
  - <img src="https://www.iconpacks.net/icons/4/free-icon-blue-open-folder-11570.png" width="18" height="18"/>  client 
  - <img src="https://www.iconpacks.net/icons/4/free-icon-blue-open-folder-11570.png" width="18" height="18"/>  server 
  - <img src="https://www.iconpacks.net/icons/4/free-icon-blue-open-folder-11570.png" width="18" height="18"/>  sql 
  - <img src="https://cdn.worldvectorlogo.com/logos/docker-4.svg" width="18" height="18"/>  docker-compose file 
    
## Frontend UI:

<img src="https://github.com/ahmedG3far44/cloud-final-project-dockerize-web-application/assets/96004565/4f6ca355-c24d-464e-9318-c2a062fe2c70" alt="" />

## To run the application follow the instructions below:

- make sure the docker is installed in you machine
  
  ```
  docker -v
  ```

  
## Before you start run the docker desktop engine
  
  <img src="https://github.com/ahmedG3far44/cloud-final-project-dockerize-web-application/assets/96004565/9387fcdb-6851-4859-8b5c-231db5febbf9" width="800" alt="" />

- clone the project files to your machine

  ```
  git clone -b master https://github.com/ahmedG3far44/cloud-final-project-dockerize-web-application.git
  ```

- to build the server and db containers run

  ```
  docker compose up -d --build
  ```

## Make sure the server is running successful and the db is connected

  ```
  docker logs node-server-container
  ```

- example of console logs for server and db is connected successfully :
  
    <img src="https://github.com/ahmedG3far44/cloud-final-project-dockerize-web-application/assets/96004565/b0a1e0fa-9980-4c1f-a3a4-ce0c8e7aaf22" alt="" />

    
## Test the front & backend:

  #### Frontend server working on: http://localhost:3000
  #### Backend server working on: http://localhost:8000

## The frontend code is deployed to netlify test the app in the link below:
#### App Link: [cloud-final-project-dockerize-web-application-frontend](https://662fbdfa93c41f3750af1e46--docker-cloud-app.netlify.app/)
