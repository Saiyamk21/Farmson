import express from "express"
import bodyParser from "body-parser"
import db from "./db.js";
import cors from "cors"

db.connect();

const app=express();
const port=3000;
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}))


//top
app.get("/products/top",async(req,res)=>{
   try{
      const result=await db.query("SELECT * FROM top")
   }
   catch(err){
      console.error(err.message);
   }
})

//fruits home
app.get("/products/1",async(req,res)=>{
   try{
      const results=await db.query("SELECT * FROM products WHERE cat='fruit&veg'");
      console.log(results.rows);
      res.json(results.rows);
   }
   catch(err){
      console.error(err.message);
   }
})

//dairy home
app.get("/products/2",async(req,res)=>{
   try{
      const results=await db.query("SELECT * FROM products WHERE cat='dairy&deli'")
      res.json(results.rows);

   }
   catch(err){
      console.error(err.message);
   }
})

//products/millk
app.get("/products/milk",async(req,res)=>{
   try{
      const results=await db.query("SELECT * FROM products WHERE subcat='dairy'");
      res.json(results.rows);
   }
   catch(err){
      console.error(err.message);
   }
  })

  //products/poultry
   app.get("/products/poultry",async(req,res)=>{
   try{
      const results=await db.query("SELECT * FROM products WHERE subcat='poultry'");
      res.json(results.rows);
   }
   catch(err){
      console.error(err.message);
   }
  })

    //products/meat
    app.get("/products/meat",async(req,res)=>{
      try{
         const results=await db.query("SELECT * FROM products WHERE subcat='meat'");
         res.json(results.rows);
      }
      catch(err){
         console.error(err.message);
      }
     })

//products/fruits
app.get("/products/fruits",async(req,res)=>{
 try{
    const results=await db.query("SELECT * FROM products WHERE subcat='fruit'");
    res.json(results.rows);
 }
 catch(err){
    console.error(err.message);
 }
})

//products/vegetable
app.get("/products/vegetable",async(req,res)=>{
   try{
      const results=await db.query("SELECT * FROM products WHERE subcat='vegetable'");
      res.json(results.rows);
   }
   catch(err){
      console.error(err.message);
   }
  })

  //products/spices
   app.get("/products/spice",async(req,res)=>{
   try{
      const results=await db.query("SELECT * FROM products WHERE subcat='spice'");
      res.json(results.rows);
   }
   catch(err){
      console.error(err.message);
   }
  })

  
  //products/cereals
  app.get("/products/cereal",async(req,res)=>{
   try{
      const results=await db.query("SELECT * FROM products WHERE subcat='cereal'");
      res.json(results.rows);
   }
   catch(err){
      console.error(err.message);
   }
  })

  
  //products/pulse
  app.get("/products/pulse",async(req,res)=>{
   try{
      const results=await db.query("SELECT * FROM products WHERE subcat='pulse'");
      res.json(results.rows);
   }
   catch(err){
      console.error(err.message);
   }
  })

  
  //products/dryfruit
  app.get("/products/dryfruit",async(req,res)=>{
   try{
      const results=await db.query("SELECT * FROM products WHERE subcat='dryfruit'");
      res.json(results.rows);
   }
   catch(err){
      console.error(err.message);
   }
  })

app.listen(3000,()=>{
    console.log("listening on 3000");
})


