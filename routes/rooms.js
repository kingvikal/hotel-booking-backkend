import express from "express";

const router = express.Router();
import {
  createRoom,
  deleteRoom,
  updateRoom,
  getRoom,
  getRooms,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

router.post("/:hotelid", verifyAdmin, createRoom);
//Update
router.put("/:id", verifyAdmin, updateRoom);
//Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//Get
router.get("/:id", getRoom);
//Get All
router.get("/", getRooms);

export default router;
