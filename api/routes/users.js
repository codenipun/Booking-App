import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user';

const router = express.Router();
//Update user
router.put("/:id", updateUser);

//Delete user
router.delete("/:id", deleteUser);

//get user
router.get("/:id", getUser);

//get All users
router.get("/", getUsers) 

export default router;