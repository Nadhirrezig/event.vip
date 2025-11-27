"use client"

import { motion } from "framer-motion"
import { Plane, MapPin, Users, Star, ChevronDown, Phone, Mail, MapPinIcon, Sparkles } from "lucide-react"
import VaporizeTextCycle, { Tag } from "@/src/components/AnimatedHero"
import { NavBar } from "@/src/components/navbar"
import { Button } from "@/src/components/ui/button"
import { Card } from "@/src/components/ui/card"
import DomeGallery from "@/src/components/DomeGallery"

const HERO_SYNONYMS = ["Elevate", "Enhance", "Empower", "Inspire", "Uplift"]
const HERO_VAPOR_FONT = {
  fontFamily: "Inter, sans-serif",
  fontSize: "56px",
  fontWeight: 700,
} as const
const HERO_VAPOR_ANIMATION = {
  vaporizeDuration: 2.8,
  fadeInDuration: 0.9,
  waitDuration: 0.7,
} as const
const HERO_VAPOR_COLOR = "rgba(59, 130, 246, 1)"

export default function Home() {
  const navItems = [
    { name: "Home", url: "#hero", icon: Plane },
    { name: "About", url: "#about", icon: Users },
    { name: "Events", url: "#events", icon: Star },
    { name: "Contact", url: "#contact", icon: Phone },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Navbar */}
      <NavBar items={navItems} />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Premium Corporate Solutions</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl sm:text-7xl font-bold text-balance mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex flex-wrap items-center justify-center gap-3">
              <span className="relative inline-flex w-[240px] h-[80px] sm:w-[280px] sm:h-[96px] max-w-full items-center justify-center">
                <VaporizeTextCycle
                  texts={HERO_SYNONYMS}
                  font={HERO_VAPOR_FONT}
                  color={HERO_VAPOR_COLOR}
                  spread={6}
                  density={4}
                  animation={HERO_VAPOR_ANIMATION}
                  direction="left-to-right"
                  alignment="center"
                  tag={Tag.H1}
                  pauseWhenHidden={false}
                />
              </span>
              <span>Your Corporate Experience</span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium flights, unforgettable vacations, and exceptional corporate events tailored for enterprises that
            demand excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Plan Your Event
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 bg-transparent">
              Learn More
            </Button>
          </motion.div>

        </div>
      </section>
{/* Who Are We Section */}

      {/* Who Are We Section */}
      <section id="about" className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4" />
              About VIP Events
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Who Are We
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              VIP EVENTS is the premium corporate events and travel division of VIP GROUP, dedicated to delivering
              world-class experiences for enterprises.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Excellence in Every Detail
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  With over 15 years of experience in corporate travel and event management, we've earned the trust of
                  Fortune 500 companies and leading enterprises worldwide.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our team of dedicated professionals combines expertise with innovation to create seamless, memorable
                  experiences that leave a lasting impression on your organization.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-1">
                {[
                  {
                    number: "01",
                    label: "Premium Flight Services",
                    desc: "Exclusive partnerships with global airlines",
                    color: "blue"
                  },
                  {
                    number: "02",
                    label: "Curated Destinations",
                    desc: "Handpicked locations for corporate retreats",
                    color: "purple"
                  },
                  {
                    number: "03",
                    label: "Dedicated Support",
                    desc: "24/7 concierge for your events",
                    color: "orange"
                  },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="group relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="relative p-8 cursor-default"
                      whileHover={{ x: 12 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {/* Animated border line */}
                      <motion.div
                        className={`absolute left-0 top-0 bottom-0 w-1 rounded-full origin-top ${
                          feature.color === "blue" ? "bg-gradient-to-b from-blue-500 to-cyan-400" :
                          feature.color === "purple" ? "bg-gradient-to-b from-purple-500 to-pink-400" :
                          "bg-gradient-to-b from-orange-500 to-red-400"
                        }`}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: idx * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      />

                      {/* Hover background */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: feature.color === "blue" 
                            ? "linear-gradient(135deg, rgba(59, 130, 246, 0.03), rgba(6, 182, 212, 0.05))"
                            : feature.color === "purple"
                            ? "linear-gradient(135deg, rgba(168, 85, 247, 0.03), rgba(236, 72, 153, 0.05))"
                            : "linear-gradient(135deg, rgba(249, 115, 22, 0.03), rgba(239, 68, 68, 0.05))"
                        }}
                      />

                      <div className="relative flex items-start gap-6">
                        {/* Large number */}
                        <motion.div
                          className="flex-shrink-0"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, delay: idx * 0.2 + 0.4 }}
                          viewport={{ once: true }}
                        >
                          <span className={`text-6xl font-black tracking-tighter leading-none bg-gradient-to-br bg-clip-text text-transparent ${
                            feature.color === "blue" ? "from-blue-600 to-cyan-500" :
                            feature.color === "purple" ? "from-purple-600 to-pink-500" :
                            "from-orange-600 to-red-500"
                          }`}>
                            {feature.number}
                          </span>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 pt-2">
                          <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                            {feature.label}
                          </h4>
                          <p className="text-slate-600 text-base leading-relaxed">
                            {feature.desc}
                          </p>
                        </div>
                      </div>

                      {/* Decorative dot */}
                      <motion.div
                        className={`absolute -left-1 top-8 w-3 h-3 rounded-full ${
                          feature.color === "blue" ? "bg-blue-500" :
                          feature.color === "purple" ? "bg-purple-500" :
                          "bg-orange-500"
                        }`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.2 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <div className="relative h-[500px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="/luxury-corporate-event-with-professionals.jpg"
                    alt="VIP Events Corporate Excellence"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                  
                  {/* Floating Rating Badge */}
                  <motion.div
                    className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-slate-900">5.0</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">Client Rating</p>
                  </motion.div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl max-w-xs z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</p>
                    <p className="text-sm text-slate-600 font-medium mt-1">Successful Events</p>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Floating background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-40 right-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0], scale: [1.1, 1, 1.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Star className="w-4 h-4" />
              Our Portfolio
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              Premium Events
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our curated collection of world-class corporate experiences
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Executive Retreats",
                description: "Exclusive corporate getaways designed for leadership teams and strategic planning",
                image: "/executive-retreat-luxury-resort.jpg",
                gradient: "from-blue-500 to-cyan-400",
                number: "01"
              },
              {
                title: "Product Launches",
                description: "High-impact events that showcase your brand to stakeholders and media",
                image: "/product-launch-event-stage.jpg",
                gradient: "from-purple-500 to-pink-400",
                number: "02"
              },
              {
                title: "Team Building",
                description: "Memorable experiences that strengthen team bonds and foster collaboration",
                image: "/team-building-adventure-activity.jpg",
                gradient: "from-orange-500 to-red-400",
                number: "03"
              },
            ].map((event, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Card container */}
                  <div className="relative h-full bg-white rounded-3xl overflow-hidden border-2 border-slate-100 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                    {/* Image container */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent`} />
                      
                      {/* Animated number badge */}
                      <motion.div
                        className="absolute top-6 right-6"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: idx * 0.2 + 0.3,
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: true }}
                      >
                        <div className={`relative w-16 h-16 bg-gradient-to-br ${event.gradient} rounded-2xl shadow-xl flex items-center justify-center transform rotate-6 group-hover:rotate-12 transition-transform duration-300`}>
                          <span className="text-white text-2xl font-black">
                            {event.number}
                          </span>
                        </div>
                      </motion.div>

                      {/* Bottom title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {event.title}
                        </h3>
                        <motion.div
                          className={`h-1 bg-gradient-to-r ${event.gradient} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "60%" }}
                          transition={{ duration: 0.8, delay: idx * 0.2 + 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="p-6">
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {event.description}
                      </p>

                      {/* Animated CTA */}
                      <motion.div
                        className="flex items-center gap-2 text-slate-900 font-semibold group/cta cursor-pointer"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span>Explore More</span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>

                    {/* Hover accent line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${event.gradient}`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{ originX: 0 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Floating background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-40 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0], scale: [1.1, 1, 1.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4" />
              Interactive Gallery
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Explore Our Events
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in our collection of premium corporate experiences through our interactive 3D gallery
            </p>
          </motion.div>

          {/* Gallery Container */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-2xl">
              <DomeGallery 
                grayscale={false}
                imageBorderRadius="12px"
                openedImageBorderRadius="20px"
                minRadius={400}
                maxRadius={800}
                fit={0.6}
                overlayBlurColor="rgba(255, 255, 255, 0.8)"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground overflow-hidden relative">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Next Event?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let our expert team create an unforgettable experience for your organization
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8">
              Start Planning Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground/5 border-t border-border py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4 text-primary">VIP EVENTS</h3>
              <p className="text-sm text-muted-foreground">Premium corporate travel and events by VIP GROUP</p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {["Home", "About", "Services", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                {["Flight Services", "Event Planning", "Concierge", "Consulting"].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex gap-2">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@vipevents.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@vipevents.com
                  </a>
                </li>
                <li className="flex gap-2">
                  <MapPinIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Global Headquarters</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">© 2025 VIP EVENTS by VIP GROUP. All rights reserved.</p>
            <div className="flex gap-4">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a key={item} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}
