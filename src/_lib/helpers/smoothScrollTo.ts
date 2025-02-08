const smoothScrollTo = (
  e: React.MouseEvent,
  target?: string,
  distance: number = 1000
): void => {
  e.preventDefault();

  if (target) {
    const targetEle = document.getElementById(target);
    if (targetEle) {
      distance = targetEle.offsetTop;
    }
  }

  window.scrollTo({
    top: distance,
    left: 0,
    behavior: "smooth",
  });
};

export default smoothScrollTo;
