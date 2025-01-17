import { Download } from "./download"
export default async function Page({
    params,
  }: {
    params: Promise<{ file: string }>
  }) {
    const slug = (await params).file
    return(
      <div>
        <Download key={slug}></Download>
      </div>
    )
  }