function authorService({ authorRepository }) {
  return {
    getAll,
    getOneById,
    createOne,
    updateOne,
    deleteOne,
  };

  function getAll() {
    return authorRepository.getAll();
  }

  function getOneById(id) {
    return authorRepository.getOneById(id);
  }

  function createOne(authorToCreate) {
    return authorRepository.addOne(authorToCreate);
  }

  function updateOne(id, authorToUpdate) {
    return authorRepository.updateOne(id, authorToUpdate);
  }

  function deleteOne(id) {
    return authorRepository.deleteOne(id);
  }
}

module.exports = authorService;
