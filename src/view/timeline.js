const timeline = () => {
  const showTimeline = `
  <div>
    <h2> Publicaciones</h2>
  </div>
`;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection');
  divElemt.innerHTML = showTimeline;

  return divElemt;
};

export default timeline;
