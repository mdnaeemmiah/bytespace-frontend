import Image from "next/image"
import Link from "next/link"
import errorImage from "../asstes/navbar/Frame (11).png"

export default function NotFound() {
  return (
    <Link href="/home" className="fixed inset-0 w-full h-full cursor-pointer overflow-hidden flex items-center justify-center bg-blue-600">
      <Image 
        src={errorImage} 
        alt="404 - Click to go home" 
        fill
        className="object-contain"
        priority
        sizes="100vw"
      />
    </Link>
  )
}
