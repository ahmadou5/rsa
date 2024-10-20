'use client'
import React, { useState, useEffect } from 'react';
import { TrendingUp, ChevronDown } from 'lucide-react';
import { Globe, Truck, BarChart, XIcon, Leaf, ChartCandlestickIcon, ShieldCheck, User, AlignJustify, Settings2Icon, HandshakeIcon, Users,  } from 'lucide-react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import CofounderVideos from './Founders';

// Simulated 3D rotating product showcase
const Product3DShowcase = () => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] w-full flex items-center justify-center">
      <div className="absolute transform" style={{ transform: `perspective(1000px) rotateY(${rotation}deg)` }}>
        <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg shadow-xl flex items-center justify-center text-white text-xl font-bold">
          Premium Products
        </div>
      </div>
    </div>
  );
};
const ServicesSection = () => {
  const services = [
    
    { icon: Truck, title: "Import & Export", description: "Imports of various kinds of Agricultural consumables, and General Merchandise" },
    { icon: Settings2Icon, title: "Management", description: "Rendering of Technical Agricultural and management services to our various clients" },
    { icon: ChartCandlestickIcon, title: "Marketing", description: "Marketing and Distribution of mainly Agricultural commoditty within the country and beyond" },
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
    <section id="services" className="py-20 mt-[50px]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
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
              className="bg-white/60 bg-opacity-90  rounded-2xl p-8 hover:bg-opacity-70 transition-colors"
            >
              <service.icon  className='mb-2 text-black h-10 w-10'/>
              
              <h3 className="text-xl text-green-700/90 font-light mb-4">{service.title}</h3>
              <p className="text-black/60">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



// Team member card component
const TeamMember = ({ name, role, image }:{name:string, role:string , image: string}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={name} className="w-full h-[auto] object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

// Main App component
export default function NewApp() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className=" w-full min-h-screen bg-gray-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="lg:text-2xl text-xl font-bold text-black">RSA Nigeria Limited</h1>
          <div className="lg:flex hidden gap-6">
            {['Home','Contact'].map(item => (
              <button key={item} className="text-gray-600 hover:text-blue-600">{item}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 mt-[50px]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-[76%] lg:mt-[100px] mt-3 ml-auto mr-auto py-12 lg:h-[480px]">
            <h1 className="lg:text-6xl lg:flex hidden w-[99%] text-xl font-bold text-gray-900 mb-6">
              Empowering Global Agricultural Trade, Feeding the World
            </h1>
            <h1 className=" lg:hidden flex text-[24px] w-[99%] mt-5  font-bold text-gray-900 mb-6">
             Empowering Global Agricultural Trade, Feeding the World
            </h1>
            <p className="lg:text-2xl text-sm w-[89%] mt-8 text-gray-600 mb-8">
             Your trusted partner in international agribusiness,  connecting farmers to global markets with quality and trust. exports of sesame, groundnuts, and hibiscus flowers.
            </p>
            <div className="flex gap-4 items-center mt-[70ecting farmers to global markets with quality and trustpx] justify-center">
              <button className="bg-green-700/40 text-black/60 px-6 lg:py-3 py-2 w-[200px] rounded-3xl hover:bg-green-700/20 transition">Explore</button>
             
            </div>
          </div>
          
        </div>
      </section>
      {/*** services  */}
      <ServicesSection />
      {/* Company Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Company Profile</h2>
          <div className="mb-6">
            <div className="flex justify-center space-x-4">
              {['about', 'mission', 'vision', 'services'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-md ${activeTab === tab ? 'bg-green-600/90 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-transparent p-2">
            {activeTab === 'about' && (
              <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.1 }}
              className="bg-green-700/15 bg-opacity-90 lg:w-[50%] ml-auto mr-auto lg:h-[280px]  rounded-2xl shadow-md p-8 hover:bg-opacity-70 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4">About RSA NIG LTD</h3>
                <p>Established in 2010, GlobalSeeds has been at the forefront of agricultural exports, 
                   specializing in premium quality sesame seeds, groundnuts, and hibiscus flowers. 
                   Our commitment to excellence has made us a trusted partner for businesses worldwide.</p>
              </motion.div>
            )}
            {activeTab === 'mission' && (
               <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 2 * 0.1 }}
               className="bg-green-700/15 bg-opacity-90 lg:w-[50%] ml-auto mr-auto lg:h-[280px]  rounded-2xl shadow-md p-8 hover:bg-opacity-70 transition-colors"
               >
                 <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                 <p>To connect global markets with high-quality agricultural products while supporting 
                 sustainable farming practices and empowering local communities.</p>
               </motion.div>
              
            )}
            {activeTab === 'vision' && (
              <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 * 0.1 }}
              className="bg-green-700/15 bg-opacity-90 lg:w-[50%] ml-auto mr-auto lg:h-[280px]  rounded-2xl shadow-md p-8 hover:bg-opacity-70 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p>To become the worlds leading agricultural export company, known for quality, 
                sustainability, and innovation in global food supply chains.</p>
              </motion.div>
              
            )}
            {activeTab === 'services' && (
               <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 2 * 0.1 }}
               className="bg-green-700/15 bg-opacity-90 lg:w-[50%] ml-auto mr-auto lg:h-[280px]  rounded-2xl shadow-md p-8 hover:bg-opacity-70 transition-colors"
               >
                 <h3 className="text-xl font-semibold mb-4">Services</h3>
                 <ul className="list-disc pl-6">
                  <li>Quality Excellence</li>
                  <li>Sustainability</li>
                  <li>Farmer Partnerships</li>
                  <li>Innovation</li>
                </ul>
               </motion.div>
              
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember image={'/assets/ceo2.jpeg'} name="Rabiu Abubakar Tumfafi" role="CEO" />
            
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Sesame Seeds', 'Groundnuts', 'Hibiscus Flowers'].map(product => (
              <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/api/placeholder/400/300" alt={product} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product}</h3>
                  <p className="text-gray-600 mb-4">Premium quality {product.toLowerCase()} sourced from the finest farms.</p>
                  <button className="bg-green-600/75 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CofounderVideos />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RSA NIG LTD</h3>
              <p>Your trusted partner in agricultural Products.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home','Contact'].map(item => (
                  <li key={item}><a href="#" className="hover:text-blue-400">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p>Email: contact@rsa.com</p>
              <p>Phone: +234 8174082307</p>
              <p>Address: Zoo road Kano, Nigeria</p>
            </div>
           {/**<div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Social media icons would go here
              </div> 
            </div> */} 
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 Rabs & Sons. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}