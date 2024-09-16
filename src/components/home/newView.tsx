import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Globe, Truck, BarChart, Leaf, ShieldCheck, Settings2Icon, HandshakeIcon, Users,  } from 'lucide-react';
import { About } from './About';
import { Hero } from './Hero';
import { Focus } from './Focus';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination } from "swiper/modules";

const LandingPage = () => {
  const { scrollYProgress } = useViewportScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-900 to-black text-white overflow-hidden">
      <motion.div 
        className="fixed inset-0 z-0"
       
      />

      <Header />
      <Hero/>
      <ServicesSection />
      <Focus />
      <GlobalReachSection />
      <TestimonialsSection />
      <About />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md">
    <nav className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">Sambaau</h1>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex space-x-8"
        >
          {['Home', 'Services', 'Global Reach', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-green-400 transition-colors">{item}</a>
            </li>
          ))}
        </motion.ul>
      </div>
    </nav>
  </header>
);

const HeroSection = () => {
  const { scrollYProgress } = useViewportScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacity:any = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
  <section 
  style={{
    backgroundImage: 'url("")', // Replace with a high-quality image of a vast agricultural landscape
    backgroundSize: 'fill',
    backgroundPosition: 'center',
    //y: backgroundY,
    opacity
  }}
  id="home" className="min-h-screen flex items-center justify-center relative">
    <div className="container mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-7xl font-bold mb-6"
      >
        Your trusted partner in Agricultural trade, delivering excellence and profit <span className="text-green-400"></span>
      </motion.h2>
      <div className='lg:w-[60%] mb-20 ml-auto mr-auto w-[90%] mt-16 rounded-full lg:py-1 py-1  lg:text-white/75 lg:px-4 px-2 lg:h-10 lg:bg-black/40'>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-2xl mb-12"
      >
        {`Unlocking the world's agricultural potential, delivering exceptional value and profit`}
      </motion.p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-500 mt-10 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition-colors"
      >
        Explore Our Services
      </motion.button>
    </div>
  </section>
);}

const ServicesSection = () => {
  const services = [
    
    { icon: Truck, title: "Import & Export", description: "Imports of various kinds of Agricultural consumables, and General Merchandise" },
    { icon: Settings2Icon, title: "Management", description: "Rendering of Technical Agricultural and management services to our various clients" },
    { icon: Globe, title: "Marketing", description: "Marketing and Distribution of mainly Agricultural commoditty within the country and beyond" },
    { icon: HandshakeIcon, title: "Contracts", description: "Contracts in Agricultural Engineering, agricultural products supply and technical services to major agricultural companies" },
  ];

  const newService = [
    {
      name: 'import',
      url: './assets/mport.svg',
      height: '200px',
      mt: '60px',
      note: 'Imports of various kinds of Agricultural consumables, and General Merchandise'
  },
  {
      name: 'export',
      url: './assets/xport.svg',
      height: '400px',
      mt: '20px',
      note: 'Exports of mainly Agricultural cash crops like Sesame Seeds, Soya beans, Habiscus Flower and Cessia tora'
  },
  {
      name: 'Marketing',
      url: './assets/xport.svg',
      height: '200px',
      mt: '60px',
      note: 'Marketing and Distribution of mainly Agricultural commoditty within the country and beyond'
  },
  
  {
      name: 'Management',
      url: './assets/xport.svg',
      height: '200px',
      mt: '60px',
      note: 'Rendering of Technical Agricultural and management services to our various clients'
  },
  {
      name: 'Contracts',
      url: './assets/xport.svg',
      height: '200px',
      mt: '60px',
      note: 'Contracts in Agricultural Engineering, agricultural products supply and technical services to major agricultural companies'
  },
  ]

  return (
    <section id="services" className="py-20 bg-green-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-light text-center mb-16"
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-green-900 bg-opacity-90 rounded-2xl p-8 hover:bg-opacity-70 transition-colors"
            >
              <service.icon  className='mb-2 text-emerald-500 h-10 w-10'/>
              
              <h3 className="text-xl font-light mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GlobalReachSection = () => (
  <section id="global-reach" className="py-20 relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6 relative z-10"
    >
      <h2 className="text-3xl md:text-5xl font-light text-center mb-16">Global Reach</h2>
      <div className="bg-black bg-opacity-30 rounded-xl p-5 backdrop-filter backdrop-blur-md">
        <Globe className='w-12 h-12' />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-green-400 mb-2">20+</h3>
            <p className="text-xl">Countries Served</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-400 mb-2">30+</h3>
            <p className="text-xl">Tons Traded</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-400 mb-2">16+</h3>
            <p className="text-xl">Years of Success</p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const TestimonialsSection = () => {
  const testimonials = [
    { name: "John Doe", role: "Farm Owner, USA", quote: "Sambaau's expertise has significantly expanded our market reach." },
    { name: "John Doe", role: "Farm Owner, USA", quote: "Sambaau's expertise has significantly expanded our market reach." },
    { name: "John Doe", role: "Farm Owner, USA", quote: "Sambaau's expertise has significantly expanded our market reach." },
  ];

  return (
    <section className="py-20 bg-green-900 bg-opacity-30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-light text-center mb-16">What Our Clients Say</h2>
        <Swiper 
           slidesPerView={1}
           centeredSlides={true}
           spaceBetween={20}
           pagination={{
             clickable: true,
           }}
           modules={[Navigation]}
           className="mySwiper">
        <div className="grid grid-cols-1 lg:w-[40%] md:grid-cols-3 gap-12">
         
          {testimonials.map((testimonial, index) => (
           
           <SwiperSlide key={index}>
           <motion.div
           key={testimonial.name}
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: index * 0.1 }}
           className="bg-black bg-opacity-50 rounded-lg p-8"
         >
           <p className="text-lg mb-4">{testimonial.quote}</p>
           <p className="font-semibold">{testimonial.name}</p>
           <p className="text-green-400">{testimonial.role}</p>
         </motion.div>
           </SwiperSlide>
       ))}
          
        </div>
        </Swiper>
      </div>
    </section>
  );
};


  
  const TeamSection = () => {
    const team = [
    {
      name: "Sani Umar Giredi",
      image: './assets/team/newqq.jpeg',
      about: 'stuffs happnes in life so just be normal and make them no understand your next move and be mentally normal ohh and dont forget to fuck em all if the fuck with Yhaaaaaa GenZZZZZZZ  ',
      role: 'CEO'
    },
    {
        name: "BabanGida Muhammad",
        image: './assets/team/manager.jpeg',
        about: 'stuffs happnes in life so just be normal and make them no understand your next move and be mentally normal ohh and dont forget to fuck em all if the fuck with Yhaaaaaa GenZZZZZZZ  ',
        role: 'Manager'
    },
    {
        name: "Salisu Abudullahi",
        image: './assets/team/sec.jpeg',
        about: 'stuffs happnes in life so just be normal and make them no understand your next move and be mentally normal ohh and dont forget to fuck em all if the fuck with Yhaaaaaa GenZZZZZZZ  ',
        role: 'Accountant'
    },
    {
        name: "Mansoor Zakariyya",
        image: './assets/team/newsec.jpeg',
        about: 'stuffs happnes in life so just be normal and make them no understand your next move and be mentally normal ohh and dont forget to fuck em all if the fuck with Yhaaaaaa GenZZZZZZZ  ',
        role: 'Secretery'
    },
    ];
  
    return (
      <section id="team" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:text-5xl text-2xl font-extralight text-center mb-20"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-green-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

const ContactSection = () => (
  <section id="contact" className="py-20 bg-black bg-opacity-70">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Contact us
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="lg:text-2xl text-xl  font-light mb-4">Contact Information</h3>
          <p className="mb-2">Email: info@sambaau.com</p>
          <p className="mb-2">Phone: +234 8174082307</p>
          <p className="mb-4">Address: 123 Agri Lane, Global City, 12345</p>
          <div className="flex space-x-4">
            {/* Add social media icons/links here */}
          </div>
        </div>
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 rounded" />
          <textarea placeholder="Your Message" rows={4} className="w-full row-4 p-3 bg-gray-800 rounded"></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500/40 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition-colors"
          >
            Email us
          </motion.button>
        </motion.form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black bg-opacity-90 py-8">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; 2024 Sambaau. All rights reserved.</p>
    </div>
  </footer>
);

export default LandingPage;