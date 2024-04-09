-- creating a table of 3 todos 


CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    todo VARCHAR (100),
    completedTask BOOLEAN
);

INSERT INTO todos 
    (todo,completedTask)
VALUES 
    ('find nemo',false),
    ('race lightning',false),
    ('train the dragon',false);