const express = require('express')
const morgan = require('morgan')
const swaggerUi = require("swagger-ui-express")
const { options } = require("../config/swagger")
require('dotenv').config()


const app = express()

app.use(express.json())
app.use(morgan("dev")) // http logger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(options))

app.use('*', (req,res) => res.send("hello"))



// BASE END_POINTS URL SHOULD BE localhost:port
const port = process.env.SERVER_PORT;
app.listen(port, () => console.log('Listening to http requests on port '+port) )