import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import todoRouter from './src/routes/todo.routes.js'

const app = express()
const PORT=process.env.PORT || 3000

// middleware
app.set(express.json())


app.use('/api',todoRouter)


app.listen(PORT,()=>{console.log(`server is running at port ${PORT}`);})