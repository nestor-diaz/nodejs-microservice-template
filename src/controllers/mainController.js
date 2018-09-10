function mainController({ mainService }) {
  return {
    get,
  };

  async function get(req = {}, res) {
    const getResponse = await mainService.get();

    return res.json(getResponse);
  }
}

module.exports = mainController;
