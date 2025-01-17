import Link from "next/link"
export default async function Page({
    params,
  }: {
    params: Promise<{ file: string }>
  }) {
    const slug = (await params).file
    return(
      <div className="flex flex-col justify-center items-center h-screen">
        <Link className="text-blue-600 text-2xl" href={"https://utfs.io/f/"+slug}>Download me!</Link>
      </div>
    )
  }