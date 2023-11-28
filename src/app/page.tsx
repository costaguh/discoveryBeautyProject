import { SectionCards } from "@/components/section-cards";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <section className='relative w-full grid justify-items-center'>
          <Header />
      </section>
      <SectionCards />  
    </>
  )
}
