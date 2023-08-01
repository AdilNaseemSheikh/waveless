document
  .querySelector(".accordion__item")
  .addEventListener("click", function (e) {
    const container = e.target.closest(".accordion__item");
    container.classList.toggle("accordion__item--active")
    if (container.style.height == "100px") {
        container.style.height = container.scrollHeight + "px";
    } else {
        container.style.height = "100px";
    }
  });

