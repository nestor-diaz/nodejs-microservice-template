function userService() {
  const collectionName = 'Users';

  return {
    get: () => new Promise((resolve) => {
      setTimeout(() => {
        resolve({ GET: 'Main Service / GET response' });
      }, 2000);
    }),

    post: () => new Promise((resolve) => {
      setTimeout(() => {
        resolve({ GET: 'Main Service / POST response' });
      }, 2000);
    }),

    put: () => new Promise((resolve) => {
      setTimeout(() => {
        resolve({ GET: 'Main Service / PUT response' });
      }, 2000);
    }),

    delete: () => new Promise((resolve) => {
      setTimeout(() => {
        resolve({ GET: 'Main Service / DELETE response' });
      }, 2000);
    }),
  };
}

module.exports = userService;
