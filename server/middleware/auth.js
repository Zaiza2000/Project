const jwt = require('jsonwebtoken');

exports.auth = (req, res , next) =>{
    try{
        const token = req.headers["authtoken"]

        if(!token){
            return res.status(401).send("no token , authentication denied")
        }
        const decoded = jwt.verify(token, 'jwtSecret')

    console.log("middleware" , decoded);
    req.user = decoded.user
    next()

    }catch(error){
        console.log(error);
        res.status(401).send('Token invalid!!')
    }
}