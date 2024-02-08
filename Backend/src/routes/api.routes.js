import { Router } from "express";
import { newTransaction } from "../controller/transaction.controller.js";

const router=Router();

router.route('/transaction').post(
    newTransaction
)
export default router;