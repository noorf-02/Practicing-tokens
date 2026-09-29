const jwt = require('jsonwebtoken');

const protect = (req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({
            message:'The token does not exist'
        });
    };

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({
        message:"Token has been decoded succesffuly"
    });

    next();
};

module.exports = protect;