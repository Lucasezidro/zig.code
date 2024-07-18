'use client'

import { FileItem } from './file-item'
import { useFileInput } from './root'

export interface FileListProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function FileList(props: FileListProps) {
  const { files } = useFileInput()

  if (files.length === 0) {
    return null
  }

  return (
    <div className="mt-4 flex flex-col gap-3">
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            type={file.type}
            state="error"
          />
        )
      })}
    </div>
  )
}
