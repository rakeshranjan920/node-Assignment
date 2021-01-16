const sharp = require('sharp')
const imageDownloader = require('image-downloader')
const jsonpatch = require('fast-json-patch')
const { fileExtension } = require('../middleware/checkFileExtension')

const imageTypes = ['jpg', 'tif', 'gif', 'png', 'svg']

exports.generateThumbnail = (req, res, next) => {
  const { imageUrl } = req.body
  const imageUrlExt = fileExtension(imageUrl).toLowerCase()

  if (imageTypes.includes(imageUrlExt)) {
    const options = {
      url: imageUrl,
      dest: './public/images/original/',
    }
    const resizeFolder = './public/images/resized/'

    imageDownloader.image(options)
      .then(({ filename }) => {
        sharp(filename)
          .resize(50, 50)
          .toFile(`${resizeFolder}output.${imageUrlExt}`, (err) => {
            if (err) { return next(err) }
            return res.json({
              converted: true, success: 'Image has been resized', thumbnail: resizeFolder,
            })
          })
      })
      .catch(() => {
        res.status(400).json({ error: 'Oops something went wrong' })
      })
  } else {
    res.status(400).json({ error: 'We only handle image files with extensions' })
  }
}

exports.patchJSON = (req, res, next) => {
  const jsonObject = req.body.jsonObject
  const jsonPatchObject = req.body.jsonPatchObject
  console.log('Done')
  const patchedObject = jsonpatch.applyPatch(jsonObject, jsonPatchObject).newDocument
  res.json({ patchedObject })
}


