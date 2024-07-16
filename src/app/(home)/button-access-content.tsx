'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function ButtonAccessContent() {
  const router = useRouter()

  return (
    <Button onClick={() => router.push('/blog')}>
      Acessar todos conteudos
    </Button>
  )
}
