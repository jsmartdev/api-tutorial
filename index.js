console.log("fetching a rainbow...");

const showRainbow = async () => {
  const response = await fetch("images/rainbow.jpg");
  const blob = await response.blob();
  document.getElementById("rainbow").src = URL.createObjectURL(blob);
};

showRainbow()
  .then((response) => {
    console.log("yay!");
  })
  .catch((error) => {
    console.log("error!");
  });
