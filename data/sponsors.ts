interface Sponsor {
  name: string
  img: string
  href: string
}
const sponsors: Sponsor[] = [
  {
    name: `Fosshost`,
    img: `/images/fosshost.png`,
    href: `https://fosshost.org`,
  },
  {
    name: `JetBrains`,
    img: `/images/jetbrains.png`,
    href: `https://jetbrains.com`,
  },
  {
    name: `Gitpod`,
    img: `/images/gitpod.svg`,
    href: `https://gitpod.io`,
  },
  {
    name: `Vercel`,
    img: `/images/vercel-dark.svg`,
    href: `https://vercel.com`,
  },
  {
    name: `BrowserStack`,
    img: `/images/browserstack.png`,
    href: `https://browserstack.com`,
  },
  {
    name: `Open Source Collective`,
    img: `/images/open-source-collective-logo.png`,
    href: `https://oscollective.org`,
  },
  {
    name: `Icons8`,
    img: `/images/icons8.png`,
    href: `https://icons8.com`,
  },
]

export default sponsors
