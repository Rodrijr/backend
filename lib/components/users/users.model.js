const user = {
  username: {
    type: String,
    required: [true, 'User identifier is required.'],
    minlength: 3
  },
  password: {
    type: String,
    required: [true, 'User identifier is required.'],
    minlength: 6
  },
  fullName: {
    type: String,
    required: [true, 'User identifier is required.'],
    minlength: 6
  },
  userType: {
    type: String,
    required: [true, 'User identifier is required.'],
    minlength: 1
  }
}