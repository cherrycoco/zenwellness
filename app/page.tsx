import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'

const services = [
  {
    title: 'Massage',
    description: 'Swedish, deep tissue, sports medicinal, and prenatal massage — clinical, outcome-based treatments tailored to your needs.',
    image: '/images/massage1.jpg',
    href: '/massage',
    number: '01',
  },
  {
    title: 'Acupuncture',
    description: 'Traditional Chinese acupuncture combined with acupressure and natural herbal remedies. Covered by most extended healthcare plans.',
    image: '/images/acupuncture2.jpg',
    href: '/acupuncture',
    number: '02',
  },
  {
    title: 'Foot Reflexology',
    description: 'Ancient pressure point therapy targeting reflex zones that correspond to organs in the body. Includes foot soak and shoulder massage.',
    image: '/images/reflexology.jpg',
    href: '/foot-reflexology',
    number: '03',
  },
]

const testimonials = [
  {
    name: 'Artemisa Bega',
    source: 'Google',
    quote: "These people are the nicest I've met in the universe, the massage was amazing. Intense but slow enough to let me cope with the pain. Wonderful. Low prices too.",
    avatar: '/images/review2.jpg',
  },
  {
    name: 'Lily Y.',
    source: 'Yelp',
    quote: "I came here for a massage but found a great doctor named Stanley and his exclusive herbs. My sciatic pain and frozen shoulders were cured after about 5 times!",
    avatar: '/images/review1.jpg',
  },
  {
    name: 'Jordan M.',
    source: 'Yelp',
    quote: "One of the best massages that my fiancée and I have EVER gotten. Prices are reasonable too. HIGHLY recommend.",
    avatar: '/images/review3.jpg',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HealthAndBeautyBusiness',
            name: 'Zen Wellness Center',
            description: "Vancouver's premier wellness center rooted in Traditional Chinese Medicine. Massage, acupuncture, and foot reflexology.",
            url: 'https://zenwellnesscenter.com',
            telephone: '+1-604-428-0896',
            email: 'zenwellness@outlook.com',
            address: { '@type': 'PostalAddress', streetAddress: '736 West 16th Ave.', addressLocality: 'Vancouver', addressRegion: 'BC', addressCountry: 'CA' },
            openingHours: 'Mo-Su 10:00-21:00',
            priceRange: '$$',
            image: 'https://zenwellnesscenter.com/images/spa-background12.jpg',
            sameAs: ['https://www.facebook.com/zenwellnessvancouver/', 'https://www.yelp.ca/biz/zen-wellness-center-vancouver'],
          }),
        }}
      />

      {/* Hero */}
      <Hero
        title="Healing Rooted in Tradition"
        subtitle="Expert massage, acupuncture, and foot reflexology grounded in Traditional Chinese Medicine. Serving Vancouver for over 10 years."
        showCTA
      />

      {/* Trust Bar */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-display text-2xl md:text-3xl font-light text-sand-300">10+</p>
            <p className="text-stone-400 text-xs tracking-wider uppercase mt-1">Years Experience</p>
          </div>
          <div>
            <p className="font-display text-2xl md:text-3xl font-light text-sand-300">7</p>
            <p className="text-stone-400 text-xs tracking-wider uppercase mt-1">Days a Week</p>
          </div>
          <div>
            <p className="font-display text-2xl md:text-3xl font-light text-sand-300">TCM</p>
            <p className="text-stone-400 text-xs tracking-wider uppercase mt-1">Foundation</p>
          </div>
          <div>
            <p className="font-display text-2xl md:text-3xl font-light text-sand-300">KORU</p>
            <p className="text-stone-400 text-xs tracking-wider uppercase mt-1">Chinese Herbs</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl mb-12 md:mb-20">
            <p className="eyebrow mb-4">Our Treatments</p>
            <h2 className="heading-section mb-6">Rooted in Chinese Medicine</h2>
            <div className="accent-line mb-6" />
            <p className="prose-zen">Every treatment at Zen is grounded in Traditional Chinese Medicine principles — treating the root cause, not just the symptoms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream-200">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group block bg-cream-50 p-6 md:p-10 h-full">
                <div className="img-zoom mb-6 md:mb-8 aspect-[4/3]">
                  <div className="relative w-full h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <span className="text-sand-300 font-display text-4xl md:text-5xl font-light">{service.number}</span>
                <h3 className="font-display text-2xl md:text-3xl font-light text-stone-900 mt-2 mb-3">
                  {service.title}
                </h3>
                <p className="prose-zen mb-6">{service.description}</p>
                <span className="btn-ghost">
                  Learn More
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KORU Herbs Feature */}
      <section className="bg-stone-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[300px] lg:min-h-[600px]">
            <Image
              src="/images/spa-background9.jpg"
              alt="Traditional Chinese herbal medicine"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex items-center px-6 md:px-10 lg:px-20 py-16 lg:py-0">
            <div className="max-w-lg">
              <p className="eyebrow text-stone-500 mb-4">What Sets Us Apart</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                KORU Herbs
              </h2>
              <div className="accent-line mb-6" />
              <p className="text-stone-400 leading-relaxed mb-4 font-light">
                Our signature KORU herbs are 100% natural Traditional Chinese herbal formulations applied topically during massage to accelerate healing, reduce inflammation, and relieve deep muscle and joint pain.
              </p>
              <p className="text-stone-400 leading-relaxed mb-8 font-light">
                Developed by our founder Stanley through years of study in Traditional Chinese Medicine, KORU therapy is exclusive to Zen Wellness Center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/koru" className="btn-ghost !text-sand-300 hover:!text-white">
                  Learn About KORU
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Image Break */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image src="/images/spa-background12.jpg" alt="" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <p className="font-display text-2xl md:text-4xl lg:text-6xl font-light text-white text-center leading-tight max-w-3xl">
            Where ancient wisdom meets modern wellness
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <p className="eyebrow mb-4">Testimonials</p>
            <h2 className="heading-section">Kind words</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream-200">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-cream-50 p-6 md:p-12 h-full flex flex-col">
                <svg className="w-8 h-8 text-sand-300 mb-6 md:mb-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="prose-zen italic flex-1 mb-6 md:mb-8">
                  {t.quote}
                </blockquote>
                <div className="flex items-center gap-4 pt-6 border-t border-cream-200">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-stone-900">{t.name}</p>
                    <p className="text-xs text-stone-400">{t.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-cream-100 border-t border-cream-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-light text-stone-900 mb-4">Book Your Appointment</h2>
            <p className="prose-zen max-w-xl mx-auto">Walk-ins welcome. For guaranteed availability, call ahead or email us.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="tel:604-428-0896" className="btn-primary text-center">Call (604) 428-0896</a>
            <a href="mailto:zenwellness@outlook.com" className="btn-outline text-center">Email Us</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="eyebrow mb-3">Location</p>
              <p className="font-display text-xl text-stone-900">736 West 16th Ave</p>
              <p className="text-stone-500 text-base mt-1">Vancouver, BC</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Hours</p>
              <p className="font-display text-xl text-stone-900">10am &ndash; 9pm</p>
              <p className="text-stone-500 text-base mt-1">Every day</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Insurance</p>
              <p className="font-display text-xl text-stone-900">Acupuncture</p>
              <p className="text-stone-500 text-base mt-1">Covered by most plans</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
