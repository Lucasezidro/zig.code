import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { faker } from '@faker-js/faker'
import { dayjs } from '@/lib/dayjs'

export function Notifications() {
  function formatDate(date: string) {
    return dayjs(date).format('DD [de] MMM [de] YYYY')
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link">Clique para ver as suas notifcações</Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notificações</SheetTitle>
          <SheetDescription>
            Aqui ficam as notificações enviadas por recrutadores ou por outros
            usuarios, alem de alerta de novas vagas no que correspondem ao seu
            perfil.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col justify-between gap-4 mt-12 bg-zinc-900 p-6 rounded-lg">
          <div>
            <h2 className="font-bold">
              {faker.person.fullName()}{' '}
              <Badge className="bg-emerald-700 hover:bg-emerald-600">
                Recrutador
              </Badge>
            </h2>

            <span className="text-xs text-zinc-400">
              Enviado em {formatDate(faker.date.past().toString())}
            </span>
          </div>

          <span className="text-sm text-zinc-400">
            Ola bom dia, gostaria de agendarmos uma entrevista para o dia 16/08
            as 14h, teria disponibilidade ?
          </span>

          <Button>Responder</Button>
        </div>

        <div className="flex flex-col justify-between gap-4 mt-12 bg-zinc-900 p-6 rounded-lg">
          <div>
            <h2 className="font-bold">{faker.person.fullName()}</h2>

            <span className="text-xs text-zinc-400">
              Enviado em {formatDate(faker.date.past().toString())}
            </span>
          </div>

          <span className="text-sm text-zinc-400">
            Ola bom dia, gostaria de saber como foi o processo de contratações
            da empresa {faker.company.name()}
          </span>

          <Button>Responder</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
