import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function SigIn() {
  return (
    <main className="flex flex-col items-center justify-center mt-56">
      <h1 className="text-2xl font-extrabold mb-24">Acesse a sua conta</h1>

      <form action="" className="max-w-[35rem] w-full flex flex-col gap-6">
        <Label>E-mail</Label>
        <Input placeholder="Digite o seu email" />

        <Label>Senha</Label>
        <Input placeholder="Digite a sua senha" />

        <Button>Entrar</Button>

        <Separator />

        <span className="text-sm text-zinc-400">
          Ainda nao tem conta ?{' '}
          <Link className="text-rose-500 hover:underline" href="/auth/sign-up">
            Criar uma conta
          </Link>
        </span>
      </form>
    </main>
  )
}
