import { Header } from '@/components/header'
import { FormCreateContent } from './form-create-content'

export default function CreateContent() {
  return (
    <main className="flex flex-col items-center h-screen w-full">
      <Header />

      <h1 className="text-2xl font-bold mt-10">Criar novo artigo</h1>

      <div className="max-w-[780px] w-full">
        <FormCreateContent />
      </div>
    </main>
  )
}
