const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Artist, Song, Comment } = require('../../db/models')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// router.get('/:id', asyncHandler(async (req, res) => {
//     const comments = await Comment.findAll({
//         where: {

//         }
//     })
// }))


module.exports = router;
