const jwt = require('jsonwebtoken');
const User = require('../models/user');
const auth = async (req, res, next) => {
 try{
    const token = req.cookies.token;
    if(!token|| token.length === 0){
        throw new Error('token not found');
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded){
        throw new Error('invalid token');
    }
    const user = await User.findById(decoded.userId);
    if(!user){
        throw new Error('user not found');
    }
    req.user = user;
    next();
}
    catch(error){
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    auth
};
