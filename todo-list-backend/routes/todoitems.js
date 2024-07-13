import express from "express";
import {
  getAllItems,
  addTodoItem,
  updateTodoItem,
  getList,
  getAList,
  deleteAListItem,
} from "../controller/todoitems.js";

const router = express.Router();
router.route("/").get(getAllItems).post(addTodoItem);
router
  .route("/:id")
  .patch(getList, updateTodoItem)
  .get(getList, getAList)
  .delete(getList, deleteAListItem);
export default router;
