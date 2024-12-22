fetch("data/projects.json")
  .then((response) => response.json())
  .then((projects) => {
    const grid = document.querySelector(".project-grid");
    projects.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      card.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
      if (project.link) {
        card.innerHTML += `<a href="${project.link}">Learn More</a>`;
      }
      grid.appendChild(card);
    });
  });
