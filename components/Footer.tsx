import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: '/massage', label: 'Massage' },
  { href: '/acupuncture', label: 'Acupuncture' },
  { href: '/foot-reflexology', label: 'Reflexology' },
  { href: '/koru', label: 'KORU Herbs' },
  { href: '/rates', label: 'Rates' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-stone-900">
      {/* Top CTA Band */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
          <p className="eyebrow text-stone-500 mb-6">Begin Your Journey</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
            Ready to feel your best?
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white text-sm font-medium tracking-wider uppercase transition-all duration-500 hover:bg-white hover:text-stone-900">
            Book an Appointment
          </Link>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="font-display text-3xl font-light text-white">
              Zen
            </Link>
            <p className="mt-4 text-stone-500 text-sm leading-relaxed max-w-xs">
              Wellness center in the heart of Vancouver. Massage, acupuncture, and foot reflexology since 2013.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="eyebrow text-stone-600 mb-6">Navigate</p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-stone-500 text-sm hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="eyebrow text-stone-600 mb-6">Contact</p>
            <address className="not-italic space-y-3 text-stone-500 text-sm">
              <p>736 West 16th Ave.</p>
              <p>Vancouver, BC Canada</p>
              <div className="pt-2">
                <a href="tel:604-428-0896" className="block hover:text-white transition-colors">(604) 428-0896</a>
                <a href="mailto:zenwellness@outlook.com" className="block hover:text-white transition-colors mt-1">zenwellness@outlook.com</a>
              </div>
              <p className="pt-2 text-stone-600">Mon &ndash; Sun, 10am &ndash; 9pm</p>
            </address>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="eyebrow text-stone-600 mb-6">Follow</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/zenwellnessvancouver/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-stone-500 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="https://www.yelp.ca/biz/zen-wellness-center-vancouver" target="_blank" rel="noopener noreferrer" aria-label="Yelp" className="text-stone-500 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.271 10.563c-.093.186-.296.297-.512.297h-.003c-.218-.001-.42-.115-.51-.303L7.635 3.2c-.138-.288-.063-.558.082-.707.131-.135.39-.253.71-.187l5.424 1.148c.277.058.483.258.523.507.04.248-.094.493-.346.63l-1.757.93zm-1.082 2.594c-.1.182-.31.286-.527.278l-6.29-.257c-.31-.014-.532-.15-.608-.329-.08-.187-.003-.441.228-.614l4.196-3.152c.241-.181.56-.196.81-.037.25.158.37.45.304.74l-1.113 3.371zm1.747 1.509c-.013.21-.134.395-.322.485l-5.656 2.7c-.293.14-.565.093-.726-.038-.168-.136-.268-.4-.168-.713l1.786-5.337c.091-.272.327-.448.602-.448.274 0 .512.173.605.444l1.879 4.907zm2.308-.136c.155.145.186.347.115.542l-2.018 5.44c-.113.303-.33.453-.528.453h-.004c-.2-.002-.418-.157-.523-.465l-1.878-5.513c-.079-.233.002-.488.204-.646.203-.158.483-.172.701-.035l3.931 2.224zm.894-2.194c.203.141.296.39.237.634l-.003.014c-.06.243-.253.42-.492.452l-6.326.85c-.31.042-.555-.075-.65-.246-.098-.176-.067-.44.137-.64l3.708-3.61c.21-.204.518-.243.776-.098.258.145.405.415.377.706l-.764-.062z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone-600 text-xs tracking-wider">&copy; {new Date().getFullYear()} Zen Wellness Center</p>
          <p className="text-stone-700 text-xs">Vancouver, BC</p>
        </div>
      </div>
    </footer>
  )
}
