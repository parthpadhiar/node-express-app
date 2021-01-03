var express = require('express');
var router = express.Router();
var userController = require('../controller/user.controllers')

const GET_DATA = '/user'
const CATALOG = '/user/catalog'
const CONTACT = '/user/contactUs'
/*
** get data
** localhost:3000/admin/get_data
*/
router.get(GET_DATA, userController.getData)

/**
 * Catalog
 * localhost:3000/user/catalog
 */
router.get(CATALOG, userController.catalog)

/**
 *  Catalog
 * localhost:3000/user/contactUs
 */
router.get(CONTACT, userController.contactUs)


module.exports = router;