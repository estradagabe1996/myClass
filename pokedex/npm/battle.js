function startGame() {
    let pokemonData = [];
    fetch("http://localhost:3000/pokedex?all")
        .then((response) => response.json())
        
        .then((data) => {
            pokemonData = data;
            console.log(pokemonData[0].name);
            let test1 = document.getElementById('testdiv');
            test1.innerHTML = pokemonData[0].name;
        });
        // let test1 = document.getElementById('pokemon1');
        // console.log(pokemonData;
        // test1.innerHTML = pokemonData
        
    }
    // startGame();
    
    // Mock API Data because cant fetch it:
    // let pokemonData = 
    // [
    //     {
    //         "id": 1,
    //         "name": "Charmander",
    //         "type": "Fire",
    //         "region": "Kanto",
    //         "abilities": "Blaze",
    //         "image": "https://img.pokemondb.net/artwork/avif/charmander.avif"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Machop",
    //         "type": "Fighting",
    //         "region": "Kanto",
    //         "abilities": "Guts",
    //         "image": "https://img.pokemondb.net/artwork/avif/machop.avif"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Squirtle",
    //         "type": "Water",
    //         "region": "Kanto",
    //         "abilities": "Torrent",
    //         "image": "https://img.pokemondb.net/artwork/avif/squirtle.avif"
    //     },
    //     {
    //         "id": 4,
    //         "name": "Bulbasaur",
    //         "type": "Grass",
    //         "region": "Kanto",
    //         "abilities": "Overgrow",
    //         "image": "https://img.pokemondb.net/artwork/avif/bulbasaur.avif"
    //     },
    //     {
    //         "id": 5,
    //         "name": "Pikachu",
    //         "type": "Electric",
    //         "region": "Kanto",
    //         "abilities": "Lightning Strike",
    //         "image": "https://img.pokemondb.net/artwork/avif/pikachu.avif"
    //     },
    //     {
    //         "id": 6,
    //         "name": "Onix",
    //         "type": "Rock",
    //         "region": "Kanto",
    //         "abilities": "Smash",
    //         "image": "https://img.pokemondb.net/artwork/avif/onix.avif"
    //     },
    //     {
    //         "id": 7,
    //         "name": "Caterpie",
    //         "type": "Bug",
    //         "region": "Kanto",
    //         "abilities": "Harden",
    //         "image": "https://img.pokemondb.net/artwork/avif/caterpie.avif"
    //     },
    //     {
    //         "id": 8,
    //         "name": "Sandshrew",
    //         "type": "Ground",
    //         "region": "Kanto",
    //         "abilities": "Dig",
    //         "image": "https://img.pokemondb.net/artwork/avif/sandshrew.avif"
    //     },
    //     {
    //         "id": 9,
    //         "name": "Oddish",
    //         "type": "Grass",
    //         "region": "Kanto",
    //         "abilities": "Chlorophyll",
    //         "image": "https://img.pokemondb.net/artwork/avif/oddish.avif"
    //     }
    // ];
    
    
    
    // Creating the website with DOM
    // Cant test it with fetch data yet because CORS header 'Access-Control-Allow-Origin' missing
    // Download an extention for it to be allowed BUT website keeps resetting
    function battle() {
    
    // Creating the image elements with DOM to put the pics inside
    let pokemon1 = document.getElementById('pokemon1');
    pokemon1.setAttribute('class', 'pokemon');
    
    let pokemon1Image = document.createElement('img');
    pokemon1Image.setAttribute('class', 'pokemonImage');
    pokemon1Image.setAttribute('id', 'pokemon1Animate');
    
    let pokemon2 = document.getElementById('pokemon2');
    pokemon2.setAttribute('class', 'pokemon');
    
    
    let pokemon2Image = document.createElement('img');
    pokemon2Image.setAttribute('class', 'pokemonImage');
    pokemon2Image.setAttribute('id', 'pokemon2Animate');
    
    // Making these variables global
    let randomPokemon1;
    let randomPokemon2;
    generatePokemon();
    
    // Generate random ID to choose random pokemons
    function generatePokemon() {
        randomPokemon1 = Math.ceil(Math.random() * 8);
        // console.log("pokemon 1:", randomPokemon1);
        randomPokemon2 = Math.ceil(Math.random() * 8);
        // console.log("pokemon 2:", randomPokemon2);
    }
    
    // Conditional statements to make sure that the pokemons are not the same
    if (randomPokemon1 !== randomPokemon2) {
        pokemon1Image.src = pokemonData[randomPokemon1].image;
        pokemon2Image.src = pokemonData[randomPokemon2].image;
    }
    else if (randomPokemon1 === randomPokemon2) {
        generatePokemon();
        if(randomPokemon1 !== randomPokemon2) {
            pokemon1Image.src = pokemonData[randomPokemon1].image;
            pokemon2Image.src = pokemonData[randomPokemon2].image;
        }
    }
    
    
    pokemon1.appendChild(pokemon1Image);
    pokemon2.appendChild(pokemon2Image);
    
    // Disables the Battle button so that user cant load multiple pokemons against each other (only 2 at a time)
    document.getElementById('battleButton').disabled = true;
    }
    
    function pokemon1Selected() {
        let pokemon1 = document.getElementById('pokemon1Animate');
        let pokemon2 = document.getElementById('pokemon2Animate');
        pokemon1.setAttribute('class', 'pulse animated infinite');
        pokemon2.removeAttribute('class', 'pulse animated infinite');
    }
    
    function pokemon2Selected() {
        let pokemon1 = document.getElementById('pokemon1Animate');
        let pokemon2 = document.getElementById('pokemon2Animate');
        pokemon2.setAttribute('class', 'pulse animated infinite');
        pokemon1.removeAttribute('class', 'pulse animated infinite');
    
    }

