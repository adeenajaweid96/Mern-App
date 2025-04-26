import express from 'express'
const router = express.Router();
import submitContactForm from "../controllers/userController.js"


router.post('/',submitContactForm)

export default router;