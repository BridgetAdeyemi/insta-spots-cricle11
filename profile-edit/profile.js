document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("editModal");
  const closeBtn = document.querySelector(".closeBtn");
  const editProfileBtn = document.querySelector(".profileEdit");
  const saveProfileBtn = document.getElementById("saveProfile");
  const editProfileName = document.getElementById("editName");
  const editProfileJob = document.getElementById("editJob");
  const editProfileImage = document.getElementById("editImage");
  const imageUrl = document.getElementById("imageUrl");
  const divModal = document.querySelector(".modal-content");

  // open modal when edit button is clicked
  editProfileBtn.addEventListener("click", () => {
    console.log("Edit button clicked");
    dialog.showModal();
    editProfileName.value = document.querySelector(".profileName").textContent;
    editProfileJob.value =
      document.querySelector(".profileJobTitle").textContent;
  });

  // close modal when escape key is cliked
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dialog.close();
    }
  });

  // close modal when close button is clicked
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });

  // close modal when window is clicked
  dialog.addEventListener("click", (e) => {
    if (!divModal.contains(e.target)) {
      dialog.close();
    }
  });
  // window.addEventListener("click", (event) => {
  //   if (event.target === dialog) {
  //     dialog.close();
  //   }
  // });

  // load saved profile data
  // const savedProfile = JSON.parse(localStorage.getItem("profileData"));
  // if (savedProfile && Array.isArray)
  //   savedProfile.forEach((profile) =>
  //     creatCard(profile.name, profile.imageFile, profile.imageUrl)
  //   );

  // save profile data when save button is clicked
  saveProfileBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const editNameInput = editProfileName.value.trim();
    const editJobInput = editProfileJob.value.trim();
    const imageInput = editProfileImage.files[0];
    const imageUrlInput = imageUrl ? imageUrl.value.trim() : "";

    if (editNameInput && editJobInput) {
      document.querySelector(".profileName").textContent = editNameInput;
      document.querySelector(".profileJobTitle").textContent = editJobInput;

      if (imageInput) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.querySelector(".profileImage").src = e.target.result;
        };
        reader.readAsDataURL(imageInput);
      } else if (imageUrlInput) {
        document.querySelector(".profileImage").src = imageUrl;
      }
      dialog.close();
    }
  });
});
