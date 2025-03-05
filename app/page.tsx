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
      {/* Header */}
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
            <Button className="bg-[#c18c8c] hover:bg-[#a57878] text-white">Reservar Cita</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
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
                  <Button className="bg-[#c18c8c] hover:bg-[#a57878] text-white">Reservar Turno</Button>
                  <Button variant="outline" className="border-[#c18c8c] text-[#c18c8c] hover:bg-[#f9f3f3]">
                    Conocer Tratamientos
                  </Button>
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

        {/* About Section */}
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

        {/* Treatments Section */}
        <section id="treatments" className="py-12 md:py-24 bg-[#f9f3f3]">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold text-[#8c6c6c]">Nuestros Tratamientos</h2>
              <p className="max-w-[800px] mx-auto text-[#8c6c6c]">
                Ofrecemos una amplia gama de tratamientos dermatológicos y estéticos personalizados para cada paciente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Tratamiento facial"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#8c6c6c] font-serif">Tratamientos Faciales</CardTitle>
                  <CardDescription className="text-[#a57878]">Rejuvenecimiento y cuidado facial</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-[#8c6c6c]">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Toxina Botulínica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Ácido Hialurónico</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Bioestimuladores</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-[#c18c8c] text-[#c18c8c] hover:bg-[#f9f3f3]">
                    Ver Tratamientos
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Tratamiento corporal"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#8c6c6c] font-serif">Tratamientos Corporales</CardTitle>
                  <CardDescription className="text-[#a57878]">Modelado y rejuvenecimiento corporal</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-[#8c6c6c]">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Hidrolipoclasia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Mesoterapia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Tratamiento de Celulitis</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-[#c18c8c] text-[#c18c8c] hover:bg-[#f9f3f3]">
                    Ver Tratamientos
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Medicina estética"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#8c6c6c] font-serif">Medicina Estética</CardTitle>
                  <CardDescription className="text-[#a57878]">Procedimientos médico-estéticos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-[#8c6c6c]">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Hilos Tensores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Peeling Químico</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Plasma Rico en Plaquetas</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-[#c18c8c] text-[#c18c8c] hover:bg-[#f9f3f3]">
                    Ver Tratamientos
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Dermatología clínica"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#8c6c6c] font-serif">Dermatología Clínica</CardTitle>
                  <CardDescription className="text-[#a57878]">
                    Diagnóstico y tratamiento de afecciones cutáneas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-[#8c6c6c]">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Acné</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Rosácea</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Dermatitis</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-[#c18c8c] text-[#c18c8c] hover:bg-[#f9f3f3]">
                    Ver Tratamientos
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Tecnología láser"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#8c6c6c] font-serif">Tecnología Láser</CardTitle>
                  <CardDescription className="text-[#a57878]">Tratamientos con tecnología avanzada</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-[#8c6c6c]">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Depilación Láser</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Rejuvenecimiento Láser</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Eliminación de Manchas</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-[#c18c8c] text-[#c18c8c] hover:bg-[#f9f3f3]">
                    Ver Tratamientos
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Nutrición y bienestar"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#8c6c6c] font-serif">Nutrición y Bienestar</CardTitle>
                  <CardDescription className="text-[#a57878]">Salud integral para tu piel</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-[#8c6c6c]">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Asesoramiento Nutricional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Suplementación</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#c18c8c]" />
                      <span>Planes Personalizados</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-[#c18c8c] text-[#c18c8c] hover:bg-[#f9f3f3]">
                    Ver Tratamientos
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-[#c18c8c] hover:bg-[#a57878] text-white">Ver todos los tratamientos</Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-serif font-bold text-[#8c6c6c]">Lo que dicen nuestros pacientes</h2>
              <p className="max-w-[800px] mx-auto text-[#8c6c6c]">
                Experiencias reales de pacientes que han confiado en nuestros tratamientos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-[#f9f3f3] border-none">
                <CardHeader>
                  <div className="flex items-center gap-1 text-[#c18c8c]">
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#8c6c6c] mb-4">
                    "La Dra. Ana Belén es excepcional. Su enfoque personalizado y su atención al detalle me han ayudado
                    a mejorar notablemente la apariencia de mi piel. Los resultados son naturales y duraderos."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#c18c8c]"></div>
                    <div>
                      <p className="text-sm font-medium text-[#8c6c6c]">María García</p>
                      <p className="text-xs text-[#a57878]">Tratamiento facial</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#f9f3f3] border-none">
                <CardHeader>
                  <div className="flex items-center gap-1 text-[#c18c8c]">
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#8c6c6c] mb-4">
                    "Después de probar varios tratamientos para el acné, finalmente encontré a la Dra. Ana Belén. Su
                    enfoque integral no solo trató mi piel sino que me ayudó a entender las causas. Estoy muy
                    agradecida."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#c18c8c]"></div>
                    <div>
                      <p className="text-sm font-medium text-[#8c6c6c]">Laura Martínez</p>
                      <p className="text-xs text-[#a57878]">Tratamiento para acné</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#f9f3f3] border-none">
                <CardHeader>
                  <div className="flex items-center gap-1 text-[#c18c8c]">
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                    <Star className="fill-[#c18c8c] h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#8c6c6c] mb-4">
                    "La profesionalidad y el trato cercano de la Dra. Ana Belén me hicieron sentir en confianza desde el
                    primer momento. Los resultados de mi tratamiento corporal superaron mis expectativas."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#c18c8c]"></div>
                    <div>
                      <p className="text-sm font-medium text-[#8c6c6c]">Carlos Rodríguez</p>
                      <p className="text-xs text-[#a57878]">Tratamiento corporal</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 bg-[#f9f3f3]">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-white text-[#c18c8c] text-sm font-medium">
                  Contacto
                </div>
                <h2 className="text-3xl font-serif font-bold text-[#8c6c6c]">Reserva tu consulta</h2>
                <p className="text-[#8c6c6c]">
                  Estamos aquí para ayudarte a conseguir la mejor versión de tu piel. Contáctanos para programar una
                  consulta personalizada.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#c18c8c]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#8c6c6c]">Teléfono</p>
                      <p className="text-[#a57878]">+34 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#c18c8c]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#8c6c6c]">Email</p>
                      <p className="text-[#a57878]">info@draanabelen.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-[#c18c8c]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#8c6c6c]">Dirección</p>
                      <p className="text-[#a57878]">Calle Principal 123, Madrid, España</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#c18c8c]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#8c6c6c]">Horario</p>
                      <p className="text-[#a57878]">Lunes a Viernes: 9:00 - 20:00</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://www.instagram.com/draanabelen/"
                    className="h-10 w-10 rounded-full bg-white flex items-center justify-center"
                  >
                    <Instagram className="h-5 w-5 text-[#c18c8c]" />
                  </Link>
                  <Link href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                    <Facebook className="h-5 w-5 text-[#c18c8c]" />
                  </Link>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-[#8c6c6c]">
                        Nombre
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 border border-[#e5d8d8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c18c8c]"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-[#8c6c6c]">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-[#e5d8d8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c18c8c]"
                        placeholder="Tu email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-[#8c6c6c]">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-3 py-2 border border-[#e5d8d8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c18c8c]"
                      placeholder="Tu teléfono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="treatment" className="text-sm font-medium text-[#8c6c6c]">
                      Tratamiento de interés
                    </label>
                    <select
                      id="treatment"
                      className="w-full px-3 py-2 border border-[#e5d8d8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c18c8c]"
                    >
                      <option value="">Selecciona un tratamiento</option>
                      <option value="facial">Tratamiento Facial</option>
                      <option value="corporal">Tratamiento Corporal</option>
                      <option value="estetica">Medicina Estética</option>
                      <option value="dermatologia">Dermatología Clínica</option>
                      <option value="laser">Tecnología Láser</option>
                      <option value="nutricion">Nutrición y Bienestar</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-[#8c6c6c]">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-[#e5d8d8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c18c8c]"
                      placeholder="Cuéntanos más sobre lo que buscas"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#c18c8c] hover:bg-[#a57878] text-white">Reservar Consulta</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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

