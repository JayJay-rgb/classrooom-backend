import express from 'express';
import  subjectsRouter  from "./routes/subjects";
import cors from "cors";

const app=express();

const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json());

app.use('/api/subjects', subjectsRouter)

app.get('/', (req,res)=>{
    res.send("Hello, welcome to the classroom");
});

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})