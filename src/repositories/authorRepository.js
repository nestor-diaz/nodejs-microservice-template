function authorRepository({ models }) {
  const { author } = models;

  return {
    getAll,
    getOneById,
    addOne,
    updateOne,
    deleteOne,
  };

  function getAll() {
    return author.findAndCountAll();
  }

  function getOneById(id) {
    return author.findOne({
      where: { id },
    });
  }

  function addOne(authorToCreate) {
    return author.create(authorToCreate);
  }

  function updateOne(id, authorToUpdate) {
    return author.update(authorToUpdate, {
      returning: true,
      where: { id },
    });
  }

  function deleteOne(id) {
    return author.destroy({
      where: { id },
    });
  }
}

module.exports = authorRepository;
