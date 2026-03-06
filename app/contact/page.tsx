import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Zen Wellness Center at 736 West 16th Ave, Vancouver, BC. Call (604) 428-0896 or email zenwellness@outlook.com. Open Mon-Sun 10am-9pm. Walk-ins welcome.',
  openGraph: { title: 'Contact Us | Zen Wellness Center', description: 'Book your appointment at Zen Wellness Center Vancouver.', images: [{ url: '/images/location.jpg', width: 1200, height: 630 }] },
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <Hero title="Contact Us" subtitle="Walk-ins welcome. Call ahead to guarantee your preferred time." compact />

      <section className="py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Info */}
            <div className="lg:col-span-5">
              <div>
                <p className="eyebrow mb-4">Get in Touch</p>
                <h2 className="heading-section mb-6">Visit us</h2>
                <div className="accent-line mb-8 md:mb-12" />

                {/* Quick Book */}
                <div className="bg-cream-100 p-6 md:p-8 mb-8 md:mb-10">
                  <p className="font-display text-xl text-stone-900 mb-3">Book an Appointment</p>
                  <p className="text-sm text-stone-500 mb-4">Walk-ins welcome. Call ahead for guaranteed availability.</p>
                  <div className="flex flex-col gap-3">
                    <a href="tel:604-428-0896" className="btn-primary text-center">Call (604) 428-0896</a>
                    <a href="mailto:zenwellness@outlook.com" className="btn-outline text-center">Email Us</a>
                  </div>
                </div>

                <div className="space-y-8 md:space-y-10">
                  <div>
                    <p className="text-xs font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">Location</p>
                    <address className="not-italic font-display text-lg md:text-xl text-stone-900 leading-relaxed">
                      736 West 16th Ave.<br />
                      Vancouver, BC Canada
                    </address>
                  </div>

                  <div>
                    <p className="text-xs font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">Hours</p>
                    <p className="text-stone-700">Monday &ndash; Sunday</p>
                    <p className="font-display text-lg md:text-xl text-stone-900">10:00 AM &ndash; 9:00 PM</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">Email</p>
                    <a href="mailto:zenwellness@outlook.com" className="text-stone-700 hover-line">zenwellness@outlook.com</a>
                  </div>

                  <div className="pt-4 border-t border-cream-200">
                    <p className="text-xs font-medium tracking-[0.2em] uppercase text-stone-400 mb-4">Follow Us</p>
                    <div className="flex gap-5">
                      <a href="https://www.facebook.com/zenwellnessvancouver/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-stone-400 hover:text-stone-900 transition-colors">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                      </a>
                      <a href="https://www.yelp.ca/biz/zen-wellness-center-vancouver" target="_blank" rel="noopener noreferrer" aria-label="Yelp" className="text-stone-400 hover:text-stone-900 transition-colors">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.271 10.563c-.093.186-.296.297-.512.297h-.003c-.218-.001-.42-.115-.51-.303L7.635 3.2c-.138-.288-.063-.558.082-.707.131-.135.39-.253.71-.187l5.424 1.148c.277.058.483.258.523.507.04.248-.094.493-.346.63l-1.757.93zm-1.082 2.594c-.1.182-.31.286-.527.278l-6.29-.257c-.31-.014-.532-.15-.608-.329-.08-.187-.003-.441.228-.614l4.196-3.152c.241-.181.56-.196.81-.037.25.158.37.45.304.74l-1.113 3.371zm1.747 1.509c-.013.21-.134.395-.322.485l-5.656 2.7c-.293.14-.565.093-.726-.038-.168-.136-.268-.4-.168-.713l1.786-5.337c.091-.272.327-.448.602-.448.274 0 .512.173.605.444l1.879 4.907zm2.308-.136c.155.145.186.347.115.542l-2.018 5.44c-.113.303-.33.453-.528.453h-.004c-.2-.002-.418-.157-.523-.465l-1.878-5.513c-.079-.233.002-.488.204-.646.203-.158.483-.172.701-.035l3.931 2.224zm.894-2.194c.203.141.296.39.237.634l-.003.014c-.06.243-.253.42-.492.452l-6.326.85c-.31.042-.555-.075-.65-.246-.098-.176-.067-.44.137-.64l3.708-3.61c.21-.204.518-.243.776-.098.258.145.405.415.377.706l-.764-.062z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-7">
              <div className="h-[400px] md:h-[500px] lg:h-full lg:min-h-[500px] border border-cream-200">
                <iframe
                  title="Zen Wellness Center Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.7!2d-123.1235!3d49.2577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673e97ce952eb%3A0xb256c6c2698e64a2!2sZen+Wellness+Center!5e0!3m2!1sen!2sca!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
