import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// verify user's token
// router.get("/checkauthentication", verifyToken, (req, res,next)=>{
//     res.send("Hello User you are logged in");
// })
// router.get("/checkuser/:id", verifyUser, (req, res,next)=>{
//     res.send("Hello User you are logged in and you can delete your account");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
//     res.send("Hello Admin you are logged in and you can delete your account");
// });

//Update user
router.put("/:id",verifyUser, updateUser);

//Delete user
router.delete("/:id",verifyUser ,deleteUser);

//get user
router.get("/:id",verifyUser, getUser);

//get All users
router.get("/",verifyAdmin, getUsers) 

export default router;