const projects = [
  {
    id: 1,
    title: "Rediseño App Itaú",
    description: "",
    coverImage: "imgs/itau_tapa.jpg",
    tags: ["Figma", "UX/UI", "Wireframing"],
    presentationImage: "imgs/proyecto_1_p.jpg"
  },
  {
    id: 2,
    title: "Festival Buena Vibra",
    description: "El sitio web fue creado para el festival de música Buenavibra...",
    coverImage: "imgs/buenavibra_tapa.jpg",
    tags: ["HTML","CSS","JS","Figma", "MongoDb", "Node.js"],
    presentationImage: "imgs/proyecto_2_p.jpg"
  },
  {
    id: 3,
    title: "Tienda online - Club Nacional de Football",
    description: "Descripción detallada del proyecto 3.",
    coverImage: "imgs/Nacional_tapa.png",
    tags: ["Figma", "UX/UI"],
    presentationImage: "imgs/proyecto_3_p.jpg"
  },
  {
    id: 4,
    title: "Academia de choferes Escorpio",
    description: "",
    coverImage: "imgs/escorpio_tapa.jpg",
    tags: ["HTML","CSS","JS","Figma", "UX/UI", "Node.js"],
    presentationImage: "imgs/proyecto_4_p.jpg"
  },
  {
    id: 5,
    title: "PhotoShoot",
    description: "",
    coverImage: "imgs/photoshoot_tapa.jpg",
    tags: ["Figma", "UX/UI"],
    presentationImage: "imgs/proyecto_5_p.jpg"
  }
];

// Renderizar tarjetas de proyectos
const gridContainer = document.getElementById("work-grid");

projects.forEach(({ id, title, coverImage }) => {
  const card = document.createElement("div");
  card.className = "work-card";
  card.innerHTML = `
    <img src="${coverImage}" alt="${title}" class="cover-img">
    <h3>${title}</h3>
  `;
  card.addEventListener("click", () => openModal(id)); // ← hacer clic en la card abre el modal
  gridContainer.appendChild(card);
});

/* ------------- MODAL ------------- */

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function openModal(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  const { title, description, presentationImage, tags } = project;

  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");

  // Set texto
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-description").textContent = description;

  // Limpiar contenido anterior
  modalContent.querySelectorAll(".presentation-img, .modal-tags").forEach(el => el.remove());

  // Crear e insertar tags
  const tagsContainer = document.createElement("div");
  tagsContainer.className = "modal-tags";
  tagsContainer.innerHTML = tags.map(tag => `<span class="tag modal-tag">${tag}</span>`).join("");
  document.querySelector(".modal-header").after(tagsContainer);

  // Crear e insertar imagen de presentación
  const img = document.createElement("img");
  img.src = presentationImage;
  img.alt = `${title} presentación`;
  img.className = "presentation-img";
  document.getElementById("modal-description").after(img);

  // Mostrar modal con animación
  modal.style.display = "flex";
  modalContent.style.animation = "none";
  void modalContent.offsetWidth; // Forzar reflow
  modalContent.style.animation = "slideUp 0.4s ease forwards";
}
