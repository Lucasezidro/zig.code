import { DataTableRecruters } from '@/components/data-table/data-table-recruters'

export default function Home() {
  return (
    <div className="flex flex-col py-4 items-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold text-2xl">
          Encontre recrutadores de empresas especificas.
        </h1>
        <span className="text-sm text-zinc-400">
          Envie mensagens para recrutadores e tanha mais chances de ser
          selecionado para a vaga desejada!
        </span>
      </div>

      <div className="container mx-auto py-10">
        <DataTableRecruters />
      </div>
    </div>
  )
}
