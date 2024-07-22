import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function SignUp() {
  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <div className="mb-12 flex items-center flex-col gap-4">
        <h1 className="text-2xl font-extrabold">Criar uma conta</h1>
        <span className="text-sm text-zinc-400">
          Se você é um recrutador{' '}
          <Link
            className="text-rose-500 hover:underline underline-offset-2"
            href="/auth/sign-up-recruter"
          >
            clique aqui!
          </Link>
        </span>
      </div>

      <form action="" className="max-w-[35rem] w-full flex flex-col gap-6">
        <Label>Nome</Label>
        <Input placeholder="Digite o seu nome completo" />

        <div className="grid grid-cols-8 space-x-2 items-center">
          <div className="col-span-5">
            <Label>Profissão</Label>
            <Input placeholder="Digite o seu cargo profissional" />
          </div>

          <div className="col-span-3 flex items-center gap-2 mt-4">
            <Checkbox id="finding-work" />
            <Label htmlFor="finding-work">Estou buscando emprego.</Label>
          </div>
        </div>

        <Label>Area</Label>
        <Input placeholder="Digite a area da sua profissão" />

        <Label>E-mail</Label>
        <Input placeholder="Digite o seu email" />

        <Label>Senha</Label>
        <Input placeholder="Digite a sua senha" />

        <Label>Confirme a senha</Label>
        <Input placeholder="Digite a sua senha" />

        <Button>Cadastrar</Button>

        <Separator />

        <span className="text-sm text-zinc-400">
          Ja possui conta ?{' '}
          <Link className="text-rose-500 hover:underline" href="/auth/sign-in">
            Fazer login
          </Link>
        </span>
      </form>
    </main>
  )
}
