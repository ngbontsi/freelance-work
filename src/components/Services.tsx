import { useEffect, useRef } from 'react'
import {
  Globe,
  ShoppingCart,
  LayoutDashboard,
  CalendarCheck,
  Server,
  CodeXml,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Full-Stack Web Apps',
    description:
      'End-to-end applications with React frontends and Spring Boot backends — built for performance and scale.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description:
      'Custom online stores with product management, carts, checkout flows, and payment integration.',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboards',
    description:
      'Internal management panels with role-based access, analytics, and real-time data monitoring.',
  },
  {
    icon: CalendarCheck,
    title: 'Booking Systems',
    description:
      'Reservation platforms for guesthouses, restaurants, and service businesses with real-time availability.',
  },
  {
    icon: Server,
    title: 'REST APIs & Microservices',
    description:
      'Scalable backend architectures with API gateways, authentication, and database-per-service patterns.',
  },
  {
    icon: CodeXml,
    title: 'Custom Development',
    description:
      'Tailored solutions for unique business needs — from automation tools to data pipelines.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )

    const els = sectionRef.current?.querySelectorAll('.fade-in-up')
    els?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in-up text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            What I Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From concept to deployment — I build software that helps businesses grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="fade-in-up group p-6 rounded-2xl border border-dark-500 bg-dark-800/50 hover:border-accent/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="fade-in-up mt-16 text-center p-8 rounded-2xl border border-dark-500 bg-dark-800/30">
          <p className="text-gray-400 mb-4">
            Looking for something not listed? I'm always open to discussing custom projects.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-200"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
