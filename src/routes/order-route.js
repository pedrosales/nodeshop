'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');
const authService = require('../services/auth-service');


router.get('/', authService.authorize, controller.get);
// router.get('/:slug', controller.getBySlug);
// router.get('/admin/:id', controller.getById);
// router.get('/tags/:tag', controller.getByTag);
router.post('/', authService.authorize, controller.post);
// router.put('/:id', controller.put);
// router.delete('/', controller.delete);

module.exports = router;