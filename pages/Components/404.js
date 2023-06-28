import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
 const router  = useRouter();
    useEffect(()=>{
   setTimeout(()=>{
    router.push('/')
   },3000)

    },[])
  return (
    <div className="flex flex-col items-center justify-center h-screen not-found bg-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <h className="text-blue-500 hover:text-blue-700">Go back home</h>
      </Link>
    </div>

  )
}
