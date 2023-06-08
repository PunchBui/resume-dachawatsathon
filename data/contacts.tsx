import { GithubIcon } from "../assets/GithubIcon"
import { LinkedInIcon } from "../assets/LiknedInIcon"

interface Contact {
  link: string
  logo: string | JSX.Element
  detail: string
}

const contacts: Contact[] = [
  {
    link: "tel:+66639187154",
    logo: "📞",
    detail: "+66 63-918-7154"
  },
  {
    link: "https://www.linkedin.com/in/dachawatsathon/",
    logo: <LinkedInIcon />,
    detail: "@Dachawatsathon"
  },
  {
    link: "mailto:k.dachawatsathon@gmail.com",
    logo: "✉️",
    detail: "k.dachawatsathon@gmail.com"
  },
  {
    link: "https://github.com/PunchBui",
    logo: <GithubIcon />,
    detail: "github.com/PunchBui"
  }
]

export default contacts