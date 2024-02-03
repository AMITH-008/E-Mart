import express from 'express';
import { authUser, deleteUser, getAllUsers, getUserByID, getUserProfile, logoutUser, registerUser, updateUser, updateUserProfile } from '../controllers/userController.js';


const router = express.Router();


router.route('/').get(getAllUsers);

router.route('/').post(registerUser);

router.post('/logout', logoutUser);

router.post('/login', authUser);

router.route('/profile').get(getUserProfile).put(updateUserProfile);

router.route('/:id').delete(deleteUser).get(getUserByID).put(updateUser);

export default router;
