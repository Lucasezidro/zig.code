import { Header } from '@/components/header'

export default function WorkersLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col items-center h-screen w-full">
      <Header />
      {children}
    </main>
  )
}
