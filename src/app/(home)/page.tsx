import { DataTable } from '@/components/data-table/data-table'

export default function Home() {
  return (
    <div className="flex flex-col py-4 items-center">
      <h1 className="font-bold text-2xl">
        Encontre o profissional ideal para a sua vaga!
      </h1>

      <div className="container mx-auto py-10">
        <DataTable />
      </div>
    </div>
  )
}
