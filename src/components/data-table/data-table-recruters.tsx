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
import { useRouter } from 'next/navigation'
import { dataRecruters } from '@/helpers/data-recruters'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export function DataTableRecruters() {
  const router = useRouter()

  return (
    <Table>
      <TableCaption>
        Uma lista de recrutadores cadastrados no sistema.
      </TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Empresa</TableHead>
          <TableHead>Ramo da empresa</TableHead>
          <TableHead>Detalhes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataRecruters.map((recruter) => {
          return (
            <TableRow key={recruter.id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={recruter.avatar} />
                  <AvatarFallback />
                </Avatar>
              </TableCell>
              <TableCell>{recruter.name}</TableCell>
              <TableCell>{recruter.email}</TableCell>
              <TableCell>{recruter.company}</TableCell>
              <TableCell>{recruter.companyType}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  onClick={() => router.push(`/recruters/${recruter.id}`)}
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
