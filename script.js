function upDate(previewPic) {
  console.log("upDate function triggered");
  console.log("Alt text:", previewPic.alt);
  console.log("Source:", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.textContent = previewPic.alt;
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Hover over an image below to display here.";
}

// Add event listeners to all preview images
document.querySelectorAll(".preview").forEach(img => {
  img.addEventListener("mouseover", function() {
    upDate(this);
  });
  img.addEventListener("mouseout", undo);
});