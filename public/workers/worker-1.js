onmessage = (event) => {
  if (event.data.message === "instagramLikes") {
    postMessage(instagramLikes(event.data.currentValue));
  }
};

const instagramLikes = (currentValue) => {
  const start = Date.now();
  while (Date.now() < start + 5000) {}
  return currentValue + 1;
};
