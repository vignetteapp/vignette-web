const hide = (element: HTMLElement, transformX = `0`, transformY = `0`) => {
  element.style.opacity = `0`
  element.style.pointerEvents = `none`
  element.style.transform = `translate(${transformX}, ${transformY})`

  return element
}

export default hide
