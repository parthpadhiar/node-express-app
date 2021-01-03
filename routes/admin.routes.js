var express = require('express');
var router = express.Router();
var adminController = require('../controller/admin.controller')
const multer = require('multer');

const ADD_DATA = '/admin'
const GET_DATA = '/admin/get_data'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null,'admin ' + file.originalname)
  }
})
const upload = multer({storage: storage})

/*
** add data
** localhost:3000/admin/add_data
*/

router.get(ADD_DATA, (req, res) => {
  res.render('addData')
})

router.post(ADD_DATA, upload.single('image'), adminController.addData)


/*
** get data
** localhost:3000/admin/get_data
*/
router.get(GET_DATA, adminController.getData)

module.exports = router;