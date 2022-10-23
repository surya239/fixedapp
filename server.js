import { createRequire } from "module";
const require = createRequire(import.meta.url);
import path from "path";
const express = require("express");
const app = express();
const jwt = require('jsonwebtoken')
const cors = require('cors');
import pool  from './db.js';
import axios from 'axios';
import bcrypt from 'bcrypt';
import {google} from 'googleapis'
import { query } from "express";
app.use(cors());
let L = ['100-0', '80-20', '70-30', '50-50', '30-70', '20-80'];
let x = [1800, 1900, 2000]
let y = [1200, 1300, 1400]
const teamRatio = ['1-5', '1-7', '1-10', '1-12']
const teamLeadSalary = [2500, 2600, 2700]
const projectDuration = 5
const teamLeadRatio = ['1-5', '1-7', '1-10', '1-12']
const pmSalary = [3500, 3600, 3700]
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname,"client/build")))



app.use(express.json())

const PORT = process.env.PORT || 5000;



app.get("*", (req, res) => {
    res.sendStatus(200);
} )

app.listen(PORT, () =>{
    console.log("App Listening in ", PORT)
})