var slider = tns({
  container: ".my-slider",
  items: 1,
  slideBy: "page",
  autoplay: true,
  speed: 1000,
});

document.addEventListener("click", (evt) => {
  orModalBtnClick(evt);
  onModalOutsideClick(evt);
  onModalCloseClick(evt);
});

function orModalBtnClick(evt) {
  const el = evt.target.closest("[data-modal-open]");

  if (!el) return;

  const modalSel = el.dataset.modalOpen;

  document.querySelector(modalSel).classList.add("show");
}

function onModalOutsideClick(evt) {
  const el = evt.target;

  if (!el.matches("[data-modal]")) return;

  el.classList.remove("show");
}

function onModalCloseClick(evt) {
  const el = evt.target.closest("[data-modal-close]");

  if (!el) return;

  el.parentElement.parentElement.classList.remove("show");
}
