'use client';

import { useState } from 'react';
import { Filter, Grid, List, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  isFavorite?: boolean;
  description: string;
}

const allProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 16 Pro',
    price: '$999',
    originalPrice: '$1,099',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'iPhone',
    rating: 4.9,
    isNew: true,
    description: 'The most advanced iPhone with Apple Intelligence'
  },
  {
    id: '2',
    name: 'MacBook Air 15"',
    price: '$1,299',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    category: 'Mac',
    rating: 4.8,
    description: 'Supercharged by M3 chip'
  },
  {
    id: '3',
    name: 'iPad Pro 12.9"',
    price: '$1,099',
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'iPad',
    rating: 4.7,
    description: 'Ultimate iPad experience with M4 chip'
  },
  {
    id: '4',
    name: 'Apple Watch Ultra 2',
    price: '$799',
    image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Apple Watch',
    rating: 4.8,
    description: 'The most rugged and capable Apple Watch'
  },
  {
    id: '5',
    name: 'AirPods Pro 2',
    price: '$249',
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'AirPods',
    rating: 4.6,
    description: 'Wonderfully wireless with adaptive transparency'
  },
  {
    id: '6',
    name: 'Apple TV 4K',
    price: '$179',
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'TV & Home',
    rating: 4.5,
    description: 'Entertainment that puts you at the center of it all'
  }
];

const categories = ['All', 'iPhone', 'Mac', 'iPad', 'Apple Watch', 'AirPods', 'TV & Home'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  const toggleFavorite = (productId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-16">
      {/* Header */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-thin text-white mb-6">
            All Products
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore our complete lineup of innovative products designed to enhance your digital life.
          </p>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'border-slate-600 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-slate-600 rounded-full p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={`rounded-full ${
                    viewMode === 'grid' 
                      ? 'bg-slate-700 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={`rounded-full ${
                    viewMode === 'list' 
                      ? 'bg-slate-700 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700 rounded-full">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id}
                className={`group bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
                  viewMode === 'list' ? 'flex flex-row' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardContent className={`p-0 ${viewMode === 'list' ? 'flex w-full' : ''}`}>
                  <div className={`${
                    viewMode === 'list' 
                      ? 'w-1/3 aspect-square' 
                      : 'aspect-square'
                  } overflow-hidden ${viewMode === 'list' ? 'rounded-l-lg' : 'rounded-t-lg'}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {product.isNew && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        New
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-4 right-4 text-white hover:bg-slate-900/50 rounded-full"
                    >
                      <Heart 
                        className={`h-5 w-5 ${
                          favorites.has(product.id) 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-white'
                        }`} 
                      />
                    </Button>
                  </div>
                  
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-center' : ''}`}>
                    <div className="text-sm text-blue-400 font-medium mb-2">{product.category}</div>
                    <h3 className={`font-light text-white mb-2 ${
                      viewMode === 'list' ? 'text-3xl' : 'text-2xl'
                    }`}>
                      {product.name}
                    </h3>
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">{product.description}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-slate-400 text-sm">({product.rating})</span>
                    </div>
                    
                    <div className={`flex items-center ${
                      viewMode === 'list' ? 'justify-between' : 'justify-between'
                    }`}>
                      <div>
                        <span className="text-lg font-medium text-white">{product.price}</span>
                        {product.originalPrice && (
                          <span className="ml-2 text-slate-500 line-through text-sm">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}