import Navbar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center 2xl:pr-40 2xl:pl-40 xl:pr-28 xl:pl-28 sm:flex-wrap">
      <Navbar/>
    </main>
  )
}
