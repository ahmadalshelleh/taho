To run:

add env file containing:
  PORT
  CONNECTION_URL //for mongodb connection
  
RUN: npm run start:development

routes:
1- /get-all-instructors
2- /get-student/{id}
3- /get-all-data-student/{id}
4- /create-user

example data to create user:
{
    "first_name": "sam",
    "last_name": "zee",
    "dob": "1994-05-23",
    "major": "it"
}
