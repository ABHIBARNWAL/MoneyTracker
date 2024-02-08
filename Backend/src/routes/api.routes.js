import { Router } from "express";
import { allTransaction, newTransaction } from "../controller/transaction.controller.js";

const router=Router();
router.route('/').get(
    allTransaction
)
router.route('/transaction').post(
    newTransaction
)
export default router;