const component = () => {
  const element = document.createElement('h2');
  element.innerHTML = 'Hello from component rendering.';
  return element;
};

module.exports = { component };
