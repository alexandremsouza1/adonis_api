const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { response, session }) {
    if (error.name === 'ValidationException') {
      session.withErrors(error.messages).flashAll()
      await session.commit()
      response.redirect('back')
      return
    }
    if (error.name === 'Error') {
      response.status(error.status).send(error.message)
      return 
    }

    return super.handle(...arguments)
  }
}

module.exports = ExceptionHandler