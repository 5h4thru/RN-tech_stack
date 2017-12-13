const selectLibrary = (libraryId) => (
  {
    type: 'select_library',
    payload: libraryId
  }
);

export { selectLibrary };
