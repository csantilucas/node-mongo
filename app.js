const port = 3000
import express from 'express';

const app = express()
import linkRoute from "./routes/linkRoute.js"
import { connect } from './connection/bd.js';



connect()

app.use('/', linkRoute)

app.listen(port, () => { console.log(`server running on port ${port}`) }
)
