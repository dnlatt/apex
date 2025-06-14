
import { Nav } from "@/components";
import {
  OurDesigners,
  Footer,
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
} from "@/sections";

export default function Home() {
  return (
    <main className='relative'>
      <Nav />
      <section className=''>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='bg-pale-blue'>
        <OurDesigners />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='bg-black p-5'>
        <Footer />
      </section>
    </main>
  );
}
