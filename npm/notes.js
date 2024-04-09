/*
Be kinda vauge in error responses, people can put he puzzle together if you give away to many of the parameters to try and hack your system

api checks 
1. check for api body
2. then check query parameters

assign
were going through each end point and making them air tight
*/

// else if(Object.keys(req.query).length != 0 ) &&
    // (Object.keys(req.query)[0] !=  && Object.keys(req.query)[0])

// else if(isNaN(req.query.id) && req.query.id != undefind) {}

// get in the habit of making food documentation aka good  comments in your code especially in your api's

// ______________________________________________________________________________________________________

/*
                                            postgres
- postgres has to do with data bases 
- there basically just spred sheets
- ex. postgres SELECT * FROM accounts;
    this selects just the accounts 
- ex SELCT id FROM  nba_players; 
- you can get mutiple columns with just &
- ex. SELECT * FROM nba_players WHERE id = 7; 
- select * from cookies;

- INSERT INTO cookies(id, flavor, calories, in_stock)           <= to insert value 
- VALUES(1, "chocolate_chip",true,550,true);                    "values" have to type this u

- when writing strings in postgres you have to use single quotes

so it should be written VALUES (1,'chocolate_chip', t, 550, null, null).

progres will automatically make everything inputed into lowercast 
if you want to keep the casing you need to put "" around teh input
update, select *, delete / sequel commands 

*/