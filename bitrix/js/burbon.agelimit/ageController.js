const isAgeAgreed = () => {
  if (localStorage.getItem("age")) {
    const data = document.querySelector(".burbon_age_preload");
    data.style.display = "none";
  }
};
isAgeAgreed();
