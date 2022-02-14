interface Sponsor {
  name: string
  img: string
  darkImg?: string
  imgWidth: number
  imgHeight: number
  noContrast?: boolean
  href: string
}
const sponsors: Sponsor[] = [
  {
    name: `Fosshost`,
    img: `/images/fosshost-color.svg`,
    darkImg: `/images/fosshost.svg`,
    href: `https://fosshost.org`,
    imgWidth: 271,
    imgHeight: 64,
  },
  {
    name: `JetBrains`,
    img: `/images/jetbrains.png`,
    href: `https://jetbrains.com`,
    imgWidth: 64,
    imgHeight: 64,
  },
  {
    name: `Gitpod`,
    img: `/images/gitpod.svg`,
    darkImg: `/images/gitpod-dark.svg`,
    href: `https://gitpod.io`,
    imgWidth: 181,
    imgHeight: 55,
  },
  {
    name: `Vercel`,
    img: `/images/vercel-dark.svg`,
    darkImg: `/images/vercel.svg`,
    href: `https://vercel.com/?utm_source=vignette&utm_campaign=oss`,
    imgWidth: 199,
    imgHeight: 45,
  },
  {
    name: `BrowserStack`,
    img: `/images/browserstack-color.svg`,
    darkImg: `/images/browserstack.svg`,
    href: `https://browserstack.com`,
    imgWidth: 376,
    imgHeight: 64,
  },
  {
    name: `Open Source Collective`,
    img: `/images/osc.png`,
    darkImg: `/images/osc.png`,
    href: `https://oscollective.org`,
    noContrast: true,
    imgWidth: 384,
    imgHeight: 69,
  },
  {
    name: `Icons8`,
    img: `/images/icons8.png`,
    href: `https://icons8.com`,
    imgWidth: 80,
    imgHeight: 80,
  },
  {
    name: `Live2D`,
    img: `/images/l2d_light.png`,
    darkImg: `/images/l2d_dark.png`,
    href: `https://www.live2d.jp/en/`,
    imgWidth: 1001,
    imgHeight: 258,
  },
]

export default sponsors
