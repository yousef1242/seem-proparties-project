const barIcons = document.querySelector(".bar-icon");
const navLinks = document.querySelector(".nav-links");
const partnersCards = document.querySelector(".partners-cards");
const projectsCards = document.querySelector(".projects-cards");
const ulElemnt = navLinks.querySelector("ul");
const projectModel = document.querySelector(".single-project-model");

// partners data
const partnersData = [
  "./images/partners (1).jpg",
  "./images/partners (2).jpg",
  "./images/partners (3).jpg",
  "./images/partners (4).jpg",
  "./images/partners (5).jpg",
  "./images/partners (6).jpg",
  "./images/partners (7).jpg",
  "./images/partners (8).jpg",
  "./images/partners (9).jpg",
  "./images/partners (10).jpg",
  "./images/partners (11).jpg",
  "./images/partners (12).jpg",
  "./images/partners (13).jpg",
  "./images/partners (14).jpg",
  "./images/partners (15).jpg",
  "./images/partners (16).jpg",
  "./images/partners (17).jpg",
  "./images/partners (18).jpg",
  "./images/partners (19).jpg",
  "./images/partners (20).jpg",
  "./images/partners (21).jpg",
  "./images/partners (22).jpg",
  "./images/partners (23).jpg",
];

// set partners images
partnersData.map(
  (partner) =>
    (partnersCards.innerHTML += `
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            class="child p-2 w-6/12 md:w-4/12 lg:w-3/12">
          <div class="w-full flex justify-center">
            <img loading="lazy" src="${partner}" alt="Seem Properties trusted partner"/>
            </div>
          </div>`)
);

// projects data
const projectsData = [
  {
    projectNumber: 1,
    title: "DAMAC Lagoons",
    desc: "Close to the charm of DAMAC Hills and yet hidden away from the bustle is DAMAC Lagoons - a new master community in Dubai, inspired by the Mediterranean.At DAMAC Lagoons, the most elegant villas and townhouses are surrounded by azure blue lagoons, white sandy beaches, tropical island vibes and other enchanting experiences, across 45 million square feet.",
    files: [
      "./images/project 1 (1).jpg",
      "./images/project 1 (2).jpg",
      "./images/project 1 (3).jpg",
    ],
  },
  {
    projectNumber: 2,
    title: "AEON AT DUBAI CREEKHARBOUR",
    desc: "Visualize the dawn breaking over Dubai's iconic skyline, with the raw essence of urban aesthetics merging seamlessly with the embrace of nature. Anchored in the trendsetting Creek Beach, AEON epitomizes a bold urban statement, gracefully intertwining with the waterfront's soothing ambience and the vibrant beat of Dubai's heart. For the modern trailblazer, AEON is a manifestation of avant-garde luxury, convenience, and urban flair.Step into AEON...",
    files: ["./images/project 2 (1).jpg", "./images/project 2 (2).jpg"],
  },
  {
    projectNumber: 3,
    title: "The Valley",
    desc: "A quaint new town where life finds its inspiration amidst the vast shimmering sands and lush green open spaces.Welcome to The Valley - the perfect place for you to empower your dreams and become theinnovators and visionaries that will lead the future of the world.",
    files: [
      "./images/project 3 (1).jpg",
      "./images/project 3 (2).jpg",
      "./images/project 3 (3).jpg",
      "./images/project 3 (4).jpg",
      "./images/project 3 (5).jpg",
      "./images/project 3 (6).jpg",
    ],
  },
  {
    projectNumber: 4,
    title: "CLUB DRIVE AT DUBAI HILLS ESTATE",
    desc: "Park Gate is Dubai Hills Estate's final villa community, offering a harmonious blend of modern luxury and serene nature. This bespoke development, crafted with the utmost attention to detail, promises a lifestyle that transcends the ordinary, positioning itself as a sought-after destination for discerning individuals. Club drive is your personal haven that encapsulates natural beauty and luxurious amenities, boasting an ideal location at the golf course with pristine views of the golf.",
    files: ["./images/project 4 (1).jpg", "./images/project 4 (2).jpg"],
  },
  {
    projectNumber: 5,
    title: "BAYVIEW BY ADDRESS RESORTS AT EMAAR BEACHFRONT",
    desc: "Ethereal waves adorn stylishly crafted façades reflecting the Arabian Gulf's rippling waters.A luxury vocabulary inspired by the splendour and glamour of Dubai, translated in the smallest details, inside and out.Exquisite facilities inspired by Emaar’s mastery of fine living in branded apartments and penthouses, luxuriously furnished and tailored to your needs.Bayview by Address Resort at Emaar Beachfront carries the future in its details and promises a life that will fulfil your dreams of luxurious living by the sea and unparalleled modern opulence; a one-of-a-kind opportunity to celebrate the Dubai Life in the city's most exclusive coastal development.",
    files: [
      "./images/project 5 (1).jpg",
      "./images/project 5 (2).jpg",
      "./images/project 5 (3).jpg",
      "./images/project 5 (4).jpg",
    ],
  },
];

// set projects cards
projectsData.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.setAttribute("data-aos", "fade-up");
  projectCard.setAttribute("data-aos-duration", "1500");
  projectCard.classList.add("child", "p-2", "w-full", "md:w-6/12");

  const innerDiv = document.createElement("div");
  innerDiv.classList.add(
    "w-full",
    "cursor-pointer",
    "bg-white",
    "h-full",
    "md:h-[150px]",
    "shadow-md",
    "flex",
    "flex-wrap",
    "rounded-lg",
    "overflow-hidden",
    "flex-row"
  );
  innerDiv.addEventListener("click", () => openSingleProjectModel(project));

  const projectCardImage = document.createElement("div");
  projectCardImage.classList.add(
    "project-card-image",
    "w-full",
    "h-[240px]",
    "md:h-[150px]",
    "md:w-4/12"
  );
  const image = document.createElement("img");
  image.style.objectFit = "cover";
  image.classList.add("h-full", "w-full");
  image.setAttribute("loading", "lazy");
  image.setAttribute("src", project.files[0]);
  image.setAttribute("alt", `Seem Properties ${project.title} image`);
  projectCardImage.appendChild(image);

  const projectCardContent = document.createElement("div");
  projectCardContent.classList.add(
    "project-card-content",
    "w-full",
    "p-2",
    "md:w-8/12"
  );
  const title = document.createElement("h4");
  title.classList.add(
    "text-slate-800",
    "font-bold",
    "mb-4",
    "text-1xl",
    "xl:text-2xl"
  );
  title.textContent = project.title;
  const desc = document.createElement("p");
  desc.classList.add("text-slate-700");
  desc.textContent = project.desc.slice(0, 100) + "...";

  projectCardContent.appendChild(title);
  projectCardContent.appendChild(desc);

  innerDiv.appendChild(projectCardImage);
  innerDiv.appendChild(projectCardContent);

  projectCard.appendChild(innerDiv);

  projectsCards.appendChild(projectCard);
});

// close single project model
function closeSingleProjectModel() {
  projectModel.classList.add("hidden");
  projectModel.classList.remove("block");
}

// open single project model
function openSingleProjectModel(project) {
  try {
    const parsedProject = JSON.parse(JSON.stringify(project));
    if (parsedProject) {
      projectModel.classList.remove("hidden");
      projectModel.classList.add("block");
      projectModel.innerHTML = `
         <div class="container mx-auto px-2 h-full flex justify-center items-center">
           <section class="single-project-model-content w-[500px] bg-white shadow-md rounded-lg overflow-hidden">
             <div class="single-project-images swiper mySwiper">
               <div onClick="closeSingleProjectModel()" class="absolute z-[9] w-[25px] h-[25px] flex justify-center items-center bg-white rounded-full cursor-pointer text-center right-[10px] top-[10px]">
                 <i class="fa-solid fa-xmark"></i>
               </div>
               <div class="swiper-wrapper">
                 ${parsedProject.files
                   .map(
                     (image, index) => `
                   <div class="swiper-slide">
                     <img loading="lazy" class="w-full h-[240px]" src="${image}" alt="Seem Properties ${
                       parsedProject.title
                     } image ${index + 1}" />
                   </div>`
                   )
                   .join("")}
               </div>
               <div class="swiper-button-next"></div>
               <div class="swiper-button-prev"></div>
               <div class="swiper-pagination"></div>
             </div>
             <div class="single-project-content p-2">
               <h4 class="text-slate-800 mb-4 font-bold text-1xl lg:text-2xl">${
                 parsedProject.title
               }</h4>
               <p class="text-slate-700">${parsedProject.desc}</p>
             </div>
           </section>
         </div>`;
      // Initialize Swiper after updating the content
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else {
      alert("Something went wrong, please try again");
    }
  } catch (error) {
    console.error("Error parsing project data:", error);
    alert("Something went wrong, please try again");
  }
}

// open and close nav links in small devices
function changeIconAndOpenNavLinks(isOpen) {
  if (isOpen) {
    barIcons.innerHTML = `<i
        onclick="changeIconAndOpenNavLinks(${false})"
        class="fa-solid fa-xmark p-2 cursor-pointer"
      ></i>`;
    navLinks.classList.remove("hidden");
    navLinks.classList.add(
      "block",
      "fixed",
      "top-[100px]",
      "w-full",
      "left-0",
      "bg-white",
      "w-full",
      "py-4",
      "ps-3"
    );
    ulElemnt.classList.remove("flex-row", "space-x-5", "items-center");
    ulElemnt.classList.add("flex-col", "space-y-5", "items-start");
  } else {
    barIcons.innerHTML = `
      <i
        onclick="changeIconAndOpenNavLinks(${true})"
        class="fa-solid fa-bars p-2 cursor-pointer"
      ></i>`;
    navLinks.classList.remove(
      "block",
      "fixed",
      "top-[100px]",
      "w-full",
      "left-0",
      "bg-white",
      "w-full",
      "py-4",
      "ps-3"
    );
    navLinks.classList.add("hidden");
    ulElemnt.classList.remove("flex-col", "space-y-5", "items-start");
    ulElemnt.classList.add("flex-row", "space-x-5", "items-center");
  }
}
