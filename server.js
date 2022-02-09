const express = require('express');
const dotenv = require('dotenv');

const { graphqlHTTP } = require("express-graphql");
const schema = require("./GraphQL/index");
const ConnectDB = require('./config/DB')

// This should be at the top after decl.
dotenv.config()


const app = express()

// Database Connection
ConnectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
);


const port = process.env.PORT 
app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})

