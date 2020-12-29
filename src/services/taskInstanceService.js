function taskInstanceService({ taskInstanceRepository }) {
  async function getAll() {
    return taskInstanceRepository.getAll();
  }

  function updateOne(taskId, updatedtask) {
    return taskInstanceRepository.updateOne(taskId, updatedtask);
  }
  return {
    getAll,
    updateOne,
  };
}

module.exports = taskInstanceService;
