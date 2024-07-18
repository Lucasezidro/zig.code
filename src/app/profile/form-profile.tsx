import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiNextdotjs } from 'react-icons/si'
import { RiNodejsLine } from 'react-icons/ri'
import { Button } from '@/components/ui/button'

export function FormProfile() {
  return (
    <form action="" className="flex flex-col w-full h-full p-8 gap-4">
      <div className="flex items-center gap-4">
        <div className="space-y-4">
          <Label>Nome</Label>
          <Input placeholder="Digite o seu nome" defaultValue="Lucas Ezidro" />
        </div>
        <div className="space-y-4">
          <Label>E-mail</Label>
          <Input
            placeholder="Digite o seu e-mail"
            defaultValue="lucasezidro7@gmail.com"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="space-y-4">
          <Label>Cargo</Label>
          <Input
            placeholder="Digite o seu cargo"
            defaultValue="Junior software developer"
          />
        </div>
        <div className="space-y-4">
          <Label>Area</Label>
          <Input placeholder="Digite a sua area" defaultValue="Technology" />
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        <Label>Status</Label>
        <div className="flex gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="working" defaultChecked />
            <label
              htmlFor="working"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Working
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="hiring" />
            <label
              htmlFor="hiring"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Hiring
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="finding-work" />
            <label
              htmlFor="finding-work"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Finding work
            </label>
          </div>
        </div>
      </div>

      <Button variant="outline">Salvar</Button>

      <Separator />

      <div className="space-y-8">
        <h2 className="font-bold">Minhas skils</h2>

        <div className="flex items-center gap-4">
          <FaReact className="size-8 text-cyan-500" />
          <SiNextdotjs className="size-8" />
          <RiNodejsLine className="size-8 text-green-600" />
          <IoLogoJavascript className="size-8 text-amber-500" />
          <Button variant="link">Adicionar skill</Button>
        </div>
      </div>
    </form>
  )
}
