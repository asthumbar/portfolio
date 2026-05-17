// EDIT: Update this array to rename projects, change categories, swap images, or revise modal copy.
const projects = [
  {
    id: "warm-office-studio",
    title: "Warm Office Studio",
    category: "Luxury Interior Visualizations",
    image: "assets/projects/project-03.jpg",
    alt: "Warm office interior visualization with desks, lounge seating, and linear ceiling lighting",
    description:
      "A refined workspace concept with layered wood tones, illuminated display shelving, and a compact lounge zone for client meetings.",
    services: ["3D Visualization", "Space Planning", "Lighting Concept"],
  },
  {
    id: "neutral-bedroom-suite",
    title: "Neutral Bedroom Suite",
    category: "Bedroom",
    image: "assets/projects/project-04.jpg",
    alt: "Neutral bedroom visualization with full-height wardrobe, upholstered bed, and fluted wall detail",
    description:
      "A calm bedroom scheme using soft paneling, integrated wardrobe storage, and indirect lighting for a polished everyday retreat.",
    services: ["Interior Design", "Material Selection", "Realistic Rendering"],
  },
  {
    id: "minimal-tv-lounge",
    title: "Minimal TV Lounge",
    category: "TV Unit / Media Wall",
    image: "assets/projects/project-05.jpg",
    alt: "Minimal living room with TV unit, marble accent panel, and cream sofa",
    description:
      "An airy media lounge with a long console, marble-lit feature panel, round coffee tables, and a soft neutral palette.",
    services: ["TV Unit Design", "3D Visualization", "Mood Board"],
  },
  {
    id: "living-dining-flow",
    title: "Living & Dining Flow",
    category: "Dining Area",
    image: "assets/projects/project-06.jpg",
    alt: "Living and dining area visualization with grey seating, dining table, and soft drapery",
    description:
      "A connected living and dining composition with balanced furniture placement, warm ceiling detail, and soft textile contrast.",
    services: ["Space Planning", "Interior Design", "Realistic Rendering"],
  },
  {
    id: "soft-blue-bedroom",
    title: "Soft Blue Bedroom",
    category: "Bedroom",
    image: "assets/projects/project-07.jpg",
    alt: "Bedroom with blue upholstered headboard, study desk, and wardrobe storage",
    description:
      "A compact bedroom with playful curves, integrated study storage, and a gentle blue accent that keeps the room fresh.",
    services: ["Bedroom Design", "Storage Planning", "Concept Development"],
  },
  {
    id: "monochrome-bedroom",
    title: "Monochrome Bedroom Suite",
    category: "Bedroom",
    image: "assets/projects/project-08.jpg",
    alt: "Modern monochrome bedroom with black bed, fluted panels, and wall-mounted TV",
    description:
      "A contemporary bedroom focused on strong contrast, marble textures, integrated wardrobes, and a clean media wall.",
    services: ["3D Visualization", "Material Selection", "Wardrobe Planning"],
  },
  {
    id: "blush-wardrobe-suite",
    title: "Blush Wardrobe Suite",
    category: "Wardrobe / Storage",
    image: "assets/projects/project-09.jpg",
    alt: "Bedroom with blush wardrobe panels, mirror, upholstered bed, and layered wall finish",
    description:
      "A warm bedroom and wardrobe concept with blush inserts, mirrored surfaces, and practical full-height storage.",
    services: ["Wardrobe Design", "Material Selection", "Realistic Rendering"],
  },
  {
    id: "kitchen-dining-nook",
    title: "Kitchen & Dining Nook",
    category: "Kitchen",
    image: "assets/projects/project-10.jpg",
    alt: "Modern kitchen and dining nook with blush cabinetry, black glass shutters, and round dining detail",
    description:
      "A compact kitchen and dining arrangement with soft cabinetry tones, black glass accents, and efficient working zones.",
    services: ["Kitchen Design", "Space Planning", "Mood Board"],
  },
  {
    id: "blush-living-room",
    title: "Blush Living Room",
    category: "Living Room",
    image: "assets/projects/project-11.jpg",
    alt: "Living room visualization with blush sectional sofa, media wall, and floral wallpaper panel",
    description:
      "A gentle living room concept with warm blush upholstery, layered wall textures, and a compact media feature.",
    services: ["Living Room Design", "3D Visualization", "Material Selection"],
  },
  {
    id: "entry-storage-console",
    title: "Entry Storage Console",
    category: "Wardrobe / Storage",
    image: "assets/projects/project-12.jpg",
    alt: "Entry area visualization with decorative door, blue wall paneling, and storage console",
    description:
      "A practical entry zone with decorative paneling, storage seating, and subtle color accents for a welcoming first view.",
    services: ["Storage Planning", "Interior Styling", "Realistic Rendering"],
  },
  {
    id: "kids-bedroom-study",
    title: "Kids Bedroom & Study",
    category: "Bedroom",
    image: "assets/projects/project-13.jpg",
    alt: "Kids bedroom with cricket wall graphic, wardrobe storage, and compact study desk",
    description:
      "A personalized bedroom with integrated study, display shelves, playful wall graphics, and efficient wardrobe storage.",
    services: ["Bedroom Design", "Concept Development", "Space Planning"],
  },
  {
    id: "arched-media-living",
    title: "Arched Media Wall",
    category: "TV Unit / Media Wall",
    image: "assets/projects/project-14.jpg",
    alt: "Living room with arched accent niche, TV wall, and soft peach furniture accents",
    description:
      "A warm media wall concept using an arched niche, subtle fluting, and furniture accents to soften the living area.",
    services: ["TV Unit Design", "Lighting Concept", "3D Visualization"],
  },
  {
    id: "arched-bedroom-suite",
    title: "Arched Bedroom Suite",
    category: "Bedroom",
    image: "assets/projects/project-15.jpg",
    alt: "Bedroom with arched headboard feature, study nook, wardrobe, and warm neutral palette",
    description:
      "A premium bedroom visualization with an arched feature wall, integrated study corner, soft lighting, and tall storage.",
    services: ["Interior Design", "Wardrobe Planning", "Realistic Rendering"],
  },
];

const body = document.body;
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const grid = document.querySelector("[data-project-grid]");
const filterButtons = document.querySelectorAll("[data-filter]");
const modal = document.querySelector("#project-modal");
const modalPanel = modal.querySelector(".modal__panel");
const modalImage = modal.querySelector("[data-modal-image]");
const modalCategory = modal.querySelector("[data-modal-category]");
const modalTitle = modal.querySelector("[data-modal-title]");
const modalDescription = modal.querySelector("[data-modal-description]");
const modalServices = modal.querySelector("[data-modal-services]");
const modalCloseButtons = modal.querySelectorAll("[data-modal-close]");
const year = document.querySelector("[data-year]");
let lastFocusedElement = null;

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

function setMenu(open) {
  body.classList.toggle("nav-open", open);
  header.classList.toggle("nav-is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}

function createProjectCard(project) {
  const card = document.createElement("button");
  card.className = "project-card reveal";
  card.type = "button";
  card.dataset.projectId = project.id;
  card.innerHTML = `
    <img src="${project.image}" alt="${project.alt}" loading="lazy">
    <span class="project-card__body">
      <span class="project-card__category">${project.category}</span>
      <h3>${project.title}</h3>
      <span class="project-card__hint">View detail</span>
    </span>
  `;
  card.addEventListener("click", () => openModal(project.id));
  return card;
}

function renderProjects(filter = "All") {
  const visibleProjects =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);

  grid.replaceChildren(...visibleProjects.map(createProjectCard));
  observeReveals();
}

function setActiveFilter(activeButton) {
  filterButtons.forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function openModal(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  lastFocusedElement = document.activeElement;
  modalImage.src = project.image;
  modalImage.alt = project.alt;
  modalCategory.textContent = project.category;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalServices.replaceChildren(
    ...project.services.map((service) => {
      const item = document.createElement("li");
      item.textContent = service;
      return item;
    })
  );

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");
  modalPanel.focus();
}

function closeModal() {
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  body.classList.remove("modal-open");
  modalImage.src = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function keepFocusInModal(event) {
  if (modal.hidden || event.key !== "Tab") return;

  const focusable = modal.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function observeReveals() {
  const revealItems = document.querySelectorAll(".reveal:not(.is-visible)");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

navMenu.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    setMenu(false);
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveFilter(button);
    renderProjects(button.dataset.filter);
  });
});

modalCloseButtons.forEach((button) => button.addEventListener("click", closeModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!modal.hidden) closeModal();
    setMenu(false);
  }

  keepFocusInModal(event);
});

window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    setMenu(false);
  }
});

year.textContent = new Date().getFullYear();
setHeaderState();
renderProjects();
observeReveals();
