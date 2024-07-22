import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { faker } from '@faker-js/faker'
import Link from 'next/link'

interface RecruterParams {
  params: {
    id: string
  }
}

export default function RecruterPage(props: RecruterParams) {
  const recruterId = props.params.id

  return (
    <div className="grid grid-cols-9 max-w-[1024px] my-4 h-screen w-full">
      <div className="col-span-3 bg-zinc-900 rounded-2xl p-8 flex flex-col">
        <div className="flex items-center gap-4">
          <Avatar className="size-20 border-2 border-black">
            <AvatarImage src={faker.image.avatar()} />
            <AvatarFallback />
          </Avatar>

          <div className="flex flex-col">
            <span className="text-sm">{faker.person.fullName()}</span>
            <span className="text-sm text-zinc-400">
              {faker.internet.email()}
            </span>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-bold mb-2">
            Um pouco sobre a empresa {faker.company.name()}
          </h2>

          <h3 className="mt-10 mb-4 font-semibold">Principios e valores</h3>
          <span className="text-sm text-zinc-400">
            {faker.lorem.paragraphs()}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center col-span-6 p-8">
        <h1 className="text-3xl font-extrabold">{faker.person.fullName()}</h1>

        <span className="text-zinc-400 text-sm">
          Recrutador(a) na empresa {faker.company.name()}
        </span>

        <div className="flex-flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mt-8 mb-4">Sobre o recrutador</h2>

            <span className="text-sm text-zinc-400 mb-10">
              {faker.lorem.paragraphs()}
            </span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h2 className="font-bold">Vagas</h2>

            <span className="text-sm text-zinc-400">
              Para ver as vagas postadas pelo {faker.person.fullName()}{' '}
              <Link
                className="text-rose-500 hover:underline underline-offset-2"
                href={`/jobs/${recruterId}`}
              >
                clique aqui
              </Link>
            </span>
          </div>

          <div className="space-y-4 mt-16">
            <Label>Enviar Mensagem</Label>

            <Textarea placeholder={`Ola, ${faker.person.fullName()}...`} />

            <Button className="w-full">Enviar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
