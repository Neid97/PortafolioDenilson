      const navToggle = document.getElementById("navToggle");
      const navLinks = document.getElementById("navLinks");
      const navContacto = document.querySelector('a[href="#contacto"]');

      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("is-open");
        navToggle.classList.toggle("is-open");
        document.body.classList.toggle("no-scroll");
      });

      navLinks.addEventListener("click", (e) => {
        if (e.target.closest("a")) {
          navLinks.classList.remove("is-open");
          navToggle.classList.remove("is-open");
          document.body.classList.remove("no-scroll");
        }
      });

      navContacto.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        document.body.classList.remove("no-scroll");
      });