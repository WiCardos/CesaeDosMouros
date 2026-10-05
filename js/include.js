function loadComponent(id, file) {
  fetch(file)
    .then((reply) => reply.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    });
}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");