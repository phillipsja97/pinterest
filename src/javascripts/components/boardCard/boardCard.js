const boardCard = (board) => {
  const domString = `
  <div class="card d-flex flex-wrap">
  <div class="individual-card">
  <h5 class="card-title text-center">${board.name}</h5>
  <div class="card-body">
    <p class="card-text text-center">${board.description}</p>
  </div>
  </div>`;
  return domString;
};

export default { boardCard };
