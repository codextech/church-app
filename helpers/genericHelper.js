

exports.jsonResponse = (res, status, message, result) => {

  return res.status(status).json(
    {
      message: message,
      data: result
    });

}



/* image url */


exports.getImageUrlFromArray = (req, file) =>{
  const path = APPURL + 'uploads/' + file.filename;
  return path;
}
