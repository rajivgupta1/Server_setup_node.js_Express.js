import express from "express";

const app =express();

const PORT = 8000


// middleawares 

app.use(express.json())

//API endpoints
import taskRouter from "./src/router/taskRouter.js";


app.use("/api/v1/task", taskRouter); 

app.use("/", (req, res) =>{
    res.json({ message: "server running healthy"});
});

//open port for http request to access the server

app.listen(PORT, err =>{
    err
    ?console/log(err.message)
    : console.log(`server running at http://localhost:${PORT}`);

});