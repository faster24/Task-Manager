const express = require('express');
const app = express();
const connectDB = require('./db/connect')
const notFound = require('./middlewares/not-found')
const asyncWrapper = require('./middlewares/async.js')
const cors = require('cors');
require('dotenv').config();

//middleware
app.use(
    cors({
        origin: "*",
    })
);

app.use(express.static('./public'));

app.use(express.json());

//route
const tasks = require('./routes/tasks')

app.use('/api/v1/tasks' , tasks )
app.use(notFound)
app.use(asyncWrapper)

const port = process.env.PORT || 3000;

const start = async () => {
    try {

        await connectDB(process.env.MONGO_CONNECTION)
        app.listen(port , console.log(`server is listening on port: ${port}`))

    } catch(e){
        console.log(error)
    }
}

start()


