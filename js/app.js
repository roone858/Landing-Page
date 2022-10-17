let toggleBtn = document.querySelector(".toggle-btn");
let navigationLinks = document.querySelectorAll(".nav-links li");
let navList = document.querySelector(".nav-container ul.nav-list");
let slider1 = document.querySelector(".slider:nth-child(1)");
let slider2 = document.querySelector(".slider:nth-child(2)");
let slider3 = document.querySelector(".slider:nth-child(3)");
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
  slider1.innerHTML = `<div class="background">
  <img src="pics/${users[i].photo}" alt="" />
  <h4>${users[i].name}</h4>
  <p>${users[i].par}</p>
  </div>`;
  slider2.innerHTML = ` <div class="background"> 
  <img src="pics/${users[j].photo}" alt="" />
  <h4>${users[j].name}</h4>
  <p>${users[j].par}</p>
  </div>`;
  slider3.innerHTML = ` <div class="background">   
  <img src="pics/${users[y].photo}" alt="" />
  <h4>${users[y].name}</h4>
  <p>${users[y].par}</p>
  </div>`;

  i++;
  j++;
  y++;
}

setInterval(updateSliderPic, 9000);
let sections = document.querySelectorAll("section");

navigationLinks.forEach(function (elm, idx) {
  elm.addEventListener("click", function () {
    sections[idx].scrollIntoView({ block: "start", behavior: "smooth" });
  });
});
toggleBtn.addEventListener("click", function () {
  navList.classList.toggle("active");
});
