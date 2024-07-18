'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './root'

export interface TriggerProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Trigger(props: TriggerProps) {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="group flex w-full flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-200 px-6 py-4 text-center text-zinc-500 group-focus-within:border-rose-300 group-focus-within:ring-4 group-focus-within:ring-rose-100 hover:border-rose-200 hover:bg-rose-25 hover:text-rose-500 dark:border-zinc-800 dark:text-zinc-400 dark:group-focus-within:border-rose-500 dark:group-focus-within:ring-violet-500/10 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-rose-300"
    >
      <span className="relative rounded-full border-6 p-2 border-zinc-700 bg-zinc-800 group-hover:border-zinc-600 group-hover:bg-zinc-700">
        <UploadCloud className="h-5 w-5 text-zinc-500 group-hover:text-rose-400" />
      </span>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-rose-500">Click to upload</span>{' '}
          or drag and drop
        </span>

        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
