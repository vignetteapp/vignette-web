const show = (element: HTMLElement, resetTransform: boolean) => {
  element.style.opacity = `100`
  element.style.pointerEvents = `all`
  if (resetTransform) element.style.transform = `translate(0, 0)`

  return element
}

export default show
