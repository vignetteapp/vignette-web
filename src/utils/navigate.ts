const navigate = (link: string) => {
  const a = document.createElement(`a`)
  a.href = link
  a.rel = `noopener noreferrer`
  a.click()
}

export default navigate
