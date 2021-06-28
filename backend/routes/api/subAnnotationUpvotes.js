const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { SubAnnotationUpvote } = require('../../db/models')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const { subAnnotationId } = req.body

    const existingUpvote = await SubAnnotationUpvote.findOne({
        where: {
            userId: req.user.id,
            subAnnotationId: +subAnnotationId
        }
    })

    if (!existingUpvote) {

        const newUpvote = await SubAnnotationUpvote.build({
            userId: req.user.id,
            subAnnotationId: +subAnnotationId
        })
        if (newUpvote) {
            await newUpvote.save()
            res.json(newUpvote)
        }
    } else {
        await existingUpvote.destroy();
        res.json({ "Destroyed": "Upvote deleted" })
        // res.json({ "Denied": "Upvote already exists" })
    }
}))


module.exports = router;
