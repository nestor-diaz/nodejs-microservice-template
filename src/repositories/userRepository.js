function userRepository({ userModel }) {
  return {
    getAll,
    getOneById,
    addOne,
    updateOne,
    deleteOne,
  };

  function getAll() {
    return userModel.find({});
  }

  function getOneById(id) {
    return userModel.findById(id);
  }

  function addOne(user) {
    return userModel.create(user);
  }

  function updateOne(id, user) {
    return userModel.updateOne({ _id: id }, user);
  }

  function deleteOne(id) {
    return userModel.deleteOne({ _id: id });
  }
}

module.exports = userRepository;
