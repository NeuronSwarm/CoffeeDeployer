
formidable = require('formidable');
path = require('path');
fs = require('fs')

mapController = function(){};
mapController.activeHash = "";
mapController.prototype.upload = function(req, res, cb) {
  console.log('mapController:upload');
  configuredForm(req,res,false, cb);
};


configuredForm = function(req,res, binaryFlag, cb){
  // var file_name = req.body.files;
  // if(!file_name)
  //   return res.status(400).send('no files in request').end();

  var form;
  form = new formidable.IncomingForm({noFileSystem: binaryFlag}),
    files = [],
    fields = [];
  form.multiples = true;
  form.uploadDir = path.join(__dirname, '/../public/uploads');
  form
    .on('field', function(field, buffer) {
      console.log('on field');
      fields.push([field, buffer]);
    })
    .on('file', function(field, file) {
      console.log('on file');
      console.log(file.name);
      fs.rename(file.path, form.uploadDir + '/' + file.name);
      files.push([field,file]);
    })
    .on('error', function(err) {
      return console.log('An error has occured: \n' + err);
    })
    .on('end', function(){
      console.log('-> "END" event triggered');
      return cb(files)
    });
    form.parse(req, function(err, fields, files) {
      if(err)
        console.log(err);
    });

   
}

module.exports = mapController;