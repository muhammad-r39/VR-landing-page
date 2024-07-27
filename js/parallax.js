const parallaxElements = document.querySelectorAll(".parallax-move");

function handleMouseMove(event) {
  const mouseX = event.pageX;
  const mouseY = event.pageY;

  parallaxElements.forEach((element) => {
    const speed = element.getAttribute("data-speed");

    const xMove = ((mouseX - window.innerWidth / 2) * speed) / 100;
    const yMove = ((mouseY - window.innerHeight / 2) * speed) / 100;

    element.style.transform = `translate(${xMove}px, ${yMove}px)`;
  });
}

document.addEventListener("mousemove", handleMouseMove);
