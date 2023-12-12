const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("fade-in-image");
    }
  });
});

observer.observe(document.querySelector(".clientes"));
observer.observe(document.querySelector(".pictures"));
observer.observe(document.querySelector(".three-columns .row"));
squares.forEach((element) => observer.observe(element));
