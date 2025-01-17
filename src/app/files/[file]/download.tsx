"use client"
import { redirect } from "next/navigation"
export function Download({key} : {key:string}){
    return(
        <span className="text-blue-600 text-2xl" onClick={() => {redirect("https://utfs.io/f/"+key)}}>
            Download me!
        </span>
    )
}