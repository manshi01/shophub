"use client";

import { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Homepage() {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: "Summer Sale 2024",
      subtitle: "Up to 70% off on all categories",
      cta: "Shop Now",
      bg: "bg-gradient-to-r from-blue-600 to-purple-600"
    },
    {
      title: "Free Shipping",
      subtitle: "On orders over $50 worldwide",
      cta: "Learn More",
      bg: "bg-gradient-to-r from-green-600 to-teal-600"
    },
    {
      title: "New Collection",
      subtitle: "Discover the latest trends",
      cta: "Explore",
      bg: "bg-gradient-to-r from-orange-600 to-pink-600"
    }
  ];

  const categories = [
    { name: "Fashion", image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400", items: "2.5k+" },
    { name: "Electronics", image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400", items: "1.8k+" },
    { name: "Home & Garden", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400", items: "3.2k+" },
    { name: "Sports", image: "https://images.pexels.com/photos/2277784/pexels-photo-2277784.jpeg?auto=compress&cs=tinysrgb&w=400", items: "950+" },
    { name: "Books", image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400", items: "5.1k+" },
    { name: "Beauty", image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400", items: "1.3k+" }
  ];

  const products = [
    { id: 1, name: "Wireless Headphones", price: 299, originalPrice: 399, image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.8, reviews: 234 },
    { id: 2, name: "Smart Watch", price: 249, originalPrice: 329, image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.6, reviews: 189 },
    { id: 3, name: "Laptop Stand", price: 89, originalPrice: 129, image: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=400", rating: 4.9, reviews: 156 },
    { id: 4, name: "Coffee Maker", price: 159, originalPrice: 199, image: "https://images.pexels.com/photos/4226805/pexels-photo-4226805.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.7, reviews: 298 }
  ];

  const testimonials = [
    { name: "Sarah Johnson", rating: 5, text: "Amazing quality and fast shipping! I've been shopping here for over a year and never disappointed.", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Mike Chen", rating: 5, text: "Great customer service and competitive prices. The return policy is very fair too.", avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { name: "Emma Davis", rating: 5, text: "Love the variety of products available. Found everything I needed in one place!", avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100" }
  ];

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
           
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-32 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  ShopHub
                </div>
              </div>
            </div>

            
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for products, brands and more..."
                  className="pl-10 pr-4 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

           
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative hover:bg-gray-100">
                <Heart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs bg-red-500">3</Badge>
              </Button>
              <Button variant="ghost" size="icon" className="relative hover:bg-gray-100">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs bg-blue-500">5</Badge>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Banner Carousel */}
      <section className="relative">
        <div className="h-80 overflow-hidden">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentBanner ? 'translate-x-0' : 
                index < currentBanner ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <div className={`h-full ${banner.bg} flex items-center justify-center text-white`}>
                <div className="text-center">
                  <h1 className="text-5xl font-bold mb-4">{banner.title}</h1>
                  <p className="text-xl mb-8 opacity-90">{banner.subtitle}</p>
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8">
                    {banner.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
          onClick={prevBanner}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
          onClick={nextBanner}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentBanner ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentBanner(index)}
            />
          ))}
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-white text-2xl">🔥</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Trending</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-white text-2xl">🆕</span>
              </div>
              <span className="text-sm font-medium text-gray-700">New Arrivals</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-white text-2xl">🎁</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Offers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.items} items</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Recommended for You</h2>
            <Button variant="outline" className="hover:bg-blue-50 hover:border-blue-300">
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-500 text-white">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="secondary" className="w-8 h-8 bg-white/90 hover:bg-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & App Download */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg mb-6 opacity-90">Subscribe to our newsletter for exclusive deals and latest updates.</p>
              <div className="flex max-w-md">
                <Input
                  placeholder="Enter your email"
                  className="bg-white text-gray-900 border-0 rounded-r-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-l-none px-6">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <h3 className="text-2xl font-bold mb-4">📱 Download Our App</h3>
              <p className="mb-6 opacity-90">Get exclusive app-only deals and shop on the go!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Button variant="secondary" className="bg-black text-white hover:bg-gray-800">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
                </Button>
                <Button variant="secondary" className="bg-black text-white hover:bg-gray-800">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="w-32 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                ShopHub
              </div>
              <p className="text-gray-400 mb-4">Your one-stop destination for quality products at unbeatable prices.</p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">📘</Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">🐦</Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">📷</Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">💼</Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}