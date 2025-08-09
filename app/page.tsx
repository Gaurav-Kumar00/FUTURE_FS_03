'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Smartphone, Laptop, Watch, Headphones, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Product {
  id: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Simulate loading products from CMS
    setProducts([
      {
        id: '1',
        name: 'iPhone 16 Pro',
        tagline: 'Titanium. So strong. So light. So Pro.',
        price: 'From $999',
        image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'iPhone'
      },
      {
        id: '2',
        name: 'MacBook Pro',
        tagline: 'Mind-blowing. Head-turning.',
        price: 'From $1,599',
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
        category: 'Mac'
      },
      {
        id: '3',
        name: 'Apple Watch Ultra',
        tagline: 'Adventure awaits.',
        price: 'From $799',
        image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Watch'
      },
      {
        id: '4',
        name: 'AirPods Pro',
        tagline: 'Wonderfully wireless.',
        price: 'From $249',
        image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Audio'
      }
    ]);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-white">🍎</div>
              <div className="hidden md:flex space-x-6">
                {['Mac', 'iPhone', 'iPad', 'Watch', 'AirPods', 'Support'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                🔍
              </Button>
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                🛒
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-thin text-white mb-6 leading-tight">
            Think
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-light">
              Different
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light leading-relaxed">
            Revolutionary technology that changes everything.
            <br />
            Experience innovation like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Explore Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Film
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      </section>

      {/* Products Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
              Our Latest
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Discover our most advanced products, designed to push the boundaries of what's possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id}
                className="group bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-400 font-medium mb-2">{product.category}</div>
                    <h3 className="text-2xl font-light text-white mb-2">{product.name}</h3>
                    <p className="text-slate-400 mb-4 text-sm">{product.tagline}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-white">{product.price}</span>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-thin text-white mb-8">
                Innovation
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Redefined
                </span>
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: <Smartphone className="h-8 w-8" />,
                    title: 'Cutting-Edge Design',
                    description: 'Every detail crafted to perfection with premium materials and precise engineering.'
                  },
                  {
                    icon: <Laptop className="h-8 w-8" />,
                    title: 'Powerful Performance',
                    description: 'Revolutionary chips that deliver incredible speed and efficiency for any task.'
                  },
                  {
                    icon: <Watch className="h-8 w-8" />,
                    title: 'Seamless Integration',
                    description: 'All your devices work together seamlessly in the Apple ecosystem.'
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 group cursor-pointer"
                  >
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-slate-800/50 rounded-3xl p-8 backdrop-blur-sm border border-slate-700">
                <img
                  src="https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Innovation showcase"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2B+', label: 'Active Devices' },
              { number: '180+', label: 'Countries' },
              { number: '99%', label: 'Satisfaction' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-thin text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
            Ready to Experience
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              The Future?
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Join millions of users who have already discovered the magic of Apple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 px-12 py-4 text-lg font-medium rounded-full transition-all duration-300"
            >
              Find a Store
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="text-2xl font-bold text-white mb-4">🍎</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Think different. Innovation that matters.
              </p>
            </div>
            
            {[
              {
                title: 'Products',
                links: ['iPhone', 'Mac', 'iPad', 'Apple Watch', 'AirPods']
              },
              {
                title: 'Services',
                links: ['iCloud', 'Apple Music', 'Apple TV+', 'App Store', 'Apple Pay']
              },
              {
                title: 'Support',
                links: ['Contact Us', 'Apple Care', 'System Status', 'Community', 'Developer']
              },
              {
                title: 'Company',
                links: ['About', 'Careers', 'Privacy', 'Legal', 'Newsroom']
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-medium mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2025 Apple Inc. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                  Terms of Use
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                  Sales Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}