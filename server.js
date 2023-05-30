const express = require("express");
const app = require('./backend/app');

const port = 3000 || process.env.PORT;

app.listen(port, () =>{
    console.log(`Server in running on ${port}`);
})