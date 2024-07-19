import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Portifolio() {
  return (
    <main className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold mt-10">Portifolio</h1>

      <span className="text-sm text-zinc-400">
        Deixei o link do seu portifolio, para que os recrutadores possam
        encontrar com mais facilidade
      </span>

      <form className="mt-10 space-y-4 w-full">
        <Label>Link do portifolio:</Label>
        <Input type="url" placeholder="https://exemple.com.br" />

        <div className="space-y-4">
          <Label>Descrição</Label>
          <Textarea placeholder="Explique em poucas palavras o intuito do projeto" />
        </div>

        <Button>Cadastrar portifolio</Button>
      </form>
    </main>
  )
}
