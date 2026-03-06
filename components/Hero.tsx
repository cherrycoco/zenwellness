import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  image?: string
  title: string
  subtitle?: string
  showCTA?: boolean
  compact?: boolean
}

export default function Hero({ image, title, subtitle, showCTA = false, compact = false }: HeroProps) {
  if (compact) {
    const hasImage = !!image
    return (
      <section className={`relative flex items-center justify-center overflow-hidden ${
        hasImage
          ? 'h-[45vh] min-h-[320px] md:min-h-[400px]'
          : 'bg-cream-50 py-28 md:py-36'
      }`}>
        {hasImage && (
          <>
            <Image
              src={image}
              alt=""
              fill
              className="object-cover scale-105"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        )}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className={`w-12 h-px mx-auto mb-6 ${hasImage ? 'bg-sand-300' : 'bg-sand-300'}`} />
          <h1 className={`font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.05] ${
            hasImage ? 'text-white' : 'text-stone-900'
          }`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-6 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto ${
              hasImage ? 'text-white/60' : 'text-stone-400'
            }`}>
              {subtitle}
            </p>
          )}
          {!subtitle && <div className={`w-12 h-px mx-auto mt-6 ${hasImage ? 'bg-sand-300' : 'bg-sand-300'}`} />}
        </div>
      </section>
    )
  }

  // Homepage — clean typographic hero, no photo
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream-50 overflow-hidden px-6">
      <div className="max-w-5xl mx-auto text-center py-32 md:py-40">
        <p className="eyebrow mb-6 md:mb-8">Zen Wellness Center &middot; Vancouver</p>
        <h1 className="font-display font-light text-stone-900 text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 md:mt-10 text-stone-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        )}
        {showCTA && (
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:604-428-0896" className="btn-primary">
              Book Appointment
            </a>
            <Link href="/massage" className="btn-outline">
              View Treatments
            </Link>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-stone-500 text-xs tracking-[0.25em] uppercase font-medium">Scroll</span>
        <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
