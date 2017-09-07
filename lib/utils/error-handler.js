'use strict';
function expressErrorHandler(err, req, res, next) {
  if (err.statusCode && err.content) {
    res.status(err.statusCode).send(err.content)
  } else {
    res.status(500).send({
      title: 'Internal Error',
      message: err.message
    })
  }
}
module.exports = {
  expressErrorHandler
};