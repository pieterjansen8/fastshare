'use client';

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useUser } from "@stackframe/stack";
import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import { Share2, Upload } from 'lucide-react';

export default function Home() {
  const [url, setURL] = useState({
    url: "",
    name: "",
    key: ""
  });
  const user = useUser();

  if (!user?.primaryEmail) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className="min-h-screen bg-white"
      >
        <NotSignedIn />
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto shadow-2xl shadow-slate-950">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">File Uploader</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <UploadButton
              className="ut-button:bg-blue-600 ut-button:hover:bg-blue-700 ut-button:text-white ut-button:font-semibold ut-button:py-2 ut-button:px-4 ut-button:rounded-lg ut-button:transition-colors ut-button:duration-200"
              endpoint="FileUploader"
              onClientUploadComplete={(res) => {
                setURL({
                  url: res[0].url,
                  name: res[0].name,
                  key: res[0].key
                });
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                console.log(error)
                alert(`ERROR! ${error.message, error.cause, error.name, error.stack}`);
              }}
            />
            <ShowURL url={url.url} name={url.name} upkey={url.key} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export function NotSignedIn() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Welcome</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <Button
            variant="default"
            className="w-full"
            onClick={() => router.push("/handler/sign-in")}
          >
            Login
          </Button>
          <div className="text-center text-sm text-gray-500">or</div>
          <Button variant="outline" className="w-full">
            Continue as guest
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function ShowURL({ url, name, upkey }: { url: string; name: string; upkey:string }) {
  if (url === "") {
    return <p className="text-gray-500 text-center">No file uploaded</p>;
  }
  return (
    <div>
       <Button
      variant="outline"
      className="flex items-center space-x-2 shadow-lg shadow-slate-600"
      onClick={() => share(url, name, upkey)}
    >
      <Share2 size={18} />
      <span>Share {name}</span>
    </Button>
    </div>
  );
}

function share(url: string, name: string, key:string) {
  const shareData = {
    title: "Ptj-share, " + name,
    text: "I'm a file, shared with Ptj-share!",
    url: "https://fastshare.vercel.app/files/"+key,
  };
  navigator.share(shareData);
}

