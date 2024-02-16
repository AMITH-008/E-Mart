import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler';
import User from '../models/userModel';

//Protect Routes

export const protect = asyncHandler(async (req,res, next) => {
    let token;
    token = req.cookies.jwt;
    if(token) {

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        }catch(err) {
            console.log(err);
            res.status(401);
            throw new Error("Not Authorized,  token failed");
        }


    }else {
        res.status(401);
        throw new Error("Not Authorized, no token");
    }
});