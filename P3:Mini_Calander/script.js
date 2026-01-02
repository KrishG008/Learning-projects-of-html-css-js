let monthsName = document.querySelector(".month");
let dayNameEl = document.querySelector(".day");
let dayNumEl = document.querySelector(".date");
let yearEl = document.querySelector(".year");


const date = new Date();
const month = date.getMonth();
monthNameEl.innerText = date.toLocaleString("en", {
  month: "long",
});

dayNameEl.innerText = date.toLocaleString("en", {
  weekday: "long",
});

dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();

