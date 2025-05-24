document.querySelectorAll("dialog.preview-dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});

function showPreview(imageId) {
  document.getElementById(imageId).showModal();
}
function closePreview(imageId) {
  document.getElementById(imageId).close();
}
