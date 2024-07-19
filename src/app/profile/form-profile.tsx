import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { SkillsModal } from './skills-modal'
import { SKILLS } from '@/helpers/skills'

export function FormProfile() {
  const addedSkils = SKILLS.filter((skill) => skill.added === true)
  const restOfSkills = SKILLS.filter((skill) => skill.added === false)

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
          {addedSkils.map((skill, i) => (
            <div key={i}>{skill.icon}</div>
          ))}

          <SkillsModal addedSkils={addedSkils} restOfSkills={restOfSkills} />
        </div>
      </div>
    </form>
  )
}
