const { request, response } = require("express")
const multer = require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()} - ${file.originalname}`)
    }
})

const upload = multer({ storage: storage }).single("myFile")

exports.upload = upload

exports.uploadFile = (req = request, res = response) => {
    const file = req.file
    res.send(`${Date.now()} - ${file.filename}`)
}