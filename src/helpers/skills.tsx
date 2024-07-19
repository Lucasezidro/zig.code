import { ReactNode } from 'react'
import {
  FaAws,
  FaFlask,
  FaJava,
  FaLaravel,
  FaMoon,
  FaPhp,
  FaPython,
  FaReact,
  FaVuejs,
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { RiNodejsLine } from 'react-icons/ri'
import {
  SiAstro,
  SiDart,
  SiDevpost,
  SiDjango,
  SiElixir,
  SiFlutter,
  SiJquery,
  SiKotlin,
  SiNextdotjs,
  SiRubyonrails,
} from 'react-icons/si'
import { DiRuby } from 'react-icons/di'
import { BiLogoSpringBoot } from 'react-icons/bi'
import { FaAngular, FaGolang } from 'react-icons/fa6'
import { GiArtificialIntelligence } from 'react-icons/gi'

export interface Skills {
  title: string
  experience_level?: 'estudante' | 'intermediario' | 'profissional' | 'expert'
  icon: ReactNode
  added: boolean
}

export const SKILLS: Skills[] = [
  {
    title: 'React JS',
    experience_level: 'profissional',
    icon: <FaReact className="size-8 text-cyan-500" />,
    added: true,
  },
  {
    title: 'Node JS',
    experience_level: 'intermediario',
    icon: <RiNodejsLine className="size-8 text-green-600" />,
    added: true,
  },
  {
    title: 'Javascript',
    experience_level: 'expert',
    icon: <IoLogoJavascript className="size-8 text-amber-500" />,
    added: true,
  },
  {
    title: 'Next JS',
    experience_level: 'profissional',
    icon: <SiNextdotjs className="size-8" />,
    added: true,
  },
  {
    title: 'Python',
    icon: <FaPython className="size-8 text-yellow-500" />,
    added: false,
  },
  {
    title: 'Flask',
    icon: <FaFlask className="size-8 text-yellow-500" />,
    added: false,
  },
  {
    title: 'Django',
    icon: <SiDjango className="size-8 text-yellow-500" />,
    added: false,
  },
  {
    title: 'Java',
    icon: <FaJava className="size-8 text-rose-500" />,
    added: false,
  },
  {
    title: 'Spring',
    icon: <BiLogoSpringBoot className="size-8 text-rose-500" />,
    added: false,
  },
  {
    title: 'Ruby',
    icon: <DiRuby className="size-8 text-rose-500" />,
    added: false,
  },
  {
    title: 'Ruby on rails',
    icon: <SiRubyonrails className="size-8 text-rose-500" />,
    added: false,
  },
  {
    title: 'Vue JS',
    icon: <FaVuejs className="size-8 text-emerald-500" />,
    added: false,
  },
  {
    title: 'Astro JS',
    icon: <SiAstro className="size-8" />,
    added: false,
  },
  {
    title: 'React Native JS',
    icon: <FaReact className="size-8 text-blue-500" />,
    added: false,
  },
  {
    title: 'Angular JS',
    icon: <FaAngular className="size-8 text-red-500" />,
    added: false,
  },
  {
    title: 'GO',
    icon: <FaGolang className="size-8 text-cyan-500" />,
    added: false,
  },
  {
    title: 'IA',
    icon: <GiArtificialIntelligence className="size-8" />,
    added: false,
  },
  {
    title: 'AWS',
    icon: <FaAws className="size-8 text-amber-600" />,
    added: false,
  },
  {
    title: 'Devops',
    icon: <SiDevpost className="size-8" />,
    added: false,
  },
  {
    title: 'Elixir',
    icon: <SiElixir className="size-8 text-rose-500" />,
    added: false,
  },
  {
    title: 'Dart',
    icon: <SiDart className="size-8 text-emerald-500" />,
    added: false,
  },
  {
    title: 'Flutter',
    icon: <SiFlutter className="size-8 text-emerald-500" />,
    added: false,
  },
  {
    title: 'Kotlin',
    icon: <SiKotlin className="size-8 text-rose-500" />,
    added: false,
  },
  {
    title: 'JQuery',
    icon: <SiJquery className="size-8 text-amber-500" />,
    added: false,
  },
  {
    title: 'PHP',
    icon: <FaPhp className="size-8 text-purple-600" />,
    added: false,
  },
  {
    title: 'Laravel',
    icon: <FaLaravel className="size-8 text-purple-600" />,
    added: false,
  },
  {
    title: 'Lua',
    icon: <FaMoon className="size-8" />,
    added: false,
  },
]
