import express from 'express'
import {verifyAdmin} from "../utils/verifyToken.js"
import {createRoom, updateRoom, getRoom, getRooms, deleteRoom} from "../controllers/room.js"

const router = express.Router();

//create Room
router.post("/:hotelid", verifyAdmin, createRoom);

// update room
router.put("/:id", verifyAdmin, updateRoom);

//Delete room
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// get single room
router.get("/:id", getRoom);

//get all rooms
router.get("/", getRooms);


export default router;