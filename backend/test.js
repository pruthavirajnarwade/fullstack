// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Backend Running 🚀");
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });  


//  const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send("Hello from Express.js");
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });
// 
   



//ex no.1 of full stack 
//http://localhost:3000/users  ye url hai get ka 

//   const express = require('express');
//   const cors = require('cors');

// const app = express();

// // JSON पढ़ने के लिए
// app.use(cors());  
// app.use(express.json());      // ye middleware hai 

// // fake database
// let users = [
//   { id: 1, name: "Aman" },   // ye json hai 
//   { id: 2, name: "Rahul" }
// ];


// // 🟢 GET → सभी users दिखाओ
// app.get('/users', (req, res) => {
//   res.json(users);
// });


// // 🟡 POST → नया user add
// app.post('/users', (req, res) => {
//   if (!req.body.name) {
//     return res.status(400).json({ message: "Name required" });
//   }

//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name
//   };

//   users.push(newUser);

//   res.status(201).json({
//     message: "User added",
//     user: newUser
//   });
// });


// // 🔵 PUT → user update
// app.put('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id);

//   const user = users.find(u => u.id === id);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   user.name = req.body.name;

//   res.json({
//     message: "User updated",
//     user: user
//   });
// });


// // 🔴 DELETE → user delete
// app.delete('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id);

//   const exists = users.some(u => u.id === id);

//   if (!exists) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   users = users.filter(u => u.id !== id);

//   res.json({
//     message: "User deleted"
//   });
// });


// // 🚀 server start
// app.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });     



// example of middeleware 
// const express = require("express");

// const app = e


// const express = require("express");
// const cors = require("cors");

// const app = express();


// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());



// // FAKE DATABASE
// let users = [
//   {
//     id:1,
//     name:"Aman",
//     email:"aman@gmail.com"
//   }
// ];




// // GET USERS
// app.get("/users",(req,res)=>{

//   res.status(200).json(users);

// });




// // CREATE USER
// app.post("/users",(req,res)=>{

//   const newUser = {

//     id:users.length + 1,

//     name:req.body.name,

//     email:req.body.email

//   };

//   users.push(newUser);

//   res.status(201).json({

//     message:"User created",

//     user:newUser

//   });

// });





// // UPDATE USER
// app.put("/users/:id",(req,res)=>{

//   const id = parseInt(req.params.id);

//   const user = users.find(u => u.id === id);

//   if(!user){

//     return res.status(404).json({
//       error:"User not found"
//     });

//   }

//   user.name = req.body.name;

//   res.status(200).json({

//     message:"User updated",

//     user:user

//   });

// });






// // DELETE USER
// app.delete("/users/:id",(req,res)=>{

//   const id = parseInt(req.params.id);

//   users = users.filter(u => u.id !== id);

//   res.status(200).json({

//     message:"User deleted"

//   });

// });






// // SERVER
// app.listen(3000,()=>{

//   console.log("Server running on port 3000");

// });


// rest api 
