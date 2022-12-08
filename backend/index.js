import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import mongoose  from 'mongoose'
import todoRouter from './src/routes/TodoRoutes.js'

const app = express()
const PORT=process.env.PORT || 3000

// middleware
app.use(express.json())


app.use('/api',todoRouter)

// connect  to db
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT,()=>{console.log(`connected to database & server is running at port ${PORT}`);})
})
