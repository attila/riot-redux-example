module.exports = {
  changeTitle: changeTitle
};

function changeTitle (newTitle) {
  return {
    type: 'CHANGE_TITLE',
    data: newTitle
  };
}
