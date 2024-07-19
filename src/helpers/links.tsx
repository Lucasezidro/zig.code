import {
  FaFacebook,
  FaFigma,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export const LINKS = [
  {
    id: 'linkedin',
    icon: <FaLinkedin className="text-cyan-500" />,
    title: 'LinkedIn',
    placeholder: 'https://linkedin/in/',
    defaultChecked: true,
    defaultValue: 'https://linkedin/in/Lucasezidro',
  },
  {
    id: 'github',
    icon: <FaGithub />,
    title: 'GitHub',
    placeholder: 'https://github.com/',
    defaultChecked: true,
    defaultValue: 'https://github.com/Lucasezidro',
  },
  {
    id: 'instagram',
    icon: <FaInstagram className="text-rose-500" />,
    title: 'Instagram',
    placeholder: 'https://instagram.com/',
    defaultChecked: true,
    defaultValue: 'https://instagram.com/Lucasezidro',
  },
  {
    id: 'twitter',
    icon: <FaXTwitter />,
    title: 'Twitter',
    placeholder: 'https://x.com/',
    defaultChecked: true,
    defaultValue: 'https://x.com/Lucasezidro',
  },
  {
    id: 'facebook',
    icon: <FaFacebook className="text-blue-500" />,
    title: 'Facebook',
    placeholder: 'https://facebook.com/',
    defaultChecked: false,
  },
  {
    id: 'figma',
    icon: <FaFigma />,
    title: 'Figma',
    placeholder: 'https://figma.com/',
    defaultChecked: false,
  },
]
