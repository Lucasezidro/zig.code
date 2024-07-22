import { faker } from '@faker-js/faker'
import { ReactNode } from 'react'

export type Worker = {
  id: string
  type: string
  name: string
  email: string
  office: string
  status: 'working' | 'hiring' | 'find-work'
  avatar: string
  bio: string
  enterprise?: string
  messages?: string
  links?: string
  skils?: {
    skilName: string
    skilLogo: ReactNode
    repositories: {
      title: string
      skil: string
    }
  }
}

export const dataWorkers: Worker[] = [
  {
    id: faker.string.uuid(),
    type: 'Technology',
    name: 'Lucas Ezidro',
    email: 'lucas@email.com',
    office: 'Front end developer',
    status: 'working',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'hiring',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'find-work',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'working',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'hiring',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'find-work',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'working',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'hiring',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'find-work',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'working',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'hiring',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'find-work',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'working',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'hiring',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'find-work',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'working',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'working',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'working',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'working',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
  {
    id: faker.string.uuid(),
    type: faker.person.jobType(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    office: faker.person.jobTitle(),
    status: 'working',
    bio: faker.person.bio(),
    avatar: faker.image.avatarGitHub(),
  },
]
