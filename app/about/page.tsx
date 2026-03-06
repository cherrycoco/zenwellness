import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Zen Wellness Center\'s history. Founded in 2013 by Cindy and Stanley, we bring over 10 years of expertise in massage, acupuncture, Traditional Chinese Medicine, and KORU herbs in Vancouver.',
  openGraph: { title: 'About Us | Zen Wellness Center', description: 'Founded in 2013, Zen Wellness Center brings expert wellness care rooted in Traditional Chinese Medicine to Vancouver.', images: [{ url: '/images/spa-background9.jpg', width: 1200, height: 630 }] },
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <Hero title="Our Story" subtitle="Two journeys, one mission — helping Vancouver heal through Traditional Chinese Medicine." compact />

      {/* Mission Statement */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-b border-cream-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 leading-snug">
              It all started with a dream — to help you achieve your best health so that you can live a life full of happiness.
            </p>
          </div>
        </div>
      </section>

      {/* Cindy */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/massage1.jpg" alt="Massage at Zen Wellness" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow mb-4">Founder</p>
              <h2 className="heading-section mb-6">Cindy</h2>
              <div className="accent-line mb-8" />
              <p className="prose-zen mb-6">
                Cindy started her career as a nurse at the age of 23. She loved helping people, but wanted something more — a hands-on approach where she could feel the difference she was making.
              </p>
              <p className="prose-zen mb-6">
                She began experimenting with massage techniques, drawing on her deep knowledge of human anatomy and clinical care. Over years of practice, she developed her own methods — blending medical precision with an intuitive, compassionate touch.
              </p>
              <p className="prose-zen">
                Today, Cindy&apos;s massage is the heart of Zen. Clients describe it as unlike any massage they&apos;ve had — because it&apos;s built on a foundation most therapists don&apos;t have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stanley */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-stone-900 text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <p className="eyebrow !text-stone-500 mb-4">Founder</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6">Stanley</h2>
              <div className="accent-line mb-8" />
              <p className="text-stone-400 text-lg md:text-xl leading-relaxed font-light mb-6">
                Stanley began as a mechanical engineer, but quickly realized his true calling was in health — helping people achieve a state of wellbeing they didn&apos;t think was possible.
              </p>
              <p className="text-stone-400 text-lg md:text-xl leading-relaxed font-light mb-6">
                He retrained in Traditional Chinese Medicine and Acupuncture, eventually developing his signature approach: infusing massage with Chinese herbs to treat muscle, ligament, and joint problems at their root.
              </p>
              <p className="text-stone-400 text-lg md:text-xl leading-relaxed font-light mb-8">
                His creation of the exclusive <Link href="/koru" className="text-sand-300 underline underline-offset-4 hover:text-white transition-colors">KORU herbs</Link> has helped thousands of patients find relief from chronic pain, sports injuries, and conditions that hadn&apos;t responded to other treatments.
              </p>
              <Link href="/koru" className="btn-outline !border-white/30 !text-white hover:!bg-white hover:!text-stone-900">
                Learn About KORU
              </Link>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/acupuncture2.jpg" alt="Acupuncture at Zen Wellness" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founded Together */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <p className="font-display text-7xl md:text-9xl font-light text-sand-300 leading-none">2013</p>
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-4xl font-light text-stone-900 mb-6">Founded Together</h3>
              <div className="accent-line mb-8" />
              <p className="prose-zen mb-6">
                Cindy and Stanley wanted a place where they could channel their passion into helping people heal. Together, they founded Zen Wellness Center — a space where Traditional Chinese Medicine meets genuine, personal care.
              </p>
              <p className="prose-zen mb-10">
                Over a decade later, they continue to serve the Vancouver community with the same dedication and warmth that started it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:604-428-0896" className="btn-primary text-center">Call to Book</a>
                <Link href="/contact" className="btn-outline text-center">Visit Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
