/* eslint-disable @next/next/no-img-element */
import { Header } from '@/components/header'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { faker } from '@faker-js/faker'
import Link from 'next/link'

import { dayjs } from '@/lib/dayjs'
import { File } from 'lucide-react'
import { ButtonAccessContent } from './button-access-content'
import Image from 'next/image'

interface CardContent {
  id: string
  title: string
  postedAt: Date
  description: string
}

const cardContent: CardContent[] = [
  {
    id: '1',
    title: faker.lorem.word(),
    postedAt: faker.date.past(),
    description: faker.lorem.paragraph(),
  },
  {
    id: '2',
    title: faker.lorem.word(),
    postedAt: faker.date.past(),
    description: faker.lorem.paragraph(),
  },
  {
    id: '3',
    title: faker.lorem.word(),
    postedAt: faker.date.past(),
    description: faker.lorem.paragraph(),
  },
]

export default function Home() {
  function formatDate(date: string) {
    return dayjs(date).format('DD [de] MMM [de] YYYY')
  }

  return (
    <main className="flex flex-col items-center h-screen w-full">
      <Header />

      <div className="absolute top-[6.5rem] left-0 w-[440px]">
        <div>
          {cardContent.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-24 gap-8">
              <h1 className="text-lg font-bold">
                Nao ha conteudos para serem exibidos
              </h1>

              <File className="text-zinc-500" />
            </div>
          ) : (
            <div className="flex mt-24 ml-4 flex-col items-center gap-8">
              <h2 className="text-xl font-bold">Posts anteriores</h2>
              {cardContent
                .sort(
                  (a, b) =>
                    new Date(b.postedAt).getTime() -
                    new Date(a.postedAt).getTime(),
                )
                .map((content) => {
                  return (
                    <Card
                      className="bg-zinc-900 w-[350px] h-[150px] flex flex-col justify-between"
                      key={content.id}
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {content.title}
                          <span className="text-xs text-zinc-400">
                            Postado em {formatDate(content.postedAt.toString())}
                          </span>
                        </CardTitle>
                        <CardDescription className="w-64 overflow-hidden overflow-ellipsis whitespace-nowrap">
                          {content.description}
                        </CardDescription>
                      </CardHeader>

                      <CardFooter>
                        <Link
                          className="text-sm text-rose-500 hover:underline underline-offset-4"
                          href="/"
                        >
                          Ver mais
                        </Link>
                      </CardFooter>
                    </Card>
                  )
                })}

              <ButtonAccessContent />
            </div>
          )}
        </div>
      </div>

      <div className="max-w-[1024px] w-full h-screen p-8">
        <div className="w-full flex items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold">
              Como buscar items nos parametros da URL no Next 15
            </h1>

            <section className="w-full my-8">
              <span>{faker.lorem.paragraphs()}</span>
            </section>

            <Image
              className="mb-8 rounded-xl"
              src={faker.image.urlPicsumPhotos()}
              alt=""
              quality={100}
              width={480}
              height={480}
            />

            <section>
              <span className="w-full my-8">{faker.lorem.paragraphs()}</span>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
