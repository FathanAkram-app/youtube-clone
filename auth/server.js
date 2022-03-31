const express = require("express");
const app = express()
const port = 8000


app.use(express.urlencoded())

app.post("/auth/live", (req,res)=>{
    const streamkey = req.body.key

    if (streamkey === "Bismillah") {
        res.status(200).send({
            message:"successfull"
        })
        return
    }
    res.status(403).send({
        message: "failed"
    })
    return
})

app.listen(port, ()=>{
    console.log("listening on port 8000")
})