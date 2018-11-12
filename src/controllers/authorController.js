function authorController({ authorService, httpErrors }) {
  return {
    all,
    getOneById,
    createOne,
    updateOne,
    deleteOne,
  };

  async function all(req, res) {
    const authors = await authorService.getAll();

    return res.json(authors);
  }

  async function getOneById(req, res, next) {
    const { id } = req.params;
    const Author = await authorService.getOneById(id);

    return Author ? res.json(Author) : next(httpErrors.notFound('Author not found'));
  }

  async function createOne(req, res) {
    const author = req.body;
    const newAuthor = await authorService.createOne(author);

    return res.json(newAuthor);
  }

  async function updateOne(req, res, next) {
    const updatedAuthor = req.body;
    const { id } = req.params;
    const result = await authorService.updateOne(id, updatedAuthor);

    if (result && result.n) {
      return res.json(result);
    }

    return next(httpErrors.notFound('Author not found'));
  }

  async function deleteOne(req, res) {
    const { id } = req.params;
    const result = await authorService.deleteOne(id);

    return res.json(result);
  }
}

module.exports = authorController;
