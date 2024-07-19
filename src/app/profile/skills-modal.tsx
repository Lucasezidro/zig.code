import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Skills } from '@/helpers/skills'
import { PlusCircle, Trash } from 'lucide-react'

interface SkillsModalProps {
  addedSkils: Skills[]
  restOfSkills: Skills[]
}

export function SkillsModal({ addedSkils, restOfSkills }: SkillsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">Adicionar skill</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Skiils Adicionadas</DialogTitle>

        <div className="grid grid-cols-5 gap-4">
          {addedSkils.map((skill, i) => {
            return (
              <div key={i} className="flex items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div>{skill.icon}</div>

                      <TooltipContent>{skill.title}</TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
                <Button
                  variant="ghost"
                  className="text-rose-500 hover:text-rose-600 hover:bg-transparent"
                >
                  <Trash className="size-5" />
                </Button>
              </div>
            )
          })}
        </div>

        <Separator />

        <DialogTitle>Skiils para serem adicionadas</DialogTitle>

        <div className="grid grid-cols-5 gap-4">
          {restOfSkills.map((skill, i) => {
            return (
              <div key={i} className="flex items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div>{skill.icon}</div>

                      <TooltipContent>{skill.title}</TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
                <Button
                  variant="ghost"
                  className="text-emerald-500 hover:text-emerald-600 hover:bg-transparent"
                >
                  <PlusCircle className="size-5" />
                </Button>
              </div>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
