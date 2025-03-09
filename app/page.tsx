import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Phone, Mail, Instagram, Facebook, Star, ChevronRight, CheckCircle } from "lucide-react"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dra. Ana Belén Arias',
  description: 'Especialista en Dermatología Médico-Quirúrgica y Estética',
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-serif font-bold text-[#c18c8c]">Dra. Ana Belén Arias</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium text-[#8c6c6c] hover:text-[#c18c8c]">
              Sobre mí
            </Link>
            <Link href="#treatments" className="text-sm font-medium text-[#8c6c6c] hover:text-[#c18c8c]">
              Tratamientos
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-[#8c6c6c] hover:text-[#c18c8c]">
              Testimonios
            </Link>
            <Link href="#contact" className="text-sm font-medium text-[#8c6c6c] hover:text-[#c18c8c]">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://wa.me/5493814484195" target="_blank">
              <Button className="bg-[#c18c8c] hover:bg-[#a57878] text-white">Reservar Turno</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="grid md:grid-cols-2">
            <div className="bg-[#f9f3f3] py-12 md:py-24 lg:py-32 flex items-center">
              <div className="container px-4 md:px-6 space-y-6 md:space-y-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#8c6c6c]">
                  Dermatología
                  <br />
                  <span className="text-[#c18c8c]">& Dermoestetica</span>
                </h1>
                <p className="max-w-[600px] text-[#8c6c6c] md:text-lg">
                  Tratamientos personalizados para realzar tu belleza natural y cuidar la salud de tu piel para que luzcas tu mejor versión.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://wa.me/5493814484195" target="_blank">
                    <Button className="bg-[#c18c8c] hover:bg-[#a57878] text-white">Reservar Turno</Button>
                  </Link>
                  <Link href="#treatments">
                    <Button variant="outline" className="border-[#c18c8c] text-[#c18c8c] hover:bg-[#f9f3f3]">
                      Conocer Tratamientos
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-[#c18c8c]">+10</p>
                    <p className="text-sm text-[#8c6c6c]">Años de experiencia</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-[#c18c8c]">+5000</p>
                    <p className="text-sm text-[#8c6c6c]">Pacientes satisfechos</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm md:col-span-1 col-span-2">
                    <p className="text-2xl font-bold text-[#c18c8c]">+20</p>
                    <p className="text-sm text-[#8c6c6c]">Tratamientos especializados</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-auto">
              <Image
                src="/hero.png?height=800&width=600"
                alt="Dra. Ana Belén"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
        <section id="about" className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/about.jpg?height=900&width=450"
                  alt="Dra. Ana Belén en consulta"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-[#f9f3f3] text-[#c18c8c] text-sm font-medium">
                  Sobre mí
                </div>
                <h2 className="text-3xl font-serif font-bold text-[#8c6c6c]">Dra. Ana Belén</h2>
                <p className="text-[#8c6c6c]">
                  Especialista en Dermatología Médico-Quirúrgica y Estética con más de 10 años de experiencia. Mi
                  enfoque combina la ciencia médica con los últimos avances en estética para ofrecer resultados
                  naturales y duraderos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#c18c8c]" />
                    <span className="text-[#8c6c6c]">Licenciada en Medicina y Cirugía</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#c18c8c]" />
                    <span className="text-[#8c6c6c]">Especialista en Dermatología</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#c18c8c]" />
                    <span className="text-[#8c6c6c]">Máster en Medicina Estética</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#c18c8c]" />
                    <span className="text-[#8c6c6c]">Miembro de la Academia Española de Dermatología</span>
                  </li>
                </ul>
                <Button className="bg-[#c18c8c] hover:bg-[#a57878] text-white">Conocer más</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="treatments" className="py-12 md:py-24 bg-[#f9f3f3]">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold text-[#8c6c6c]">Nuestros Tratamientos</h2>
              <p className="max-w-[800px] mx-auto text-[#8c6c6c]">
                Ofrecemos una amplia gama de tratamientos dermatológicos y estéticos personalizados para cada paciente.
              </p>
            </div>
            {/* Rest of the section content */}
          </div>
        </section>
        {/* Additional sections for testimonials and contact */}
      </main>
      <footer className="bg-white py-8 border-t border-[#e5d8d8]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-xl font-serif font-bold text-[#c18c8c]">Dra. Ana Belén</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <Link href="#about" className="text-sm text-[#8c6c6c] hover:text-[#c18c8c]">
                Sobre mí
              </Link>
              <Link href="#treatments" className="text-sm text-[#8c6c6c] hover:text-[#c18c8c]">
                Tratamientos
              </Link>
              <Link href="#testimonials" className="text-sm text-[#8c6c6c] hover:text-[#c18c8c]">
                Testimonios
              </Link>
              <Link href="#contact" className="text-sm text-[#8c6c6c] hover:text-[#c18c8c]">
                Contacto
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-[#e5d8d8] flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-[#a57878] mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Dra. Ana Belén. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-[#a57878] hover:text-[#c18c8c]">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-xs text-[#a57878] hover:text-[#c18c8c]">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
