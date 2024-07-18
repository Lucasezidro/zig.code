import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { faker } from '@faker-js/faker'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiNextdotjs } from 'react-icons/si'
import { RiNodejsLine } from 'react-icons/ri'
import { FaReact, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function WorkerPage() {
  return (
    <div className="grid grid-cols-9 max-w-[1024px] my-4 h-screen w-full">
      <div className="col-span-3 bg-zinc-900 rounded-2xl p-8 flex flex-col">
        <div className="flex items-center gap-4">
          <Avatar className="size-20 border-2 border-black">
            <AvatarImage src="https://github.com/Lucasezidro.png" />
          </Avatar>

          <div className="flex flex-col">
            <span className="text-sm">Lucas Ezidro</span>
            <span className="text-sm text-zinc-400">
              lucasezidro7@gmail.com
            </span>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-bold mb-2">Bio</h2>

          <span className="text-sm text-zinc-400">
            {faker.lorem.paragraphs()}
          </span>
        </div>

        <div className="mt-10">
          <h2 className="font-bold mb-2">Links</h2>

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
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center col-span-6 p-8">
        <h1 className="text-3xl font-extrabold">Lucas Ezidro</h1>

        <span className="text-zinc-400 text-sm">
          Junior Software Developer, at Youse Seguros
        </span>

        <div className="flex-flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mt-8 mb-4">Skils</h2>

            <span className="text-sm text-zinc-400 mb-10">
              As skills são ferramentas e tecnologias que o usuário possui
              experiência. Acessando o link de repositórios, será possível ver
              os projetos linkados por tecnologia.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2 border-r border-zinc-500 p-2">
              <div className="flex items-center gap-2">
                <IoLogoJavascript className="text-amber-400" />
                <strong>Javascript, JS</strong>
              </div>

              <Link
                className="text-xs text-cyan-600 hover:underline underline-offset-2"
                href=""
              >
                Ver repositorios
              </Link>
            </div>

            <div className="flex flex-col gap-2 border-r border-zinc-500 p-2">
              <div className="flex items-center gap-2">
                <RiNodejsLine className="text-green-600" />
                <strong>Node, JS</strong>
              </div>

              <Link
                className="text-xs text-cyan-600 hover:underline underline-offset-2"
                href=""
              >
                Ver repositorios
              </Link>
            </div>

            <div className="flex flex-col gap-2 border-r border-zinc-500 p-2">
              <div className="flex items-center gap-2">
                <FaReact className="text-cyan-500" />
                <strong>React, JS</strong>
              </div>

              <Link
                className="text-xs text-cyan-600 hover:underline underline-offset-2"
                href=""
              >
                Ver repositorios
              </Link>
            </div>

            <div className="flex flex-col gap-2 border-r border-zinc-500 p-2">
              <div className="flex items-center gap-2">
                <SiNextdotjs />
                <strong>Next, JS</strong>
              </div>

              <Link
                className="text-xs text-cyan-600 hover:underline underline-offset-2"
                href=""
              >
                Ver repositorios
              </Link>
            </div>
          </div>

          <div className="space-y-4 mt-16">
            <Label>Enviar Mensagem</Label>

            <Textarea placeholder="Ola, Lucas ezidro..." />

            <Button className="w-full">Enviar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
