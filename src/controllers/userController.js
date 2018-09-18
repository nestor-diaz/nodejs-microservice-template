function mainController({ userService }) {
  return {
    list,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };

  /**
   * Get all available users.
   *
   * @param {Object} req Express request object.
   * @param {Object} res Express response object.
   */
  function list(req, res) {
    const all = userService.getAll();

    return res.send(all);
  }

  /**
   * Get user by id.
   *
   * @param {Object} req Express request object.
   * @param {Object} res Express response object.
   */
  async function getUserById(req, res) {
    const { id } = req.query;
    const user = await userService.getOneById(id);

    return res.json(user);
  }

  /**
   * Create user.
   *
   * @param {Object} req Express request object.
   * @param {Object} res Express response object.
   */
  async function createUser(req, res) {
    const { user } = req.body;
    const newUser = await userService.createOne(user);

    return res.json(newUser);
  }

  /**
   * Update user.
   *
   * @param {Object} req Express request object.
   * @param {Object} res Express response object.
   */
  async function updateUser(req, res) {
    const { user } = req.body;
    const updatedUser = await userService.updateOne(user);

    return res.json(updatedUser);
  }

  /**
   * Delete user.
   *
   * @param {Object} req Express request object.
   * @param {Object} res Express response object.
   */
  async function deleteUser(req, res) {
    const { id } = req.body;
    const deletedUser = await userService.deleteOne(id);

    return res.json(deletedUser);
  }
}

module.exports = mainController;
