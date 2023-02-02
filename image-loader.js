const normalizeSrc = (src) => {
  return src.startsWith('/') ? src.slice(1) : src
}

const cloudflareLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`,`format=auto`]
  if (quality) {
    params.push(`quality=${quality}`)
  }
  
  const paramsString = params.join(',')
  return `https://vignetteapp.org/cdn-cgi/image/${paramsString}/${normalizeSrc(
    src,
  )}`
}
export default cloudflareLoader
