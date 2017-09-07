
const normalise = require('ajv-error-messages');
const SchemaValidator = require('ajv');
const schemaValidator = SchemaValidator({ allErrors: true });

async function validateObject(schema, data) {
  const validator = schemaValidator.compile(schema);
  let result = [];
  if (!validator(data)) {
    const errorsMessages = normalise(validator.errors);
    for (let field of errorsMessages.fields) {
      result.push(`${field}: ${errorsMessages.fields}`);
    }
    throw {
      statusCode: 400,
      content: {
        title: 'Bad Request',
        message: result.toString()
      }
    }
  }
  return;
}
module.exports = {
  validateObject
}