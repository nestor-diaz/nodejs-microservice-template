function mainController({ userService }) {
  return {
    all,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };

  /**
    * @api {get} /users List all users
    * @apiGroup Users
    * @apiSuccess {Object[]} users User list
    * @apiSuccess {Number} users.id User id
    * @apiSuccess {String} users.firstName User's first name
    * @apiSuccess {String} users.lastName User's last name
    * @apiSuccess {String} users.email User's email
    * @apiSuccess {Boolean} users.active Is user active?
    * @apiSuccess {Boolean} users.updated Is user updated?
    * @apiVersion 1.0.0
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    *    [{
    *      "id": 1,
    *      "firstName": "Pedro",
    *      "lastName": "Nel",
    *      "email": "nel@hero.com"
    *      "active": false,
    *      "updated": false
    *    }]
    * @apiErrorExample {json} List error
    *    HTTP/1.1 500 Internal Server Error
    */
  async function all(req, res) {
    const allUsers = await userService.getAll();

    return res.json(allUsers);
  }

  /**
    * @api {get} /users/:id Get user by id
    * @apiGroup Users
    * @apiSuccess {Object} user An user
    * @apiVersion 1.0.0
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    *    [{
    *      "id": 1,
    *      "firstName": "Pedro",
    *      "lastName": "Nel",
    *      "email": "nel@hero.com"
    *      "active": false,
    *      "updated": false
    *    }]
    * @apiErrorExample {json} List error
    *    HTTP/1.1 500 Internal Server Error
    */
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
