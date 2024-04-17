following extensions and apps were downloaded:-
   node.js, express, innsomnia, mongodb
   
DO NOT USE IITB WIFI DURING ANY INSTALLATION OR WHILE RUNNING THE CODE. IT DOES NOT WORK.

The schema i have implemented is-
        name (string)
        price (num)
        quantity (num)
    id is assigned automatically by database

    the server runs on- 
          http://localhost:3001/api/products

    overview of api:

GET: fetches all  data and returns it to client 
GET(/:id) : fetches product for given id , then returns the product data corresponding to it 
POST: creates a new entry from the request, and returns id
PUT: overrides all the content for the given id (for selective overriding we can use PATCH) by taking id and updating the entry corresponding to that id. Returns success message
DELETE : takes id and deletes the entire entry corresponding to it. Returns success message.
