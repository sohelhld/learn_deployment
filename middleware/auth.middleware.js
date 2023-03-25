const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    if(token){
        // jwt.verify(token,"masai",(err,decoded)=>{
        // })

        //if i want to store decoded then
        const decoded=jwt.verify(token,"masai")
        if(decoded){
            next()
        }else{
            res.status(400).send({"msg":"please loging first"})
        }
    }else{
        res.status(400).send({"msg":"please loging first"})
    }

}

module.exports={
    auth
}

