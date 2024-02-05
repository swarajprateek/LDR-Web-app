const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, '../../Resources/static/assets/uploads/');
const images = async(req, res) => {
    var imageArr = [];
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        // files.forEach(function (file) {
        //     // Do whatever you want to do with the file
        //     var image = {};
        //     image.file = file;
        //     imageArr.push(image); 
        // });
        
        // var imageWhole ={}
        // imageWhole.Data = imageArr
        // console.log('first check',imageWhole);
        // return res.send( { data: JSON.stringify(imageArr) });
        const imageUrls = files.map(file => `resources/static/assets/uploads/${file}`);
        res.status(200).json(imageUrls);
    });
  };
  
  module.exports = {
    getImages: images
  };