const express = require('express')
const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })
const app = express()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './fileUploads/')
    },
    filename: function (req, file, cb) {
        console.log('file', file)
        const uniquePrefix = Date.now()
        cb(null, uniquePrefix +  '-' + file.originalname  )
    }
})

const upload = multer({ storage: storage })

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.send('success')
})

app.listen(3001, () => {
    console.log('server is listening')
})