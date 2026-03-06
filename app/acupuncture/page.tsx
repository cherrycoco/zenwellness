import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Acupuncture',
  description: 'Traditional Chinese acupuncture in Vancouver. Combining needles, acupressure massage, and natural Chinese herbs to treat symptoms and root causes. Covered by most extended healthcare plans. Initial assessment $132.',
  openGraph: { title: 'Acupuncture | Zen Wellness Center', description: 'Traditional Chinese acupuncture in Vancouver. Covered by most healthcare plans.', images: [{ url: '/images/acupuncture1.jpg', width: 1200, height: 630 }] },
  alternates: { canonical: '/acupuncture' },
}

const benefits = [
  { title: 'Pain Relief', description: 'Stimulates the release of endorphins, your body\'s natural painkillers.' },
  { title: 'Increased Energy', description: 'Restores the smooth flow of Qi through your body\'s meridians.' },
  { title: 'Improved Mood', description: 'Balances the nervous system to reduce anxiety and promote calm.' },
  { title: 'Better Function', description: 'Supports your body\'s natural ability to heal and regulate itself.' },
]

const faqs = [
  { q: 'Does acupuncture hurt?', a: 'Acupuncture is a gentle treatment. Most patients find sessions relaxing with minimal discomfort. The needles are very fine — as thin as a hair — making them virtually painless upon insertion.' },
  { q: 'Does acupuncture actually work?', a: 'Yes. Acupuncture is an effective treatment for pain, stimulating the release of endorphins. It decreases inflammation, increases circulation, and provides lasting relief from pain. It can treat people of all ages.' },
  { q: 'Are the needles sterile?', a: 'Absolutely. We use single-use, sterile disposable needles. Every needle is opened fresh for your treatment and safely discarded after.' },
  { q: 'Is it covered by insurance?', a: 'Many insurance plans cover acupuncture. Contact your provider directly. It may also be covered for workplace injuries (WorkSafeBC) or motor vehicle accident claims (ICBC).' },
]

const prices = [
  { label: '30 min', price: '$60' },
  { label: '60 min', price: '$113' },
  { label: '75 min', price: '$140' },
  { label: '90 min', price: '$170' },
]

export default function AcupuncturePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Acupuncture', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Zen Wellness Center' }, description: 'Traditional Chinese acupuncture combining needles, acupressure massage, and natural herbs.', areaServed: 'Vancouver, BC', offers: [{ '@type': 'Offer', name: 'Initial Assessment & Treatment', price: '132', priceCurrency: 'CAD' }, { '@type': 'Offer', name: 'Subsequent Treatment — 30 min', price: '60', priceCurrency: 'CAD' }, { '@type': 'Offer', name: 'Subsequent Treatment — 60 min', price: '113', priceCurrency: 'CAD' }, { '@type': 'Offer', name: 'Subsequent Treatment — 75 min', price: '140', priceCurrency: 'CAD' }, { '@type': 'Offer', name: 'Subsequent Treatment — 90 min', price: '170', priceCurrency: 'CAD' }] }) }} />

      <Hero title="Acupuncture" subtitle="Traditional Chinese acupuncture to restore balance, relieve pain, and promote healing." compact />

      {/* Insurance Banner */}
      <div className="bg-olive-400/10 border-b border-olive-400/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 text-center">
          <p className="text-base text-stone-700">
            <span className="font-medium">Covered by most extended healthcare plans.</span> Contact your insurance provider for details.
          </p>
        </div>
      </div>

      {/* Big Statement */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-b border-cream-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 leading-snug">
            We don&apos;t just treat symptoms — we find and address the root cause. Needles, acupressure massage, and 100% natural Chinese herbs, combined.
          </p>
        </div>
      </section>

      {/* How It Works + Image */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-4">How It Works</p>
              <h2 className="heading-section mb-6">Restoring the Flow of Qi</h2>
              <div className="accent-line mb-8" />
              <p className="prose-zen mb-6">
                In Traditional Chinese Medicine, health depends on the smooth flow of Qi energy through the body&apos;s meridians. When this flow is disrupted — by injury, stress, or illness — pain and dysfunction follow.
              </p>
              <p className="prose-zen mb-8">
                Acupuncture restores this flow. Fine needles placed at precise points stimulate your body&apos;s natural healing response, while acupressure massage and topical herbs amplify the effect.
              </p>
              <Link href="/koru" className="btn-ghost group">
                Enhance with KORU Herbs
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/acupuncture2.jpg" alt="Acupuncture treatment at Zen Wellness" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-cream-100 border-y border-cream-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-12 md:mb-20">
            <p className="eyebrow mb-4">Therapeutic Effects</p>
            <h2 className="heading-section">What Acupuncture Can Do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {benefits.map((b, i) => (
              <div key={b.title} className={`p-8 md:p-10 ${i < 3 ? 'lg:border-r border-cream-200' : ''} ${i < 2 ? 'sm:border-b lg:border-b-0 border-cream-200' : ''} ${i === 2 ? 'sm:border-b lg:border-b-0 border-cream-200' : ''}`}>
                <h3 className="font-display text-xl md:text-2xl font-light text-stone-900 mb-4">{b.title}</h3>
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
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6">Investment in Your Health</h2>
              <div className="accent-line mb-8" />
              <p className="text-stone-400 text-lg md:text-xl leading-relaxed font-light mb-6">
                Your first visit includes a full assessment so Stanley can understand your condition and create a treatment plan tailored to you.
              </p>
              <div className="border border-olive-400/30 bg-olive-400/5 p-6">
                <p className="text-olive-400 font-medium mb-1">Insurance Coverage</p>
                <p className="text-stone-400 font-light">Covered by most extended healthcare plans, WorkSafeBC, and ICBC.</p>
              </div>
            </div>
            <div>
              <div className="border-b border-white/10 pb-6 mb-6">
                <p className="text-stone-500 text-base mb-2">Initial Assessment & Treatment</p>
                <p className="font-display text-4xl md:text-5xl font-light text-sand-300">$132</p>
              </div>
              <p className="text-stone-500 text-base mb-4">Subsequent Treatments</p>
              <div className="space-y-0">
                {prices.map((p) => (
                  <div key={p.label} className="flex justify-between items-baseline border-b border-white/10 py-5">
                    <span className="text-stone-400 text-lg">{p.label}</span>
                    <span className="font-display text-2xl md:text-3xl font-light text-sand-300">{p.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a href="tel:604-428-0896" className="btn-primary bg-white !text-stone-900 hover:bg-cream-100 text-center flex-1">Call to Book</a>
                <a href="mailto:zenwellness@outlook.com" className="btn-outline !border-white/30 !text-white text-center hover:!bg-white hover:!text-stone-900 flex-1">Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="eyebrow mb-4">Common Questions</p>
            <h2 className="heading-section">What to Expect</h2>
          </div>
          <div className="space-y-0">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-cream-200">
                <summary className="py-6 md:py-7 cursor-pointer flex items-center justify-between text-stone-900 font-display text-xl md:text-2xl font-light">
                  {faq.q}
                  <svg className="w-5 h-5 text-stone-400 group-open:rotate-45 transition-transform duration-300 flex-shrink-0 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="pb-6 md:pb-7 prose-zen max-w-2xl">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
