document.addEventListener("DOMContentLoaded", () => {
  const deleteForms = document.querySelectorAll(".del");
  const modal = document.getElementById("confirmModal");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  let currentForm = null;

  deleteForms.forEach(form => {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      currentForm = form;
      modal.style.display = "block";
    });
  });

  yesBtn.addEventListener("click", () => {
    modal.style.display = "none";
    if (currentForm) currentForm.submit();
  });

  noBtn.addEventListener("click", () => {
    modal.style.display = "none";
    currentForm = null;
  });
});
