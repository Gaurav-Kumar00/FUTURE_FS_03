'use client';

import { useState, useEffect } from 'react';
import { Award, Users, Globe, Zap, Shield, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for perfection in every product, pushing the boundaries of what\'s possible.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Accessibility',
      description: 'Technology should be for everyone. We design with inclusivity at the forefront.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Impact',
      description: 'Connecting people worldwide and empowering communities through innovation.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Constantly pioneering new technologies that transform how we live and work.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Privacy',
      description: 'Your privacy is fundamental. We design products with privacy built-in from the ground up.'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Environment',
      description: 'Committed to carbon neutrality and protecting the planet for future generations.'
    }
  ];

  const milestones = [
    { year: '1976', event: 'Apple founded in a garage' },
    { year: '1984', event: 'Macintosh revolutionizes computing' },
    { year: '2001', event: 'iPod changes music forever' },
    { year: '2007', event: 'iPhone transforms smartphones' },
    { year: '2010', event: 'iPad creates tablet market' },
    { year: '2015', event: 'Apple Watch pioneers wearables' },
    { year: '2024', event: 'Apple Intelligence debuts' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-16">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-thin text-white mb-8 leading-tight">
            Think
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Different
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
            We believe that technology should empower humanity, spark creativity, and make the impossible possible. 
            Since 1976, we've been dedicated to creating products that change the world.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              The principles that guide everything we do and drive us to create extraordinary experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-blue-400 mb-6 flex justify-center group-hover:text-blue-300 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-slate-400">
              Key moments that shaped the future of technology.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
            
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-2xl font-light text-blue-400 mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-white leading-relaxed">
                        {milestone.event}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2B+', label: 'Active Devices Worldwide' },
              { number: '180+', label: 'Countries and Regions' },
              { number: '165K+', label: 'Employees Globally' },
              { number: '$394B', label: 'Annual Revenue' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-thin text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}