"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, Heart, Star, Plus, Minus, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

export default function ProductDetail() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const product = {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    colors: ['Black', 'White', 'Silver', 'Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: "Experience premium audio quality with our latest wireless headphones. Featuring advanced noise cancellation, 30-hour battery life, and premium comfort padding for all-day wear.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge: 5 min = 3 hours",
      "Premium leather padding",
      "Bluetooth 5.0 connectivity",
      "Built-in microphone"
    ]
  };

  const faqs = [
    {
      question: "What's included in the box?",
      answer: "The package includes the headphones, charging cable, carrying case, audio cable, and user manual."
    },
    {
      question: "How long does the battery last?",
      answer: "Up to 30 hours of playback time with ANC off, and 20 hours with ANC on. Quick charge gives you 3 hours of playback in just 5 minutes."
    },
    {
      question: "Are these headphones compatible with all devices?",
      answer: "Yes, they work with any Bluetooth-enabled device including smartphones, tablets, laptops, and gaming consoles."
    },
    {
      question: "What's the warranty period?",
      answer: "We offer a 2-year manufacturer warranty covering defects and malfunctions under normal use."
    }
  ];

  const relatedProducts = [
    { id: 2, name: "Wireless Earbuds Pro", price: 199, image: "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.6 },
    { id: 3, name: "Gaming Headset", price: 149, image: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.7 },
    { id: 4, name: "Studio Monitor Headphones", price: 349, image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.9 },
    { id: 5, name: "Bluetooth Speaker", price: 89, image: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4.5 }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm text-gray-500">
            <span>Home</span> / <span>Electronics</span> / <span>Headphones</span> / <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            {/* Main Image with Zoom */}
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden group">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <ZoomIn className="w-5 h-5" />
              </Button>
              
              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={prevImage}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={nextImage}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentImage ? 'border-blue-500' : 'border-gray-200'
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Video Try-on Placeholder */}
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">🎥 Virtual Try-On Available</h3>
                <p className="text-sm opacity-90 mb-4">See how these headphones look on you with AR technology</p>
                <Button variant="secondary" size="sm">
                  Try Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">In Stock</Badge>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              <Badge className="bg-red-500 text-white">
                Save ${product.originalPrice - product.price}
              </Badge>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Color: {selectedColor}</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-12 h-12 rounded-full border-2 transition-colors ${
                      selectedColor === color ? 'border-blue-500' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Size: {selectedSize}</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-lg transition-colors ${
                      selectedSize === size
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex space-x-3">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700" size="lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600" size="lg">
                <CreditCard className="w-5 h-5 mr-2" />
                Buy Now
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-green-600" />
                <span className="text-sm">Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="w-5 h-5 text-blue-600" />
                <span className="text-sm">30-day return policy</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-purple-600" />
                <span className="text-sm">2-year warranty included</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="faq" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4">
                        <button
                          className="flex items-center justify-between w-full text-left"
                          onClick={() => toggleFaq(index)}
                        >
                          <span className="font-medium">{faq.question}</span>
                          {expandedFaq === index ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                        {expandedFaq === index && (
                          <p className="mt-3 text-gray-600">{faq.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Shipping & Returns</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Shipping Information</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Free standard shipping on orders over $50</li>
                        <li>• Express shipping available for $9.99</li>
                        <li>• Standard delivery: 3-5 business days</li>
                        <li>• Express delivery: 1-2 business days</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2">Return Policy</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• 30-day return window from delivery date</li>
                        <li>• Items must be in original condition</li>
                        <li>• Free return shipping for defective items</li>
                        <li>• Refunds processed within 5-7 business days</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(relatedProduct.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">({relatedProduct.rating})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">${relatedProduct.price}</span>
                      <Button size="sm" variant="outline">
                        View
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