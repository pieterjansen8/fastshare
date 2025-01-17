import { redirect } from "next/navigation"
export default async function Page({
    params,
  }: {
    params: Promise<{ file: string }>
  }) {
    const slug = (await params).file
    return(
        <span className="text-blue-600 text-2xl" onClick={() => {redirect("https://utfs.io/f/"+slug)}}>
            Download me!
        </span>
    )
  }