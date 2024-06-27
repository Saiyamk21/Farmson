import express from "express";
import bodyParser from "body-parser";
import db from "./db.js";
import cors from "cors";
import productRouter from "./routes/product1.js";
import axios from "axios";
import bcrypt, { hash } from 'bcrypt'


db.connect();

const app = express();
const port = 3000;
app.use(cors());
const saltRounds=10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/products',productRouter);


app.post('/register',async(req,res)=>{

  const username=req.body.username;
  const password=req.body.password;
  const sucess=false;
  try{
    const results=await db.query("SELECT * FROM users WHERE username=$1",[username]);
    if(results.rows.length > 0){
        res.json(sucess);
    }
    else{
      bcrypt.hash(password,saltRounds,async(err,hash)=>{
        if(err){
          console.error(err);
        } else{
          const result=await db.query("INSERT INTO users(username,password) VALUES ($1,$2) RETURNING *",[username,hash]);
          const user = result.rows[0];
          res.json(true);
          
      }
    });
  }
  }
  catch(err){
    console.error(err);
  }

})
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
