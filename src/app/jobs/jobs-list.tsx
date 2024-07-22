import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import { jobsData } from '@/helpers/data-jobs'
import Link from 'next/link'
import { FaReact } from 'react-icons/fa'
import { RiNodejsFill } from 'react-icons/ri'
import { JobDescriptionModal } from './job-description-modal'

export function JobsList() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {jobsData.map((job) => {
        return (
          <div
            className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-2"
            key={job.id}
          >
            <h1 className="font-bold text-xl">{job.jobName}</h1>
            <span className="text-sm text-zinc-400">
              Empresa: {job.company}
            </span>
            <span className="text-sm text-zinc-400">
              Acesse o site da empresa aqui:{' '}
              <Link
                className="text-rose-500 hover:underline underline-offset-2"
                href={job.companyUrl}
              >
                {job.companyUrl}
              </Link>
            </span>

            <div className="mt-4 space-y-2">
              <h2 className="font-bold">Tipo da vaga</h2>
              <span className="text-sm text-zinc-400">
                {job.jobDescription}
              </span>

              <JobDescriptionModal jobName={job.jobName} />
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">
                Skills necessarias para vaga
              </h2>

              <div className="flex items-center gap-2">
                <FaReact className="text-cyan-500" />
                <RiNodejsFill className="text-green-500" />
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-bold">Recrutador responsavel pela vaga</h2>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={job.recruterAvatar} />
                    <AvatarFallback />
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-zinc-400">{job.recruter}</span>
                    <Link
                      className="text-rose-500 hover:underline underline-offset-2"
                      href={`/profile/recruter/:recruterId`}
                    >
                      Ver perfil
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-4">
              <Button className="w-full">Candidatar</Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
