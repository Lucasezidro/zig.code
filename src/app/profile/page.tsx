import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FormProfile } from './form-profile'
import { ChangeImageProfile } from './change-image-profile'
import { AddLinkModal } from './add-link-modal'
import { Notifications } from './notifications'

export default function ProfilePage() {
  return (
    <div className="grid grid-cols-9 max-w-[1024px] my-4 h-screen w-full">
      <div className="col-span-3 bg-zinc-900 rounded-2xl p-8 flex flex-col">
        <div className="flex items-center gap-4">
          <ChangeImageProfile />
          <div className="flex flex-col">
            <span className="text-sm">Lucas Ezidro</span>
            <span className="text-sm text-zinc-400">
              lucasezidro7@gmail.com
            </span>
          </div>
        </div>

        <div className="space-y-4 mt-8">
          <h2 className="font-bold">Notificações</h2>

          <Notifications />
        </div>

        <div className="mt-10">
          <h2 className="font-bold mb-2">Meus Links</h2>

          <div className="flex flex-col gap-2">
            <Link
              href="https://linkedin/in/Lucasezidro"
              className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300 hover:underline"
            >
              <FaLinkedin className="text-blue-400" />
              LinkedIn
            </Link>

            <Link
              href="https://github.com/Lucasezidro"
              className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300 hover:underline"
            >
              <FaGithub />
              GitHub
            </Link>

            <Link
              href="https://instagram.com/Lucasezidro"
              className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300 hover:underline"
            >
              <FaInstagram className="text-rose-700" />
              Instagram
            </Link>

            <Link
              href="https://x.com/lucasezidrodev"
              className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300 hover:underline"
            >
              <FaXTwitter />
              Twitter
            </Link>

            <AddLinkModal />
            <Button variant="ghost">Ver meus repositorios</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center col-span-6 p-8">
        <h1 className="text-3xl font-extrabold">Meus dados</h1>
        <span className="text-sm text-zinc-400">
          Cadastre seus dados, ou edite caso ja tenha uma conta!
        </span>

        <FormProfile />
      </div>
    </div>
  )
}
