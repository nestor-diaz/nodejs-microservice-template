function mainController({ mainService }) {
  return {
    get,
    post,
    put,
    deleteFn,
  };

  async function get(req, res) {
    const getResponse = await mainService.get();

    return res.json(getResponse);
  }

  async function post(req, res) {
    const postResponse = await mainService.get();

    return res.json(postResponse);
  }

  async function put(req, res) {
    const putResponse = await mainService.get();

    return res.json(putResponse);
  }

  async function deleteFn(req, res) {
    const deleteResponse = await mainService.get();

    return res.json(deleteResponse);
  }
}

module.exports = mainController;
