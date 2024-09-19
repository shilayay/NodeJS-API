const express = require('express')
const app = express()

app.use(express.json());

const users =[
  {id:1, name: 'Alice'},
  {id:2, name: 'Bob'},
  {id:3, name: 'Charlie'},
];
app.get('/users', (req, res)=> {
  return res.json(users);
})
app.post('/add-user',(req,res)=>{
  const {name} = req.body;
  const userFound=users.find((user)=>user.name.includes(name));
  if(userFound){
    return res.status(400).json({error:'name already exists'});
  }

  if(!name ){
    return res.status(400).json({error:'name required'});
  }
  const newUser={
    id: users.length+1,
    name,
  }
  users.push(newUser);
  return res.status(201).json(users);
});
app.listen(3000,()=>{
    console.log("server is running on LH:3000");
})


// const user= require('./users')
// console.log(user.users[0]);
// console.log(user.getUser(1));


// const fs= require('fs');
// const path = require ('path');
// const http = require ('http');

// // http.createServer((req,res)=>{
// //     res.writeHead(200,{'Content-Type': 'text/plain'});
// //     res.end('Hello world');
// // }).listen(3000);


// const filePath= path.join(__dirname,'hello text');
// console.log(filePath);

// function createFile(){
//     fs.writeFileSync('hello.txt', "hello, World");
// }

// function readFile(){
//     const data =fs.readFileSync('hello.txt', 'utf8')
//     console.log(data);
// }
// //readFile();
