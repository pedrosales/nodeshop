'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');
const authService = require('../services/auth-service');


router.get('/', controller.get);
// router.get('/:slug', controller.getBySlug);
// router.get('/admin/:id', controller.getById);
// router.get('/tags/:tag', controller.getByTag);
router.post('/', controller.post);
router.post('/login', controller.login);
router.post('/refresh-token', authService.authorize, controller.refreshToken);
// router.put('/:id', controller.put);
// router.delete('/', controller.delete);

module.exports = router;