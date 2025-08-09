'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Product {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  rating: number;
  features: string[];
}

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 16 Pro Max',
    tagline: 'The ultimate iPhone experience',
    price: '$1,199',
    originalPrice: '$1,299',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'iPhone',
    rating: 4.9,
    features: ['A18 Pro chip', 'ProRAW', 'Action Button', '5x Telephoto']
  },
  {
    id: '2',
    name: 'MacBook Pro 16"',
    tagline: 'Supercharged by M3 Max',
    price: '$2,499',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mac',
    rating: 4.8,
    features: ['M3 Max chip', '128GB RAM', 'Liquid Retina XDR', '22-hour battery']
  },
  {
    id: '3',
    name: 'Apple Watch Ultra 2',
    tagline: 'The most rugged and capable',
    price: '$799',
    image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Apple Watch',
    rating: 4.7,
    features: ['Titanium case', '36-hour battery', 'Precision GPS', 'Action Button']
  }
];

export function ProductShowcase() {
  const [currentProduct, setCurrentProduct] = useState(0);

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const product = featuredProducts[currentProduct];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
            Featured
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discover our most advanced and popular products, crafted with precision and innovation.
          </p>
        </div>

        <div className="relative">
          <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Product Image */}
                <div className="relative aspect-square lg:aspect-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>

                {/* Product Details */}
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-thin text-white mb-4">
                    {product.name}
                  </h3>
                  
                  <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-slate-400">({product.rating})</span>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-white font-medium mb-4">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="text-3xl font-light text-white">
                        {product.price}
                      </div>
                      {product.originalPrice && (
                        <div className="text-slate-500 line-through text-lg">
                          {product.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      Buy Now
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-4 rounded-full transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="lg"
            onClick={prevProduct}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-slate-700/50 rounded-full w-12 h-12 p-0"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={nextProduct}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-slate-700/50 rounded-full w-12 h-12 p-0"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProduct(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProduct
                    ? 'bg-blue-400 scale-125'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}