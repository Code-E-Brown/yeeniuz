const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { SubAnnotation } = require('../../db/models')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    // console.log('you made it', typeof req.params.id)
    const subAnnotation = await SubAnnotation.findByPk(+req.params.id)

    // console.log(subAnnotation)
    if (subAnnotation) {
        await subAnnotation.destroy()
        res.json({ "Success": "Upvote deleted" })
    } else {
        res.json({ "Failed": "Could not delete" })
    }

}))

module.exports = router;


