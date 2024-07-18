'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ReactNode } from 'react'

export type Worker = {
  id: string
  name: string
  status: 'working' | 'hiring' | 'find-work'
  email: string
  details: ReactNode
  type: string
  office: string
}

export const columns: ColumnDef<Worker>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'office',
    header: 'Cargo',
  },
  {
    accessorKey: 'type',
    header: 'Area',
  },
  {
    accessorKey: 'details',
    header: 'Detalhes',
  },
]
