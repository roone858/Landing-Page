let toggleBtn = document.querySelector(".toggle-btn");
let navigationLinks = document.querySelectorAll(".nav-links li");
let navList = document.querySelector(".nav-container ul.nav-list");
let slider1 = document.querySelector(".slider:nth-child(1)");
let slider2 = document.querySelector(".slider:nth-child(2)");
let slider3 = document.querySelector(".slider:nth-child(3)");
let sections = document.querySelectorAll("section");
let users = [
  {
    photo: "1.png",
    name: "Ahmed Gharib",
    par: "data analysis graduate (challengar & profisional & advanced )",
  },
  {
    photo: "2.png",
    name: "Mina Makarem",
    par: "Web Dev Graduate (Profisional Track )",
  },
  {
    photo: "3.png",
    name: "Abd ElRAhman Magdy",
    par: "Web Dev Graduate (Challengar & Profisional & Advanced )",
  },
  {
    photo: "4.png",
    name: "Maha Zanaty",
    par: "Digtal Marketing Graduate ( Advanced )",
  },
  {
    photo: "5.png",
    name: "Mohammed Samir",
    par: "Digtal Marketing Graduate (challengar & profisional & advanced )",
  },
];

function updateSlider(slider, i) {
  let docFrag = document.createDocumentFragment();

  let img = document.createElement("img");

  img.src = `pics/${users[i].photo}`;

  let h4 = document.createElement("h4");
  h4.textContent = users[i].name;

  let p = document.createElement("p");
  p.textContent = users[i].par;

  let div = document.createElement("div");
  div.className = "background";

  div.appendChild(img);
  div.appendChild(h4);
  div.appendChild(p);

  docFrag.appendChild(div);
  slider.innerHTML = "";
  slider.appendChild(docFrag);
}

let i = 1,
  j = 2,
  y = 3;

function updateSliderPic() {
  if (i == 5) {
    i = 0;
  }
  if (j == 5) {
    j = 0;
  }
  if (y == 5) {
    y = 0;
  }
  updateSlider(slider1, i);
  updateSlider(slider2, j);
  updateSlider(slider3, y);

  i++;
  j++;
  y++;
}

setInterval(updateSliderPic, 9000);


navigationLinks.forEach(function (elm, idx) {
  elm.addEventListener("click", function () {
    sections[idx].scrollIntoView({ block: "start", behavior: "smooth" });
  });
});
toggleBtn.addEventListener("click", function () {
  navList.classList.toggle("active");
});
