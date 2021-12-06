const { Router } = require('express')
const SDK = require('../models/sdk')
const router = Router()

router.get('/',async (req,res) => {
    const zones = await SDK.find({}).lean()

    res.render('index', {
        title: 'SDK',
        isIndex: true,
        zones
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create',
        isCreate: true
    })
})

router.get('/download', (req, res) => {
    res.render('download', {
        title: 'Download',
        isDownload: true
    })
})

router.post('/create', async (req, res) => {
    const zone = new SDK({
        title: req.body.title,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        radius: req.body.radius,
        index: "z"
    })
    zone.save()
    res.redirect('/')
})

router.get('/downloadApk', (req, res) => {
    //тут скачивать АПК
})

module.exports = router