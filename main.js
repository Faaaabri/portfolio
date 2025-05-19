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
      description: "El sitio web fue creado para el festival de música Buenavibra, que no contaba con una página propia y dependía únicamente de redes sociales para compartir información. La idea fue centralizar todo en un solo lugar: grilla de artistas, fechas, entradas, ubicación y novedades. Se hizo una investigación previa sobre las necesidades del público y cómo otros festivales organizan su contenido online. A partir de eso, se diseñó un sitio visualmente atractivo y fácil de usar, con una estética acorde al estilo del festival. El diseño fue prototipado en Figma y luego desarrollado con código, asegurando que funcione bien en distintos dispositivos",
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
      <button onclick="openModal(${id})">Ver más</button>
    `;
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


  /* ------------- NAV ------------- */

    // Lista de colores personalizados
    const colores = ['#ef5ccf', '#5C68EF', '#b2ef5c', '#efe35c', '#FF9671'];

    // Seleccionamos todos los <a> del nav
    const links = document.querySelectorAll('nav a');
  
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        link.style.color = colorAleatorio;
      });
  
      link.addEventListener('mouseleave', () => {
        link.style.color = ''; // vuelve al color original
      });
    });
  
    /* MENU  */

    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });