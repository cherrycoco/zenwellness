import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Foot Reflexology',
  description: 'Foot reflexology in Vancouver. Ancient Chinese pressure point therapy targeting reflex zones to promote healing, reduce stress, and improve circulation. Starting at $42. All sessions include foot soak and shoulder massage.',
  openGraph: { title: 'Foot Reflexology | Zen Wellness Center', description: 'Ancient Chinese foot reflexology in Vancouver. Starting at $42.', images: [{ url: '/images/reflexology.jpg', width: 1200, height: 630 }] },
  alternates: { canonical: '/foot-reflexology' },
}

const benefits = [
  { title: 'Relieve Stress', description: 'Targeted pressure calms the nervous system and promotes deep relaxation.' },
  { title: 'Increase Circulation', description: 'Stimulates blood flow throughout the body, improving oxygen delivery to your organs.' },
  { title: 'Detoxify', description: 'Supports your body\'s natural detox pathways by activating the lymphatic system.' },
  { title: 'Relieve Pain', description: 'Eases aching muscles and chronic tension by addressing reflex zones connected to the source.' },
  { title: 'Restore Balance', description: 'Reawakens energy and brings your body back into equilibrium.' },
]

const prices = [
  { time: '30 min', price: '$42' },
  { time: '50 min', price: '$58' },
  { time: '60 min', price: '$68' },
  { time: '75 min', price: '$85' },
  { time: '90 min', price: '$102' },
]

export default function FootReflexologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Foot Reflexology', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Zen Wellness Center' }, description: 'Ancient Chinese pressure point massage targeting reflex zones for healing and relaxation.', areaServed: 'Vancouver, BC', offers: [{ '@type': 'Offer', name: '30 Minutes', price: '42', priceCurrency: 'CAD' }, { '@type': 'Offer', name: '50 Minutes', price: '58', priceCurrency: 'CAD' }, { '@type': 'Offer', name: '60 Minutes', price: '68', priceCurrency: 'CAD' }, { '@type': 'Offer', name: '75 Minutes', price: '85', priceCurrency: 'CAD' }, { '@type': 'Offer', name: '90 Minutes', price: '102', priceCurrency: 'CAD' }] }) }} />

      <Hero title="Foot Reflexology" subtitle="Ancient Chinese pressure point massage for deep relaxation and whole-body healing." compact />

      {/* Big Statement */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 leading-snug">
            Your feet hold the map to your entire body. Pressure applied to specific reflex zones can relieve tension, restore energy, and promote healing from head to toe.
          </p>
        </div>
      </section>

      {/* How It Works + Image */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-4">The Practice</p>
              <h2 className="heading-section mb-6">How Reflexology Works</h2>
              <div className="accent-line mb-8" />
              <p className="prose-zen mb-6">
                Reflexology is an ancient Chinese healing practice based on the principle that specific points on the feet correspond to every organ and system in the body. By applying precise pressure to these reflex zones, we can stimulate energy meridians and promote natural healing.
              </p>
              <p className="prose-zen">
                Through careful hand and finger techniques, your therapist relieves tension, supports optimal body function, and improves circulation — creating a sense of balanced, reawakened energy that extends far beyond your feet.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="relative overflow-hidden border border-cream-200">
                <Image
                  src="/images/foot-reflexology.jpg"
                  alt="Foot reflexology chart showing pressure points and corresponding organs"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-sand-300/10 border-y border-sand-300/20">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="font-display text-2xl md:text-3xl font-light text-stone-900">
            Every session includes a <span className="text-sand-400">warm foot soak</span> and a complimentary <span className="text-sand-400">shoulder massage</span>.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-12 md:mb-20">
            <p className="eyebrow mb-4">Benefits</p>
            <h2 className="heading-section">What Reflexology Can Do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {benefits.map((b, i) => (
              <div key={b.title} className={`p-8 md:p-10 border-b border-cream-200 ${
                i % 3 !== 2 ? 'lg:border-r' : ''
              } ${i % 2 === 0 && i < 4 ? 'sm:border-r lg:border-r-0' : 'sm:border-r-0'} ${
                i < 3 ? '' : 'lg:border-b-0'
              } ${i % 3 !== 2 ? 'lg:border-r' : ''}`}>
                <span className="font-display text-4xl font-light text-sand-300">0{i + 1}</span>
                <h3 className="font-display text-xl md:text-2xl font-light text-stone-900 mt-3 mb-4">{b.title}</h3>
                <p className="prose-zen">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-stone-900 text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="eyebrow !text-stone-500 mb-4">Pricing</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6">Choose Your Session</h2>
              <div className="accent-line mb-8" />
              <p className="text-stone-400 text-lg md:text-xl leading-relaxed font-light mb-8">
                Whether you need a quick reset or a full deep session, every reflexology treatment includes a warm foot soak and complementary shoulder massage.
              </p>
              <p className="text-stone-500 font-light">
                Walk-ins welcome. Call ahead to guarantee your preferred time.
              </p>
            </div>
            <div>
              <div className="space-y-0">
                {prices.map((p) => (
                  <div key={p.time} className="flex justify-between items-baseline border-b border-white/10 py-5 md:py-6">
                    <span className="text-stone-400 text-lg">{p.time}</span>
                    <span className="font-display text-2xl md:text-3xl font-light text-sand-300">{p.price}</span>
                  </div>
                ))}
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
