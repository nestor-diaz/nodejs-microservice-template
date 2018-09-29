function mainController({ userService }) {
  return {
    all,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };

  async function all(req, res) {
    const allUsers = await userService.getAll();

    return res.json(allUsers);
  }

  async function getUserById(req, res) {
    const { id } = req.params;
    const user = await userService.getOneById(id);

    return res.json(user);
  }

  async function createUser(req, res) {
    const user = req.body;
    const newUser = await userService.createOne(user);

    return res.json(newUser);
  }

  async function updateUser(req, res) {
    const updatedUser = req.body;
    const { id } = req.params;
    const result = await userService.updateOne(id, updatedUser);

    return res.json(result);
  }

  async function deleteUser(req, res) {
    const { id } = req.params;
    const result = await userService.deleteOne(id);

    return res.json(result);
  }
}

module.exports = mainController;
