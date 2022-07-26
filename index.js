console.log("fetching a rainbow...");

showRainbow()
  .then((response) => {
    console.log("yay!");
  })
  .catch((error) => {
    console.log("error!");
  });

async function showRainbow() {
  const response = await fetch("images/rainbow.jpg");
  const blob = await response.blob();
  document.getElementById("rainbow").src = URL.createObjectURL(blob);
}
