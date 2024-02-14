import express from 'express'

import { getData, loginController, registerController, searchHospital } from '../Controller/registration.js';


const router = express.Router();

router.post('/register',registerController)
router.post('/login',loginController)
router.get('/get-data',getData)
router.post('/searchHospital',searchHospital)
export default router