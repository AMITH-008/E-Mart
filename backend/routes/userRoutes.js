import express from 'express';
import { authUser, deleteUser, getAllUsers, getUserByID, getUserProfile, logoutUser, registerUser, updateUser, updateUserProfile } from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();


router.route('/').get(protect, admin ,getAllUsers);

router.route('/').post(registerUser);

router.post('/logout', logoutUser);

router.post('/login', authUser);

router.route('/profile').get(protect, getUserProfile).put(protect,updateUserProfile);

router.route('/:id').delete(protect, admin ,deleteUser).get(protect, admin ,getUserByID).put(protect, admin ,updateUser);

export default router;
