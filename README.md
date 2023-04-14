# BookStore-System 

## Description:
My project is about a simple bookstore ecommerce website.

## Technologies I use:
- React(JS), Redux.
- NodeJS (ExpressJS, RestAPI).
- MySQL.

## Clone Code:
### 1: Clone this project
### 2: Clone 2 folders client, server seperately
- Client: https://github.com/QuanDinh02/Bookstore-Client.git
- Server: https://github.com/QuanDinh02/Bookstore-Server.git

## How to Use:
### Note: 
- Node version: 14.17.0.
- Testing Website: Google Chrome.

### Client:
- cd to client folder => type command: '**npm install**' to install packages.
- type command: '**npm start**' to run.
- register an account to access /admin route (edit **user_group** attribute your register account to '**1**' in database).

### Server:
- create a database name: '**bookstore**' in mysql database.
- config username, password in file **config.json** in **config** folder as same as your database configuration.
- cd to server folder => type command: '**npm install**' to install packages.
- type command: '**npm start**' to run.
- type command: '**npx sequelize-cli db:migrate**' to generate table in db, '**npx sequelize-cli db:seed:all**' to generate sample table data.

