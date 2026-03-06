import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Rates & Pricing',
  description: 'Affordable wellness rates at Zen Wellness Center Vancouver. Massage from $45, foot reflexology from $42, acupuncture from $60. Acupuncture covered by most healthcare plans. Deluxe combo packages available.',
  openGraph: { title: 'Rates & Pricing | Zen Wellness Center', description: 'Affordable massage, acupuncture, and reflexology rates in Vancouver.', images: [{ url: '/images/spa-background12.jpg', width: 1200, height: 630 }] },
  alternates: { canonical: '/rates' },
}

const categories = [
  { title: 'Acupuncture', href: '/acupuncture', note: 'Covered by most extended healthcare plans', items: [{ s: 'Initial Assessment & Treatment', p: '$132' }, { s: 'Subsequent — 30 min', p: '$60' }, { s: 'Subsequent — 60 min', p: '$113' }, { s: 'Subsequent — 75 min', p: '$140' }, { s: 'Subsequent — 90 min', p: '$170' }] },
  { title: 'Massage', href: '/massage', note: 'Add KORU Herbs to any massage — $10', items: [{ s: 'Chair Massage', p: '$1.5/min' }, { s: 'Swedish / Deep Tissue — 30 min', p: '$45' }, { s: 'Swedish / Deep Tissue — 50 min', p: '$68' }, { s: 'Swedish / Deep Tissue — 60 min', p: '$79' }, { s: 'Swedish / Deep Tissue — 75 min', p: '$99' }, { s: 'Swedish / Deep Tissue — 90 min', p: '$118' }] },
  { title: 'Foot Reflexology', href: '/foot-reflexology', note: 'Includes foot soak & shoulder massage', items: [{ s: '30 min', p: '$42' }, { s: '50 min', p: '$58' }, { s: '60 min', p: '$68' }, { s: '75 min', p: '$85' }, { s: '90 min', p: '$102' }] },
]

const combos = [
  { title: 'Combo A', dur: '75 min', desc: '25 min Foot Reflexology & 50 min Body Massage', price: '$88' },
  { title: 'Combo B', dur: '100 min', desc: '50 min Foot Reflexology & 50 min Body Massage', price: '$118' },
  { title: 'Combo C', dur: '125 min', desc: '50 min Foot Reflexology & 75 min Body Massage', price: '$148' },
  { title: 'Combo D', dur: '140 min', desc: '50 min Foot Reflexology & 90 min Body Massage', price: '$168' },
]

export default function RatesPage() {
  return (
    <>
      <Hero title="Rates & Pricing" subtitle="Transparent pricing for all of our treatments." compact />

      <section className="py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl mb-12 md:mb-20">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="heading-section mb-6">Our Rates</h2>
            <div className="accent-line" />
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-cream-200 mb-16 md:mb-24">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-cream-50 p-6 md:p-10 h-full">
                <Link href={cat.href} className="hover-line inline-block mb-6 md:mb-8">
                  <h3 className="font-display text-2xl md:text-3xl font-light text-stone-900">{cat.title}</h3>
                </Link>
                <div className="space-y-3 md:space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.s} className="flex justify-between items-baseline gap-4 border-b border-cream-200 pb-3">
                      <span className="text-stone-500 text-sm">{item.s}</span>
                      <span className="font-display text-lg text-stone-900 whitespace-nowrap">{item.p}</span>
                    </div>
                  ))}
                </div>
                {cat.note && <p className="text-xs text-stone-400 mt-4">{cat.note}</p>}
              </div>
            ))}
          </div>

          {/* Combos */}
          <div className="max-w-2xl mb-10 md:mb-16">
            <p className="eyebrow mb-4">Best Value</p>
            <h3 className="heading-section text-2xl md:text-4xl mb-6">Deluxe Combos</h3>
            <div className="accent-line" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-cream-200">
            {combos.map((c) => (
              <div key={c.title} className="bg-cream-50 p-6 md:p-10 h-full">
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-display text-lg md:text-xl text-stone-900">{c.title}</h4>
                  <span className="font-display text-xl md:text-2xl text-sand-400">{c.price}</span>
                </div>
                <p className="text-xs text-stone-400 tracking-wider uppercase mb-3">{c.dur}</p>
                <p className="prose-zen text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-20 text-center">
            <p className="prose-zen max-w-md mx-auto mb-6">Walk-ins welcome. Call ahead for guaranteed availability.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:604-428-0896" className="btn-primary text-center">Call (604) 428-0896</a>
              <a href="mailto:zenwellness@outlook.com" className="btn-outline text-center">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
