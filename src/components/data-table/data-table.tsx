'use client'

import { Search } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { dataWorkers } from '@/helpers/data'
import { useRouter } from 'next/navigation'
import { Badge } from '../ui/badge'

export function DataTable() {
  const router = useRouter()

  return (
    <Table>
      <TableCaption>
        Uma lista de funcionarios cadastrados no sistema.
      </TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Cargo</TableHead>
          <TableHead>Area</TableHead>
          <TableHead>Detalhes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataWorkers.map((worker) => {
          return (
            <TableRow key={worker.id}>
              <TableCell>{worker.name}</TableCell>
              <TableCell>{worker.email}</TableCell>
              <TableCell>
                <Badge
                  data-status={worker.status}
                  className="data-[status=working]:bg-emerald-700 data-[status=working]:hover:bg-emerald-700 data-[status=hiring]:bg-amber-700 data-[status=hiring]:hover:bg-amber-700 bg-rose-700 hover:bg-rose-700"
                >
                  {worker.status}
                </Badge>
              </TableCell>
              <TableCell>{worker.office}</TableCell>
              <TableCell>{worker.type}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  onClick={() => router.push(`/workers/${worker.id}`)}
                >
                  <Search size={16} />
                </Button>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
