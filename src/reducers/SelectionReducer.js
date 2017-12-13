export default (state, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload; // return libraryId
    default:
      console.log('Unknown action type');
      return state;
  }
};
