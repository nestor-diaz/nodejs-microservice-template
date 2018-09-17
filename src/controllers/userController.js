function mainController({ mainService }) {
  return {
    list,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };

  async function list() {
    return Promise.resolve([]);
  }

  async function getUserById(req, res) {
    const getResponse = await mainService.get();

    return res.json(getResponse);
  }

  async function createUser(req, res) {
    const postResponse = await mainService.get();

    return res.json(postResponse);
  }

  async function updateUser(req, res) {
    const putResponse = await mainService.get();

    return res.json(putResponse);
  }

  async function deleteUser(req, res) {
    const deleteResponse = await mainService.get();

    return res.json(deleteResponse);
  }
}

module.exports = mainController;
