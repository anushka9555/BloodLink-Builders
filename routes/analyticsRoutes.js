const express= require('express')

const authMiddleware = require('../middlewares/authMiddleware');
const { bloodGroupDetailsController } = require('../controllers/analyticsController');
const router = express.Router()
//routes



// Get BLOOD DATA 
router.get('/bloodGroups-data',authMiddleware,bloodGroupDetailsController);


module.exports=router