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

  function updateOne(user) {
    return userModel.updateOne(user);
  }

  function deleteOne() {}
}

module.exports = userRepository;
