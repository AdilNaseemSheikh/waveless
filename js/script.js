document
  .querySelector(".accordion__item")
  .addEventListener("click", function (e) {
    const container = e.target.closest(".accordion__item");
    container.classList.toggle("accordion__item--active");
    const body = container.querySelector(".accordion__item__body");
    console.log(body.style.height);
    if (body.style.height) {
      body.style.height = null;
    } else {
      body.style.height = body.scrollHeight + "px";
    }
  });
