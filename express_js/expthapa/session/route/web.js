// import express from 'express'
const express=require('express')
const router=express.Router()
const studentController= require('../controllers/studentcontroller.js')
router.get("getsessioninfo",studentController.get_session_info)
module.exports=router