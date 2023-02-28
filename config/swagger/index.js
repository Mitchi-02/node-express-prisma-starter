require("dotenv").config()

const port = process.env.SERVER_PORT;

module.exports.options = {
    swagger : "2.0",
    definition: {
        openapi : "3.0.3",
        info : {
            title : "Project api",
            version : "1.0.0",
        },
        servers : [
            {
                url : "localhost:" + port
            }
        ]
    },
    "schemes": ["http"],
    "consumes": ["application/json"],
    "produces": ["application/json"]
}