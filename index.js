const express = require('express');
require('dotenv').config()

const app = express();

// const sequelize = require('./framework-drivers/infrastructure/database/interface-database')().buildingInitialDatabaseConfig();

app.get('/', (request, response) => {
  response.send("Hello world!");
})

app.listen(process.env.NODE_PORT || 3000, () => console.log(`server listening on ${process.env.NODE_PORT}`));