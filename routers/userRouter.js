const userCtrl = require('../controller/userCtrl');

const express = require('express');
const router = module.exports = express.Router();
router.get('/', userCtrl.index);
router.get('/user/', userCtrl.get);
router.post('/user', userCtrl.insert);
router.put('/user/:id', userCtrl.update);
router.delete('/user/:id', userCtrl.deleteUser);