export const clearElement = $target => {
  $target.innerHTML = '';
};

export const clearInput = $target => {
  $target.value = '';
};

export const hideElement = $target => {
  $target.hidden = true;
};

export const showElement = $target => {
  $target.hidden = false;
};
