// Imports express from the node_modules folder 
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const req = require('express/lib/request');
const { json } = require('express/lib/response');
app.use(bodyParser.json())

let todos = [];
let number_of_todos = 0;

app.get('/todo', function (req, res) {
  res.json({todos});
})

app.get('/todo/:id', function (req, res) {
    let index = req.params.id - 1;
    res.json(todos[index]);
  })


// Opens up a port on your computer for the server to listen to incoming request

let deleteNumber = []
let updatedTaskIndex = []
let deletedTask = []

app.delete('/delete', function(req, res) {
    deleteNumber.push(req.body.deleteTask);
    deletedTask.push(todos[deleteNumber[0]])
    todos.splice(deleteNumber[0] - 1, 1);
    deleteNumber.splice(0 , 1);
    res.json(todos);
    res.json(deletedTask)

    console.log(deleteNumber);
    console.log(todos)
    console.log(number_of_todos);
})

// app.post('/todo', function(req, res) {
//     number_of_todos++;
//     todos.push(req.body.todo);
//     res.json(todos[todos.length - 1]);
//     console.log(todos);
//     console.log(number_of_todos);
// })
app.post('/todo', function(req, res) {
    //console.log(req.body.list.length);
    //Check if there is an array called list
        if(req.body.list == undefined){
            // Add a single todo
            todos.push({id: number_of_todos++, todo: req.body.todo});
            res.json({todo: todos[-1]});
        } else if(req.body.list.length > 0){
            for(let i=0; i < req.body.list.length; i++){
                todos.push({id: number_of_todos++, todo: req.body.list[i].todo});
            }
            res.json("Bulk Insert");
    }
    
})
// let newTask = []
// app.post('/multiple', function(req, res) {
//     newTask.push(req.body.todo);
//     for(let i = 0; i < newTask.length; i++){
//     todos.push(newTask[i]);
//     newTask[0].splice[0, 1];
//     res.json(todos);
//     console.log("new Task", newTask)
//     console.log("todos", todos);
//     }
// })

app.patch('/patch', function(req, res){
    updatedTaskIndex.push(req.body.taskNumber);
    todos.push(req.body.updatedTask);
    todos.splice(updatedTaskIndex[0] - 1, 1, todos[todos.length - 1 ]);
    todos.splice(todos.length - 1, 1)
    updatedTaskIndex.splice(0,1)
    res.json(todos);
    console.log(updatedTaskIndex);
    console.log(todos);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    console.log(todos);
    console.log(number_of_todos);
})


// Things are called endpoints
// just putting array[-1] just to the end of array
// semi collon used to set parama in path(url) ex /todo/:id/:date
/* query parameters: (?) the client is asking for specific data from your server.
                  query parameters are almost always exclusive to get endpoints
                  
    2.) path parameters(:):the client is making a change to specific resource within the database. Henerally used with POST/PUT/DELETE endpoints.

    3). Body:               the client prociede the indformation to change or create an an existing resource within the database
    
    Both query and path parameters can be accessed in javascript using the req (request) 
    */
