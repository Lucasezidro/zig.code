import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function SignUp() {
  return (
    <main className="flex flex-col items-center justify-center mt-56">
      <h1 className="text-2xl font-extrabold mb-24">Criar uma conta</h1>

      <form action="" className="max-w-[35rem] w-full flex flex-col gap-6">
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
