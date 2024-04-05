//Imports express from the node_modules folder
const express = require('express')

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json

let todos = [];
let number_of_todos = 1;
let clientID = 0;

// create a function for the client errors 
function clientError(req, message, errorCode){
    logger.log({
        level: 'info',
        endpoint: req.path,
        method: req.method,
        query_parameters: req.query,
        path_parameters: req.query,
        ip: req.ip,
        body: req.body,
        error: errorCode, 
        message: message,
        timestamp: new Date(),
    })
}

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


// GET requests should never have a body
//  /* <= this is called a wild card, it a shortcut to show every endpoint 

/*
Middleware: 
    Creates a log for every API call
*/
app.all('/*', (req, res, next) => {
    logger.log({
        level: 'info',
            endpoint: req.url,
            method: req.method,
            query_parameters: req.query,
            path_parameters: req.params,
            ip: req.ip,  
            body: req.body,
            timestamp: new Date(),
        });
        next()
})

/*
Endpint:
    returns a list of all todos, if an id is provided, only a single todo is returned. 
Query Parameters: 
    id[number]: the id of the todo
*/

app.get('/todo', (req, res)=> {
    // Check if a body was provided in the request
    if(Object.keys(req.body).length != 0) {
        clientError(req, "Request body is not permitted", 400)
        res.status(400).json({error: "Request body is not permitted"});
    } 
    //Check if more than one query parameter was passed
    else if(Object.keys(req.query).length > 1){ 
        res.status(400).json({error: "Query Parameters do not meet requirements"});
    }
    // Ensures no parameter other than list or id are passed
    else if((Object.keys(req.query).length != 0) && (Object.keys(req.query)[0] != "id")){
        res.status(400).json({error: "Query Parameters do not meet requirements"});
    }
    // Checks to make sure that the id is a number
    else if(isNaN(req.query.id) && req.query.id != undefined){
        res.status(400).json({error: "id provided is not a number"});
    }
    // Request format was correct so we can proceed with the request
    else {
        // Check if an id was passed from the client, if no, return all todos
        if(req.query.id == undefined){
            res.json({todos});
        }
        // If an id is passed, only one todo will be returned 
        else{
            // Client task is a placeholder to determine if a match was found
            // If no task with the provided ID was found, clientTask will remain
            // and empty object. If a match is found, then the task will be stored
            // inside of the clientTask variable
            let clientTask = {}
            // Searching through the tasklist for a matching id
            for(let i=0; i < todos.length; i++){
                if(todos[i].id == req.query.id){
                    // Match was found, save it to clientTask
                    clientTask = todos[i];
                }
            }
            // Match not found, return error
            if(Object.keys(clientTask).length === 0){
                res.status(400).json({error: "Todo with that id not found"});
            } else{
                // Send back matching result
                res.json(clientTask);
            }
        }
    }
})
// object cannot be checked if they are empty! you have to use built in fucntion to check if the object has a ny `keys` 

/*
Endpint:
    Adds a todo to the list. If a list parameter is provided it addds multiple todos in one call
Body:
    todo[string](required): the task to be added to the todolist
    list[array]: an array that contains several todos
*/
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

/*
Endpint:
    Updates an existing todo and modifies its data
Path parameter:
    id[number](required): the task to be updated in the todolist
Body: 
    todo[string]: the task to be updated
    completed[boolean]: the status of the task
*/
app.put('/todo/:id', (req, res)=> {
    // check to make sure Id is only numbers and no letters
    let id = req.params.id - 0;
    console.log(typeof("j" - 0))
    if(typeof(id) == typeof(1)){
        let index = req.params.id - 1;
        todos[index].todo = req.body.todo;
        res.json(todos[index]);
    }else{
        res.json('error I.D. not accepted');
    }
})
if(todos[i] != undefined){
    if(req.body.todo != undefined)
}


/*
Endpint:
    Deletes an existing todo
Path Parameters:
    id[number](required): the id of the task to be deleted in the todolist
*/
app.delete('/todo/:id', (req, res) => {
    // console.logs
    console.log(req.params.id)
    console.log(Object.keys(req.params).length)
    // store the data to be returned to the user after
    let temp;
    // Search through the array till we find the correct ID
    if (Object.keys(req.body).length != 0) {
        res.status(400).json({error: "Nothing can be in body"}); 
    } else if(isNaN(req.params.id)){
        res.status(400).json({error: "ID is not a Number"});
        } else { 
                for(let i = 0; i < todos.length; i++){
                // once the mathcing id is found delete from the array
                    if(todos[i].id == req.params.id){
                    temp = todos[i]
                    todos.splice(i, 1)
                    // This has to go before because its a troll
                } else {
                    res.status(400).json({error: "Invalid ID"})
                }
            }
            res.json(temp);
        }
    })

// dres method 
// dre just added a completed method parameter to the post section 

// Opens up a port on your computer for the server to listen to
// incoming requests
app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})

// assignment is going to be to figure out how to assign IDs to the correct arrays

// dre was teching in the beggining of class that we can use req.query.id to get id without having to put it in the url path

// us the & symbol to use multiple query parameter so todo/:id&:id

// assignment 