function notImplemented(req, res, next) {
  const notImplmentedError = {
    statusCode: 501,
    content: {
      title: 'Not Implemented',
      message: 'This secction was not implemented yet.'
    }
  }
  res.status(notImplmentedError.statusCode).send(notImplmentedError.content);
}
module.exports = {
  notImplemented
}
