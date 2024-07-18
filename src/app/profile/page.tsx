import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import * as FileInput from '@/components/file-input'
import { FormProfile } from './form-profile'

export default function ProfilePage() {
  return (
    <div className="grid grid-cols-9 max-w-[1024px] my-4 h-screen w-full">
      <div className="col-span-3 bg-zinc-900 rounded-2xl p-8 flex flex-col">
        <div className="flex items-center gap-4">
          <div>
            <Avatar className="size-20 border-2 border-black">
              <AvatarImage src="https://github.com/Lucasezidro.png" />
              <AvatarFallback />
            </Avatar>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Lucas Ezidro</span>
            <span className="text-sm text-zinc-400">
              lucasezidro7@gmail.com
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <h2>Alterar foto de perfil</h2>

          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="mt-10">
          <h2 className="font-bold mb-2">Meus Links</h2>

          <div className="flex flex-col gap-2">
            <Link href="" className="flex items-center gap-2 text-zinc-400">
              <FaLinkedin className="text-blue-400" />
              https://linkedin/in/Lucasezidro
            </Link>

            <Link href="" className="flex items-center gap-2 text-zinc-400">
              <FaGithub />
              https://github.com/Lucasezidro
            </Link>

            <Link href="" className="flex items-center gap-2 text-zinc-400">
              <FaInstagram className="text-rose-700" />
              https://github.com/Lucasezidro
            </Link>

            <Link href="" className="flex items-center gap-2 text-zinc-400">
              <FaXTwitter />
              https://x.com/lucasezidrodev
            </Link>

            <Button variant="link">Adicionar link</Button>

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
