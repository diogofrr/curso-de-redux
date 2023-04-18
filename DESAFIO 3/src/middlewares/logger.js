const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('The action: ', action);
  console.log('The old state: ', store.getState());
  const result = next(action);
  console.log('The new state: ', result);
  console.groupEnd();

  return result;
};

export default logger;
