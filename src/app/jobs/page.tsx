import { Input } from '@/components/ui/input'
import { JobsList } from './jobs-list'

export default function JobsPage() {
  return (
    <main className="p-10 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4 max-w-[1024px] w-full">
        <h1 className="text-2xl font-bold">Busque por vagas</h1>

        <span className="text-sm text-zinc-400">
          Aqui você vai encontrar todas as vagas postadas por recrutadores
        </span>

        <Input placeholder="Buscar por vaga" />
      </div>

      <div className="mt-10">
        <JobsList />
      </div>
    </main>
  )
}
