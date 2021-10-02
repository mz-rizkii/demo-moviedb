# demo-moviedb
Demo OMDB consumer
express.js api sample to consume OMDB API and store visitor log to DB

# Requirements
MySQL for DBMS
Nodejs 

# Dependencies
1. express
2. sequelize
3. sequelize-cli
4. mysql2
5. dotenv
6. axios

# Directory Structure
- ./.env.template : Template for env vars
- ./index.js : Main function for express application
- ./.sequelizerc : mapping information to sequelize directory
- ./db/config/config.js : Connection string to database 
- ./db/migrations/ : Migration file for table structure
- ./db/models/ : ORM models for every table in DB
- ./db/visitor_log_repository.js : handlers for CRUD to visitor_log model
- ./lib/router.js : router to map endpoint to its controller
- ./lib/handlers/movie_client.js : handler to process request & request to omdb API
- ./lib/helper/axios_helper.js : wrapper function to axios library
- ./lib/helper/config_helper.js : wrapper to manage env vars
- ./lib/helper/timestamp_helper.js : helper to get unix timestamp
- ./lib/services/movie_service: service to handle bussines logic for each endpoint 

# The solution for other cases are below:
1. Simple Database querying  (question 1)
    - file ./db/user_repository.js function showUserParents
2. refactor function (question 3)
    - file .lib/handlers/refactor.js
    - function findFirstStringInBracket -> updated codes 
3. Anagram (question 4)
   - file .lib/handlers/anagram.js
   - function groupAnagramWords  -> to group list of string as anagram list
   - function hasSameLengthAndChar -> compare if 2 words are anagram  

# Test cases
Integration test using supertest: 
- ./test/integration/test_endpoibst.js : test case for endpoints
Unit test using mocha chai can be found below: 
- ./test/unit/test_join_query.js : test case for question 1
- ./test/unit/test_omdb_helper.js : test case for question 2
- ./test/unit/test_refactor_function.js : test case for question 3
- ./test/unit/test_anagram.js : test case for question 4

