CREATE TABLE pokedex (
    id SERIAL PRIMARY KEY,
    hp INTEGER,
    name VARCHAR (100),
    type VARCHAR (100),
    abilities VARCHAR (100),
    region VARCHAR (100),
    attack INTEGER,
    defense INTEGER
);

CREATE TABLE pokemonParty(
    id SERIAL PRIMARY KEY,
    hp INTEGER,
    name VARCHAR (25),
    type VARCHAR (25),
    attacks TEXT [], 
    abilities VARCHAR (50),
    attack INTEGER,
    defense INTEGER
);

CREATE TABLE attacks (
    id SERIAL PRIMARY KEY,
    name VARCHAR (25),
    power INTEGER,
    type VARCHAR (25)
);

INSERT INTO pokedex(hp, name, type, abilities, region, attack, defense)
VALUES
    (58, 'Charmander', 'Fire', 'Blaze', 'Kanto', 52, 43),
    (70, 'Machop', 'Fighting', 'Guts', 'Kanto', 80, 50),
    (44, 'Squirtle', 'Water', 'Torrent', 'Kanto', 48, 65),
    (35, 'Pikachu', 'Electric', 'Lightning Strike', 'Kanto', 55, 40),
    (35, 'Onix', 'Rock', 'Smash', 'Kanto', 45, 160),
    (45, 'Caterpie', 'Bug', 'Harden', 'Kanto', 30, 35),
    (50, 'Sandshrew', 'Ground', 'Dig', 'Kanto', 75, 85),
    (45, 'Bulbasaur', 'Grass', 'Overgrow', 'Kanto', 49, 49);

INSERT INTO attacks(name, power, type)
VALUES
    ('Ember', 40, 'Fire'),
    ('Fire Spin', 35, 'Fire'),
    ('Inferno', 100, 'Fire'),
    ('Fire Fang', 65, 'Fire'),
    ('Hydro Pump', 110, 'Water'),
    ('Water Pulse', 60, 'Water'),
    ('Wave Crash', 120, 'Water'),
    ('Vine Whip', 45, 'Grass'),
    ('Razor Leaf', 55, 'Grass'),
    ('Solar Beam', 120, 'Grass'),
    ('Bulldoze', 60, 'Rock'),
    ('Rock Blast', 20, 'Rock'),
    ('Bug Bite', 60, 'Bug'),
    ('Bug Buzz', 90, 'Bug'),
    ('Mud Slap', 20, 'Ground'),
    ('Dig', 80, 'Ground'),
    ('Earthquake', 100, 'Ground'),
    ('Thunder Shock', 40, 'Electric'),
    ('Discharge', 80, 'Electric');

INSERT INTO pokemonParty(hp, name, type, abilities, attacks, attack, defense)
VALUES
    (58, 'Charmander', 'Fire', 'Blaze', ARRAY [''], 52, 43),
    (70, 'Machop', 'Fighting', 'Guts', ARRAY [''], 80, 50),
    (44, 'Squirtle', 'Water', 'Torrent', ARRAY [''], 48, 65),
    (35, 'Pikachu', 'Electric', 'Lightning Strike', ARRAY [''], 55, 40),
    (35, 'Onix', 'Rock', 'Smash', ARRAY [''], 45, 160),
    (50, 'Sandshrew', 'Ground', 'Dig', ARRAY [''], 75, 85);