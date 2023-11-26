const CarTemplate = ({ carName }) => {
  return `<div class="car" data-name=${carName}>
    <div class="car-player mr-2" data-forward-count="0" id=${carName}>${carName}</div>
  </div>`;
};

export default CarTemplate;
