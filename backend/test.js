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
// REST API ek API hoti hai jo REST rules follow karti hai.

// Example:

// GET /users

// Iska matlab:

// Server se users ka data lao.REST API — Complete Beginner to Practical Guide 🚀




//query parameter, and path parameter 

// const express = require("express");

// const app = express();

// const users = [
//   { id: 1, name: "Rahul", age: 20 },
//   { id: 2, name: "Aman", age: 22 },
//   { id: 3, name: "Rohit", age: 20 },
//   { id: 4, name: "Neha", age: 25 }
// ];

// // PATH PARAM EXAMPLE
// app.get("/users/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const user = users.find((u) => u.id === id);

//   res.json(user);
// });

// // QUERY PARAM EXAMPLE
// app.get("/users", (req, res) => {
//   const age = Number(req.query.age);

//   const filteredUsers = users.filter(
//     (u) => u.age === age
//   );

//   res.json(filteredUsers);
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });  



// postman api testing  

// const express = require('express');
// const app = express();
// app.get('/users', (req, res) => {
//   res.json({ message: "Hello" });
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

//  


// new topic database postgreSQL and pagination
// const express = require("express");
// const pool = require("../db");

// const router = express.Router();

// router.get("/", async (req, res) => {
//   try {

//     const page = Number(req.query.page) || 1;
//     const limit = Number(req.query.limit) || 2;

//     const offset = (page - 1) * limit;

//     const result = await pool.query(
//       `
//       SELECT *
//       FROM users
//       ORDER BY id
//       LIMIT $1 OFFSET $2
//       `,
//       [limit, offset]
//     );

//     res.json({
//       page,
//       limit,
//       data: result.rows
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Server Error"
//     });
//   }
// });

// module.exports = router;


// filtering  wich condition dimand  and response on this condition
 const express = require("express");
const app = express();

const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "mobile",
    brand: "apple"
  },
  {
    id: 2,
    name: "Galaxy S24",
    category: "mobile",
    brand: "samsung"
  },
  {
    id: 3,
    name: "MacBook",
    category: "laptop",
    brand: "apple"
  }
];

// GET /products
app.get("/products", (req, res) => {
  const category = req.query.category;

  let result = products;

  if (category) {
    result = products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  res.json(result);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});