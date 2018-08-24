function mainService() {
  return {
    get,
  };

  function get() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ GET: 'Main Controller / Service response' });
      }, 2000);
    });
  }
}

module.exports = mainService;
