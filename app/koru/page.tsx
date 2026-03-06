import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'KORU Herbs',
  description: 'KORU Herbs — an exclusive Traditional Chinese herbal formulation rooted in ancient Miao medicine. Applied topically during massage to break up blockages, reduce inflammation, and accelerate deep healing. Only at Zen Wellness Center Vancouver.',
  openGraph: { title: 'KORU Herbs | Zen Wellness Center', description: 'Ancient Miao herbal wisdom perfected by Traditional Chinese Medicine. Exclusive to Zen Wellness Center.', images: [{ url: '/images/spa-background9.jpg', width: 1200, height: 630 }] },
  alternates: { canonical: '/koru' },
}

const conditions = [
  'Chronic back and neck pain',
  'Frozen shoulder',
  'Sciatic nerve pain',
  'Sports injuries',
  'Joint stiffness and arthritis',
  'Muscle spasms and tension',
  'Ligament and tendon problems',
  'Post-surgery recovery',
]

export default function KoruPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'KORU Herbs', provider: { '@type': 'HealthAndBeautyBusiness', name: 'Zen Wellness Center' }, description: 'Exclusive Traditional Chinese herbal formulation applied topically during massage for deep healing.', areaServed: 'Vancouver, BC', offers: { '@type': 'Offer', name: 'Add KORU Herbs to any massage', price: '10', priceCurrency: 'CAD' } }) }} />

      <Hero title="KORU Herbs" subtitle="An exclusive Traditional Chinese herbal formulation rooted in ancient Miao medicine." compact />

      {/* Origin Story */}
      <section className="py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-4">The Origin</p>
              <h2 className="heading-section mb-6">Born from Nature</h2>
              <div className="accent-line mb-6" />
              <p className="prose-zen mb-4">
                Thousands of years ago in the mountains of southern China, the Miao people observed something remarkable. Wounded animals would seek out specific wild herbs, chew them into a paste, and press them into their injuries. Days later, the wounds would heal.
              </p>
              <p className="prose-zen mb-4">
                The Miao began doing the same — gathering these herbs, preparing them as poultices, and applying them to their own injuries and ailments. Over generations, this practice was refined into one of the oldest known systems of herbal medicine in China, predating even written records of Traditional Chinese Medicine.
              </p>
              <p className="prose-zen">
                This ancient Miao wisdom — healing through the direct, topical application of herbs — is the foundation of KORU.
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-[3/4]">
              <Image
                src="/images/spa-background12.jpg"
                alt="Traditional Chinese herbal medicine"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stanley's Perfection */}
      <section className="bg-stone-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[300px] lg:min-h-[600px]">
            <Image
              src="/images/acupuncture2.jpg"
              alt="Stanley, founder of Zen Wellness Center"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex items-center px-6 md:px-10 lg:px-20 py-16 lg:py-0">
            <div className="max-w-lg">
              <p className="eyebrow text-stone-500 mb-4">Stanley&apos;s Vision</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                Perfected by a Doctor of Chinese Medicine
              </h2>
              <div className="accent-line mb-6" />
              <p className="text-stone-400 leading-relaxed mb-4 font-light">
                Our founder Stanley spent years studying Traditional Chinese Medicine and the ancient herbal practices of the Miao people. He saw the extraordinary potential in their approach — medicine applied directly where the body needs it most.
              </p>
              <p className="text-stone-400 leading-relaxed mb-4 font-light">
                Through extensive research and clinical practice, Stanley developed KORU: a proprietary blend of 100% natural Chinese herbs that represents the best of this ancient tradition. Every ingredient is carefully selected for its therapeutic properties and combined in precise proportions.
              </p>
              <p className="text-stone-400 leading-relaxed font-light">
                Since creating KORU, Stanley has used it to successfully treat thousands of patients suffering from chronic pain, sports injuries, frozen shoulders, sciatic pain, and conditions that hadn&apos;t responded to other treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <p className="eyebrow mb-4">The Science</p>
            <h2 className="heading-section mb-6">How KORU Works</h2>
            <div className="accent-line mx-auto mb-6" />
            <p className="prose-zen">
              In Traditional Chinese Medicine, pain and disease often result from blockages — areas where blood, energy, and fluids cannot flow freely. These blockages cause inflammation, stiffness, and chronic discomfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream-200">
            <div className="bg-cream-50 p-6 md:p-10">
              <span className="text-sand-300 font-display text-4xl md:text-5xl font-light">01</span>
              <h3 className="font-display text-xl md:text-2xl font-light text-stone-900 mt-3 mb-4">Penetrates Deep</h3>
              <p className="prose-zen">
                Applied topically during your massage, KORU herbs penetrate beneath the skin into the muscle tissue, joints, and areas of damage that hands alone cannot reach.
              </p>
            </div>
            <div className="bg-cream-50 p-6 md:p-10">
              <span className="text-sand-300 font-display text-4xl md:text-5xl font-light">02</span>
              <h3 className="font-display text-xl md:text-2xl font-light text-stone-900 mt-3 mb-4">Breaks Up Blockages</h3>
              <p className="prose-zen">
                The herbal compounds work to break down blockages into smaller pieces — dissolving the buildup of stagnant blood, fluids, and waste that cause pain and restrict movement.
              </p>
            </div>
            <div className="bg-cream-50 p-6 md:p-10">
              <span className="text-sand-300 font-display text-4xl md:text-5xl font-light">03</span>
              <h3 className="font-display text-xl md:text-2xl font-light text-stone-900 mt-3 mb-4">Restores Flow</h3>
              <p className="prose-zen">
                Once broken down, these fragments are small enough for your body to naturally flush them away — restoring circulation, reducing inflammation, and allowing the body to heal itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions + Pricing */}
      <section className="bg-cream-100 border-t border-cream-200 py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">Conditions Treated</p>
              <h2 className="heading-section mb-6">Who Can Benefit?</h2>
              <div className="accent-line mb-6" />
              <p className="prose-zen mb-8">
                KORU is particularly effective for patients with chronic conditions and persistent pain. Many patients who have tried everything else — physiotherapy, conventional massage, medication — find lasting relief with KORU-enhanced treatments.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {conditions.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-sand-300 flex-shrink-0 mt-2" />
                    <span className="text-base">{c}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base text-stone-400">
                Not sure if KORU is right for you? Call us — Stanley is happy to discuss your condition and recommend the best treatment approach.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="bg-white p-6 md:p-10 border border-cream-200 sticky top-28">
              <p className="eyebrow mb-4">Simple Pricing</p>
              <h3 className="font-display text-2xl font-light text-stone-900 mb-6">Add KORU to Any Massage</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-display text-5xl md:text-6xl font-light text-stone-900">$10</span>
                <span className="text-stone-400 text-sm">added to any massage session</span>
              </div>
              <p className="prose-zen mb-8">
                Simply request KORU herbs when booking or at the start of your session. Stanley or your therapist will apply the herbs to targeted areas during your massage.
              </p>
              <div className="space-y-3">
                <a href="tel:604-428-0896" className="btn-primary w-full text-center">Call (604) 428-0896</a>
                <a href="mailto:zenwellness@outlook.com" className="btn-outline w-full text-center">Email Us</a>
              </div>
              <div className="mt-6 pt-6 border-t border-cream-200">
                <p className="text-xs text-stone-400">
                  Available with all massage types: Swedish, Deep Tissue, Sports Medicinal, and Mother To Be.{' '}
                  <Link href="/massage" className="underline underline-offset-2 hover:text-stone-900">View massage options</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-stone-900 py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-8 h-8 text-sand-300 mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-display text-xl md:text-2xl font-light text-white leading-relaxed italic mb-6">
            I came here for a massage but found a great doctor named Stanley and his exclusive herbs. My sciatic pain and frozen shoulders were cured after about 5 times!
          </blockquote>
          <p className="text-sm font-medium text-sand-300">Lily Y.</p>
          <p className="text-xs text-stone-500">Yelp Review</p>
          <div className="mt-10">
            <a href="tel:604-428-0896" className="btn-outline !border-white/30 !text-white hover:!bg-white hover:!text-stone-900">
              Book Your KORU Session
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
