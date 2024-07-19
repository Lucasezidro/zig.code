import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { LINKS } from '@/helpers/links'
import { PlusCircle, Trash } from 'lucide-react'

export function AddLinkModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">Adicionar link</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar link ao meu perfil</DialogTitle>
          <DialogDescription>
            Ao adicionar os links serao visiveis para que outros possam te
            encontrar.
          </DialogDescription>
        </DialogHeader>

        <form action="" className="flex flex-col gap-6">
          {LINKS.map((link) => {
            return (
              <div key={link.id} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id={link.id} defaultChecked={link.defaultChecked} />
                  <label
                    htmlFor={link.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                  >
                    {link.icon}
                    {link.title}
                  </label>
                </div>
                <div className="flex gap-2">
                  <Input
                    type="url"
                    placeholder={link.placeholder}
                    defaultValue={link.defaultValue}
                  />
                  <Button
                    variant="ghost"
                    className="text-rose-500 hover:text-rose-500"
                  >
                    {link.defaultChecked ? <Trash /> : <PlusCircle />}
                  </Button>
                </div>
              </div>
            )
          })}
        </form>
      </DialogContent>
    </Dialog>
  )
}
