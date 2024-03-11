import Image from 'next/image'
import { app } from '@/lib/firebase/config'

export default function Home() {
  console.log(app);
  return (
    <main>
      <h1>Hello</h1>
    </main>
  )
}
