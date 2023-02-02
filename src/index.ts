import * as express_ from 'express'
/*import express, {Express} from 'express'*/
/*import express = require('express');*/
import {Request,Response} from "express";

let express = express_  // *-* MaGiC Happens Here *-*
let app = express()
/*data- we can read*/
app.use(express.json())

/*request frontend to backend: 1.method 2. endpoint*/
/*methods- post,get,delete,put,patch*/

/*1. method: get , endpoint:http://localhost:8000/ */
/*inside get method there are 2 things i. the endpoint and ii. arrow function to deal with req and res*/

app.get("/", (req:Request,res:Response) => {
res.json('this is get method')
});

const port= 8000;
/*endpoint:http://localhost:8000/*/

app.listen(port, ()=>{
    console.log(`the server is running on http://localhost:$(port)`)
})
