function loadComponent(id, file) {
  const target = document.getElementById(id);
  if (!target) return;

  fetch(target.dataset.component || file)
    .then((reply) => reply.text())
    .then((html) => {
      target.innerHTML = html;

      const pathPrefix = target.dataset.pathPrefix;
      if (pathPrefix) {
        target.querySelectorAll('a[href^="pages/"]').forEach((link) => {
          link.setAttribute("href", `${pathPrefix}${link.getAttribute("href")}`);
        });
        target.querySelectorAll('img[src^="images/"]').forEach((image) => {
          image.setAttribute("src", `${pathPrefix}${image.getAttribute("src")}`);
        });
      }
    });
}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");