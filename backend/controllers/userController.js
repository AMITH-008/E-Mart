import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc Auth users and get token
// @route POST api/users/login
// @access Public
export const authUser = asyncHandler(async (request, response) => {
    
    const { email, password } = request.body;

    //Check if user with provided email exists
    const user = await User.findOne({
        email:email
    });

    //If user exists check for password match
    if (user && (await user.matchPassword(password))) {
        response.json({
            _id:user._id,
            name:user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        response.status(401);
        throw new Error("Invalid Credentials");
    }


});

// @desc Register user
// @route POST api/users
// @access Public
export const registerUser = asyncHandler(async (request, response) => {
    response.send("register User");
});

// @desc Log-Out users & clear cookie
// @route POST api/users/logout
// @access Private
export const logoutUser = asyncHandler(async (request, response) => {
    response.send("Logout User");
});

// @desc Get User Profile
// @route GET api/users/profile
// @access Private
export const getUserProfile = asyncHandler(async (request, response) => {
    response.send("User profile");
});

// @desc Update User Profile
// @route PUT api/users/profile
// @access Private
export const updateUserProfile = asyncHandler(async (request, response) => {
    response.send("Update User profile");
});

// @desc Get All Users
// @route GET api/users
// @access Private/Admin
export const getAllUsers = asyncHandler(async (request, response) => {
    response.send("Get profile");
});

// @desc Get  User by ID
// @route GET api/users/:id
// @access Private/Admin
export const getUserByID = asyncHandler(async (request, response) => {
    response.send("get user by ID");
});

// @desc Delete user
// @route DELETE api/users/:id
// @access Private/Admin
export const deleteUser = asyncHandler(async (request, response) => {
    response.send("Delete profile");
});

// @desc Update user
// @route DELETE api/users/:id
// @access Private/Admin
export const updateUser = asyncHandler(async (request, response) => {
    response.send("Update profile");
});