import express, { Response, Request } from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"
import myUserRoute from './routes/MyUserRoute'
mongoose.connect(process.env.MONGO_URI as string)
    .then(() => console.log("Connected to database!"))
const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/my/user", myUserRoute)

app.listen(7000, () => {
    console.log("Server Started at localhost:7000")
})