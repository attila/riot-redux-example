const actions = {
  changeTitle: (newTitle) => {
    return {
      type: 'CHANGE_TITLE',
      data: newTitle
    };
  }
};

export default actions;
