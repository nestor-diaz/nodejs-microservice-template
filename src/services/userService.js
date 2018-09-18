function userService({ userRepository }) {
  return {
    getAll,
    getOneById,
    createOne,
    updateOne,
    deleteOne,
  };

  function getAll() {
    return userRepository.getAll();
  }

  function getOneById(id) {
    return userRepository.getOneById(id);
  }

  function createOne(user) {
    const inactiveUser = { ...user, active: false };

    return userRepository.addOne(inactiveUser);
  }

  function updateOne(id, user) {
    const updatedUser = { ...user, updated: true };

    return userRepository.updateOne(id, updatedUser);
  }

  function deleteOne(id) {
    return userRepository.deleteOne(id);
  }
}

module.exports = userService;
