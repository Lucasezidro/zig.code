'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FaImage, FaCamera } from 'react-icons/fa'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ChangeImageProfile() {
  function handleSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger className="group relative">
        <FaCamera className="absolute z-50 top-7 left-8 text-transparent group-hover:text-zinc-100 transition" />
        <Avatar className="size-20 border-2 group-hover:opacity-50 transition-opacity">
          <AvatarImage src="https://github.com/Lucasezidro.png" />
          <AvatarFallback />
        </Avatar>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Alterar foto de perfil</DialogTitle>
        </DialogHeader>
        <Avatar className="size-20 border-2 group-hover:opacity-50 transition-opacity mt-4">
          <AvatarImage src="https://github.com/Lucasezidro.png" />
          <AvatarFallback />
        </Avatar>
        <form id="photo-form" action={handleSubmit}>
          <div className="w-full flex items-center bg-zinc-900 px-3 py-2 rounded-lg cursor-pointer">
            <FaImage />
            <Input
              id="picture"
              name="picture"
              type="file"
              className="bg-transparent border-0 cursor-pointer"
            />
          </div>
        </form>
        <Button form="photo-form">Salvar</Button>
      </DialogContent>
    </Dialog>
  )
}
