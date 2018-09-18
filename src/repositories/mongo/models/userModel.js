function userModel({ mongoose }) {
  const { Schema } = mongoose;

  const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    active: Boolean,
    updated: Boolean,
  });

  return mongoose.model('User', userSchema);
}

module.exports = userModel;
