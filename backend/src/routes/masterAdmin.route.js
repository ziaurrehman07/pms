import { Router } from "express";
import { deleteAdmin, getAdminList, registerAdmin } from "../controllers/user.controller.js";
import { verifyMaster } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/create-admin").post(verifyMaster, registerAdmin);
router.route("/get-admin-list").get(verifyMaster, getAdminList);
router.route("/delete-admin/:adminId").delete(verifyMaster, deleteAdmin);

export default router;
