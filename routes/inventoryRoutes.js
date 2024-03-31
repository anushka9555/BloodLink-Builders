const express= require('express')
const { createInventoryController, getInventoryController,getRecentInventoryController, getDonarsController, getOrganisationController, getHospitalController, getInventoryHospitalController, } = require('../controllers/inventoryController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router()
//routes
//Add Inventory || POST
router.post('/create-inventory',authMiddleware,createInventoryController);

// Get ALL BLOOD RECORDS 
router.get('/get-inventory',authMiddleware,getInventoryController);

// Get RECENT BLOOD RECORDS 
router.get('/get-recent-inventory',authMiddleware, getRecentInventoryController);


// Get HOSPITAL BLOOD RECORDS 
router.post('/get-inventory-hospital',authMiddleware,getInventoryHospitalController);


// Get DONAR RECORDS 
router.get('/get-donars',authMiddleware,getDonarsController);
//Get Hospital records
router.get('/get-hospitals',authMiddleware,getHospitalController);
//Get Organisation records 
router.get('/get-organisation',authMiddleware,getOrganisationController);
//Get organisation records 
router.get('/get-organisation-for-hospital',authMiddleware,getOrganisationController);

module.exports=router