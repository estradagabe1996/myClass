
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
const winston = require('winston');
const { as } = require('pg-promise');
const pgp = require('pg-promise')();
const db = pgp("postres://postgres:goodworks17@localhost:5432/postgres");

// Logger info
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

// _______________________________________________________________________________________________

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

// _______________________________________________________________________________________________

// app endpoints

/* 
POST endpoint
*/
// Adds pokemon to the pokedex
app.post('/pokedex', async function (req, res)  {
    console.log(req.body)
    //displays the pokemon data in the body
    // turns the pokemon data into objects
    await db.none('INSERT INTO pokedex(name, type, abilities, region) VALUES($1, $2, $3, $4)',
    [req.body.name, req.body.type, req.body.abilities, req.body.region]);
    res.json({name: req.body.name, type: req.body.type, abilities: req.body.abilities, region: req.body.region})
    // inserts the pokemon data into post
});
/* 
/*
Endpoint: 
returns a list of pokemons inside the pokedex
Query Parameters:
all: get the whole list of pokemons that are inside this pokedex
id[integer]: the id of the pokemon
name[varchar]: the name of the pokemon
type[varchar]: the pokemon type
region[varchar]: the region the pokemon came from
abilities[varchar]: the abilities of the pokemon
*/
app.get('/pokedex', async (req, res) => {
    // console.log(typeof (toString(req.query)));
    // Makes sure that client does not put in a body in their request
    if(Object.keys(req.body).length != 0) {
        clientError(req, "Request body is not permitted at this endpoint", 400);
        res.status(400).json({error: "Request body is not permitted at this endpoint"});
    } 
    // Makes sure that client only 4 query param (name, type, region, abilities)
    else if(Object.keys(req.query).length > 4) {
        clientError(req, "Query parameters do not meet the requirements", 400);
        res.status(400).json({error: "Query parameters do not meet the requirements length"});
    } 
    // Makes sure that client put in an ID that is a number
    else if(isNaN(req.query.id) && req.query.id != undefined) {
        clientError(req, "ID is not a number", 400);
        res.status(400).json({error: "ID is not a number"});
    } 
    else {
        if(req.query.all === '') {
            res.json(await db.any('SELECT * FROM pokedex'));
        }
        else {
            if(req.query.id != undefined) {
                let checkNullID = await db.oneOrNone('SELECT * FROM pokedex WHERE id = $1', [req.query.id]);
                if(checkNullID === null) {
                    clientError(req, "That ID does not exist", 400);
                    res.status(400).json({error: "That ID does not exist"});
                } else {
                    res.json(await db.oneOrNone('SELECT * FROM pokedex WHERE id = $1', [req.query.id]));
                }
                
            } 
            else if(req.query.party != undefined) {
                let party = await db.many('SELECT * FROM pokedex ORDER BY RANDOM() LIMIT 6');
                res.json(party)
                    
            }
            else if(req.query.name != undefined) {
                let checkNullName = await db.oneOrNone('SELECT * FROM pokedex WHERE name = $1', [req.query.name]);
                if(checkNullName === null) {
                    clientError(req, "That pokemon has not been found yet", 400);
                    res.status(400).json({error: "That pokemon has not been found yet"});
                } 
                else {
                    res.json(await db.oneOrNone('SELECT * FROM pokedex WHERE name = $1', [req.query.name]));
                }
            }
            else if(req.query.region != undefined) {
                let checkNullRegion = await db.many('SELECT * FROM pokedex WHERE region = $1', [req.query.region]);
                if(checkNullRegion === null) {
                    clientError(req, "That pokemon has not been found yet", 400);
                    res.status(400).json({error: "That pokemon has not been found yet"});
                } 
                else {
                    res.json(await db.many('SELECT * FROM pokedex WHERE region = $1', [req.query.region]));
                }
            }
            else if(req.query.type != undefined) {
                let checkNullType = await db.oneOrNone('SELECT * FROM pokedex WHERE type = $1', [req.query.type]);
                if(checkNullType === null) {
                    clientError(req, "That pokemon has not been found yet", 400);
                    res.status(400).json({error: "That pokemon has not been found yet"});
                } 
                else {
                    res.json(await db.oneOrNone('SELECT * FROM pokedex WHERE type = $1', [req.query.type]));
                }
            }
            else if(req.query.abilities != undefined) {
                let checkNullAbilities = await db.oneOrNone('SELECT * FROM pokedex WHERE abilities = $1', [req.query.abilities]);
                if(checkNullAbilities === null) {
                    clientError(req, "That pokemon has not been found yet", 400);
                    res.status(400).json({error: "That pokemon has not been found yet"});
                } 
                else {
                    res.json(await db.oneOrNone('SELECT * FROM pokedex WHERE abilities = $1', [req.query.abilities]));
                }
            }
        }
    }
    
})


/* 
PUT endpoint
*/

/* 
DELETE endpoint:
deletes a single pokemon by id

Parameters
id: Can only accept numbers that are being used with a current pokemon, wrong ids will come up invalid
*/
app.delete('/pokedex/:id', async(req, res) => {
    // API call
    let pokeData = await db.any('SELECT * FROM pokedex');
    console.log("id: ", req.params.id);
    // store the data to be returned to the user after
    let temp = 0;
    // Search through the array till we find the correct ID
    if (Object.keys(req.body).length != 0) {
        clientError(req, "Nothing can be in the body", 400),
        res.status(400).json({error: "Nothing can be in body"}); 
        // checking id is a number only
    } else if(isNaN(req.params.id)){
        clientError(req, "ID is not a number", 400),
        res.status(400).json({error: "invalid id"});
    } else { 
        // creating variable to be stored in temp value to be returned to customer
        let pokeDataID = await db.any('SELECT * FROM pokedex WHERE id = $1', [req.params.id]);
        // checking if no id was found
        if(pokeDataID == 0){
            clientError(req, "Not a valid id", 400),
            res.status(400).json({error: "Invalid ID"})
            // storing found id and returning to client and removing id from database
        } else {
            temp = pokeDataID[0],
            res.json(temp);
            await db.any('DELETE FROM pokedex WHERE id = $1', [req.params.id]);    
        }
    }
    
    
});

//________________________________________________________________________________________________

let player1;
let player2;

async function battle() {
    
    let player1id = Math.ceil(Math.random() * 8);
    let player2id = Math.ceil(Math.random() * 8);
    
    console.log("player 1 ID: ", player1id, '/n', "player 2: ID", player2id )

    if(player1id === player2id){
        battle(); 
    }
     else {
        if(player1id !== player2id){
            player1 = await db.oneOrNone('SELECT * FROM pokedex WHERE id = $1', [player1id]);
            let player2 = await db.oneOrNone('SELECT * FROM pokedex WHERE id = $1', [player2id]);
            console.log("player 1: ", player1, "player 2: ", player2)
        }  
    }a
    

    // Container for pokemon card
    let pokemonCard = document.createElement("div");
    pokemonCard.classList.add("card");
    

    // Info for card
    let pokemonImage = document.createElement("img");
    let name = document.createElement("p");
    let type = document.createElement("p");
    let abilities = document.createElement("p");
    let region = document.createElement("p");

    // add values
    pokemonImage.src = player1[0].img;
    name.innerText = player1[0].name;
    type.innerText = player1[0].type;
    abilities.innerText = player1[0].abilities;
    region.innerText = player1[0].region;

    // append children
    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(name);
    pokemonCard.appendChild(type);
    pokemonCard.appendChild(abilities);
    pokemonCard.appendChild(region);

    document.body.appendChild(pokemonCard);   
}




//________________________________________________________________________________________________

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})








