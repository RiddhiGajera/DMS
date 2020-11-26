# DMS
Document Management System with NodeJs, MongoDb and Docker

## Prerequisite
- Node js
- Docker
- Mongodb

## Execution of project
Execute the below command under the root directory of the project

    ``` docker-compose up --build ```

Execute the project locally
- ``` cd DMS ```
- ``` npm i ```
- ``` npm start ```

## Instructions
- Can login into the system with only below 2 users 
    - "username": "Admin",
   "password": "Admin@123"

    - "username": "Master",
    "password": "Master@123"

- Swagger doc is accessible at ``` http://{host}:8080/ ```
- ER diagram: 
 ![ER diagram](/DMS-ER-Diagram.png)
