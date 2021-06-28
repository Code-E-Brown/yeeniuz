const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Song, User, Artist, Tag, Comment, Annotation, SubAnnotation, AnnotationUpvote } = require('../../db/models')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const annotation = require('../../db/models/annotation');

const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
    // console.log('here', req.body)
    // by: 'asd',
    // title: 'asd',
    // tag: 'rap',
    // lyrics: '<p>ss</p>',
    // albumImage: '',
    // youtubeLink: ''
    // let {by}
    // let song = await Song.build({

    // })
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const song = await Song.findByPk(req.params.id, {
        include: [Artist, Tag, Annotation]
    })
    res.json(song)
}))
router.patch('/:id(\\d+)', asyncHandler(async (req, res) => {
    const song = await Song.findByPk(req.params.id, {
        include: [Artist, Tag, Annotation]
    })
    if (song) {
        // console.log(req.body)
        if (req.body.inputText === '   '.trim()) {

        } else if (req.body.inputText.includes('.jpg') || req.body.inputText.includes('.png') || req.body.inputText.includes('.svg') || req.body.inputText.includes('.img') || req.body.inputText.includes('.gif')) {
            await song.update({
                imageUrl: req.body.inputText
            })
        }
        res.json(song)
    }
    // console.log('**********', song)
}))

router.get('/:id(\\d+)/comments', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({
        where: {
            songId: req.params.id
        }
    })
    res.json(comments)
}))


router.post('/:id(\\d+)/annotations/:annotationId(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const { annotationId } = req.body
    const existingUpvote = await AnnotationUpvote.findOne({
        where: {
            userId: req.user.id,
            annotationId: +annotationId
        }
    })
    if (!existingUpvote) {

        const newUpvote = AnnotationUpvote.build({
            userId: req.user.id,
            annotationId: +annotationId
        })
        if (newUpvote) {
            await newUpvote.save()
            res.send(newUpvote)
        }
    } else {
        await existingUpvote.destroy();
        res.json({ "Destroyed": "Upvote deleted" })
        // res.json({ "Denied": "Upvote already exists" })
    }

}))
router.delete('/:id(\\d+)/annotations/:annotationId(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    // console.log(typeof req.params.annotationId)
    const song = await Song.findByPk(+req.params.id)
    // console.log(song.lyrics)

    const grabContent = (song) => {
        let content;

        // console.log('******', song)
        let lyricsArray = song.lyrics.split("</p>");
        // console.log(lyricsArray)

        // let editArray = []
        lyricsArray.forEach((string, i) => {

            // lyricsArray.forEach((string, i) => {
            if (string.includes(`id=${req.params.annotationId}`)) {

                //         // editArray.push(string);
                // let singleString = lyricsArray[i]
                //         // let precisionArray = singleString.split('</a>')
                //         // let bigString = precisionArray.join('')
                //         // let frontAnchorRemoved = bigString.replace(`<a id=${req.params.annotationId} href=#>`, '')
                //         // console.log(precisionArray);
                // console.log(string)
                //         // console.log(lyricsArray[i].split('<a>').join('').replace(`<a id=${req.params.annotationId} href=#>`, ''))
                // let splitLyrics = lyricsArray[i].split(`id=${req.params.annotationId}`);
                let splitLyrics = lyricsArray[i].split('</a>');
                // console.log(splitLyrics)
                for (let j = 0; j < splitLyrics.length; j++) {
                    let fragment = splitLyrics[j];
                    if (fragment.includes(`id=${req.params.annotationId}`)) {
                        // console.log(fragment)
                        let chopped = fragment.split(`>`)
                        // console.log(chopped)
                        content = chopped[chopped.length - 1]
                        // return content;
                        //                 // array[j].replace()
                        //                 splitLyrics[j] = fragment.replace(`<a id=${req.params.annotationId} href=#>`, '')
                        //                 // console.log(splitLyrics)
                        //                 lyricsArray[i] = splitLyrics;

                        //                 console.log(lyricsArray[i])
                        //                 // console.log(splitLyrics[j])
                    }
                    //             // console.log(fragment)
                }
            }

        })
        return content;

    }
    // console.log(editArray)
    // let singleString = editArray.join('')
    // console.log(singleString.split('</a>'))
    // let precisionArray = singleString.split('</a>')
    // console.log(`< a id = ${ req.params.annotationId } href =# > `)
    // let bigString = precisionArray.join('')
    // <a id=${req.params.annotationId} href=#>
    // let frontAnchorRemoved = bigString.replace(`< a id = ${ req.params.annotationId } href =# > `, '')
    // console.log(song.lyrics)
    // console.log(grabContent(song))
    // console.log(PrecisionArray.join('').replace());
    // console.log('*****************************', grabContent(song))
    // let newLyrics = song.lyrics.replaceAll(`<a id=${annotation.id} href =#>${grabContent(song)}</a>`, `${grabContent(song)}`)
    let oldLyrics = song.lyrics

    // let newLyrics = oldLyrics.replace(`<a id=${req.params.annotationId} href=#>${grabContent(song)}</a>`, '********************************************************************')
    // console.log('NEW!!!!', oldLyrics.split("</p>"))
    // console.log(newLyrics)
    let splitter = oldLyrics.split("</p>")
    for (let i = 0; i < splitter.length; i++) {
        const frag = splitter[i];
        // console.log(splitter[i])
        splitter[i] = splitter[i].replace(`<a id=${req.params.annotationId} href=#>${grabContent(song)}</a>`, `${grabContent(song)}`)
        // console.log(splitter[i])
    }
    let updatedLyrics = splitter.join('</p>')
    // console.log(updatedLyrics)
    await song.update({
        lyrics: updatedLyrics
    })

    const annotation = await Annotation.findByPk(req.params.annotationId)
    // console.log('hellohello!!!', annotation)
    if (annotation) {
        await annotation.destroy()
    }

}));

router.get('/:id(\\d+)/annotations', requireAuth, asyncHandler(async (req, res) => {
    // console.log(req.params.id)
    const annotations = await Annotation.findAll({

        where: {
            songId: +req.params.id
        },
        include: ['Author', 'Upvotes']
    })

    res.send(annotations)


}))
router.get('/:id(\\d+)/annotations/:annotationId(\\d+)/subannotations', requireAuth, asyncHandler(async (req, res) => {
    const subAnnotations = await SubAnnotation.findAll({
        where: {
            annotationId: +req.params.annotationId
        },
        include: ['Author', 'Upvotes']
    })

    // console.log('*** on the route', subAnnotations)
    res.send(subAnnotations)

}))
router.post('/:id(\\d+)/annotations/:annotationId(\\d+)/subannotations', requireAuth, asyncHandler(async (req, res) => {
    console.log(+req.params.id, +req.params.annotationId)
    let { newAnnotationText } = req.body
    console.log(newAnnotationText)
    const subAnnotation = await SubAnnotation.build({
        userId: req.user.id,
        songId: +req.params.id,
        annotationId: +req.params.annotationId,
        body: newAnnotationText
    })
    console.log(subAnnotation)
    if (subAnnotation) {
        await subAnnotation.save()
        res.json(subAnnotation)
    }

}))

router.post('/:id(\\d+)/annotations', requireAuth, asyncHandler(async (req, res) => {
    // let { id } = req.params.id
    // id = +id
    // console.log(id, typeof id
    console.log(req.params.id, typeof +req.params.id)
    const song = await Song.findByPk(+req.params.id)
    // console.log(song)
    // console.log(req.body)
    lyricsArray = song.lyrics.split('</p>')
    // console.log(lyricsArray)
    const annotation = await Annotation.build({
        userId: req.user.id,
        songId: +req.params.id,
        body: req.body.annotationText,
    })

    await annotation.save()


    let newArray = []
    lyricsArray.forEach((line => {
        if (line.includes(req.body.fullLine)) {
            // console.log(line)
            // console.log('includesFulllLine')
            // console.log(line)
            // line.replace(req.body.selection, `< a > ${ req.body.selection }</> `)
            // newArray.push(line.replace(req.body.selection, `< a id = ${ annotation.id } href = '/annotations/${annotation.id}' > ${ req.body.selection }</a > `))
            newArray.push(line.replace(req.body.selection, `<a id=${annotation.id} href=#>${req.body.selection}</a>`))
        } else {
            newArray.push(line)
        }
    }))
    // console.log('newkid', newArray.join('</p>'))
    let newLyrics = newArray.join('</p>')

    await song.update({
        lyrics: newLyrics
    })

    // console.log(newAnnotation)
    res.json(annotation)
}))


// router.get('/tester', requireAuth, asyncHandler(async (req, res) => {
//     console.log('alksjdlkasjdlaksjdlkj')
// }))

module.exports = router;
