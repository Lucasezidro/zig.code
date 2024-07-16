import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-dropdown-menu'

export function FormCreateContent() {
  return (
    <form
      action=""
      className="bg-zinc-900 mt-10 w-full p-10 rounded-lg flex flex-col gap-4"
    >
      <Label>Titulo</Label>
      <Input
        placeholder="Defina o titulo do conteudo do post"
        className="placeholder:text-zinc-400"
      />

      <Label>Adicionar imagens</Label>
      <Input type="file" className="text-zinc-400" />

      <Label>Adicione o conteudo do Post</Label>
      <Textarea
        placeholder="Digite aqui..."
        className="placeholder:text-zinc-400"
      />

      <Separator />

      <Button type="submit">Postar agora</Button>

      <span className="text-xs mt-10 text-center text-zinc-400">
        Ao criar um novo artigo ele sera exibido na pagina principal do blog,
        assim que for aprovado pelos{' '}
        <strong className="text-rose-400">administradores</strong>.
      </span>
    </form>
  )
}
