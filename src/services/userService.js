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

  function getOneById() {
    return userRepository.getOneById();
  }

  function createOne() {
    return userRepository.addOne();
  }

  function updateOne() {
    return userRepository.updateOne();
  }

  function deleteOne() {
    return deleteOne.deleteOne();
  }
}

module.exports = userService;
