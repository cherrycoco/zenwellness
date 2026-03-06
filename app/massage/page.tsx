import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Massage',
  description: 'Expert massage in Vancouver. Swedish relaxation, deep tissue, sports medicinal, and prenatal massage. Clinical, outcome-based treatments starting at $45. Add KORU herbs for enhanced healing.',
  openGraph: { title: 'Massage | Zen Wellness Center', description: 'Expert massage in Vancouver starting at $45.', images: [{ url: '/images/massage1.jpg', width: 1200, height: 630 }] },
  alternates: { canonical: '/massage' },
}

const massageTypes = [
  { title: 'Swedish Relaxation', description: 'A full body relaxation massage that promotes good health by improving blood flow and relieving tension caused by stress. Long, gentle strokes with minimal pressure — a perfect introduction to wellness.', icon: '01' },
  { title: 'Deep Tissue', description: 'A restorative massage that releases deeply held patterns of tension and removes toxins. Deep muscle compression and cross fibre friction increase blood and lymphatic flow, encouraging muscles to operate at full capacity.', icon: '02' },
  { title: 'Sports Medicinal', description: 'Targeted treatment infused with our all natural traditional Chinese herbs to speed up the healing process. For professional athletes, weekend warriors, or anyone suffering from soft tissue injuries.', icon: '03' },
  { title: 'Mother To Be', description: 'A specially designed prenatal treatment to relieve and ease the heavy feeling that comes with pregnancy. Ends with a relaxing, rejuvenating scalp and facial massage. Suitable after the first trimester.', icon: '04' },
]

const durations = [
  { time: '30 min', price: '$45' },
  { time: '50 min', price: '$68' },
  { time: '60 min', price: '$79' },
  { time: '75 min', price: '$99' },
  { time: '90 min', price: '$118' },
]

export default function MassagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Massage', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Zen Wellness Center' }, description: 'Expert massage including Swedish, deep tissue, sports medicinal, and prenatal treatments.', areaServed: 'Vancouver, BC' }) }} />

      <Hero title="Massage" subtitle="Clinical, outcome-based treatments rooted in Traditional Chinese Medicine." compact />

      {/* Big Statement */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 leading-snug">
            Our massage isn&apos;t just relaxation — it&apos;s treatment. Every session is designed around your body, your pain points, and your recovery.
          </p>
        </div>
      </section>

      {/* Massage Types */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-12 md:mb-20">
            <p className="eyebrow mb-4">Choose Your Treatment</p>
            <h2 className="heading-section mb-6">Four Approaches, One Goal</h2>
            <div className="accent-line mb-6" />
            <p className="prose-zen">
              Every massage type starts at $45. Choose the approach that fits your needs — or let us recommend the best option for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {massageTypes.map((m, i) => (
              <div key={m.title} className={`p-8 md:p-12 lg:p-16 ${
                i < 2 ? 'border-b border-cream-200' : ''
              } ${i % 2 === 0 ? 'md:border-r border-cream-200' : ''}`}>
                <span className="font-display text-5xl md:text-6xl font-light text-sand-300">{m.icon}</span>
                <h3 className="font-display text-2xl md:text-3xl font-light text-stone-900 mt-4 mb-6">{m.title}</h3>
                <p className="prose-zen">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image src="/images/massage1.jpg" alt="Massage at Zen Wellness Center" fill className="object-cover" sizes="100vw" />
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-stone-900 text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="eyebrow !text-stone-500 mb-4">Pricing</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6">Simple, Transparent Rates</h2>
              <div className="accent-line mb-8" />
              <p className="text-stone-400 text-lg md:text-xl leading-relaxed font-light mb-8">
                All massage types are the same price. Just choose your duration and we&apos;ll take care of the rest.
              </p>
              <div className="bg-sand-300/10 p-6 border border-sand-300/20">
                <p className="text-sand-300 font-medium mb-2">Enhance your massage</p>
                <p className="text-stone-400 font-light">
                  Add <Link href="/koru" className="text-sand-300 underline underline-offset-4 hover:text-white transition-colors">KORU Herbs</Link> to any session for $10 — our exclusive Chinese herbal formulation for deeper healing.
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-0">
                {durations.map((d) => (
                  <div key={d.time} className="flex justify-between items-baseline border-b border-white/10 py-5 md:py-6">
                    <span className="text-stone-400 text-lg">{d.time}</span>
                    <span className="font-display text-2xl md:text-3xl font-light text-sand-300">{d.price}</span>
                  </div>
                ))}
                <div className="flex justify-between items-baseline border-b border-white/10 py-5 md:py-6">
                  <span className="text-stone-400 text-lg">Chair Massage</span>
                  <span className="font-display text-2xl md:text-3xl font-light text-sand-300">$1.5/min</span>
                </div>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a href="tel:604-428-0896" className="btn-primary bg-white !text-stone-900 hover:bg-cream-100 text-center flex-1">Call (604) 428-0896</a>
                <a href="mailto:zenwellness@outlook.com" className="btn-outline !border-white/30 !text-white text-center hover:!bg-white hover:!text-stone-900 flex-1">Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
