const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.route('/me').get(auth(), userController.getUser);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User details
 */

/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Get logged in user information
 *     description: Logged in users can fetch only their own user information.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */
