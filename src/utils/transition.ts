function fadeOut(element: HTMLElement) {
  let opacity = 1;
  const t = setInterval(function() {
    opacity -= 0.1;
    opacity = Math.max(0, opacity);
    element.style.opacity = opacity + '';
    if (opacity <= 0) {
      clearInterval(t);
    }
  }, 30);
}

function fadeInt(element: HTMLElement) {
  let opacity = 0;
  const t = setInterval(function() {
    opacity += 0.1;
    opacity = Math.min(1, opacity);
    element.style.opacity = opacity + '';
    if (opacity >= 1) {
      clearInterval(t);
    }
  }, 30);
  return t;
}

export {
  fadeInt,
  fadeOut
}