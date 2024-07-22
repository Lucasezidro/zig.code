import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { faker } from '@faker-js/faker'

export function JobDescriptionModal({ jobName }: { jobName: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Ver descrição</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Descrição da vaga {jobName}</DialogTitle>
        </DialogHeader>

        <span className="text-sm text-zinc-400">
          {faker.lorem.paragraphs()}
        </span>
      </DialogContent>
    </Dialog>
  )
}
