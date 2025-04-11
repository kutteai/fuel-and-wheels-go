
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, User, Search, Tag, ChevronRight } from 'lucide-react';

// Mock blog post data
const blogPosts = [
  {
    id: '1',
    title: '7 Tips for Better Fuel Efficiency',
    excerpt: 'Learn how to make your fuel last longer with these practical tips from our mechanics and automotive experts.',
    content: 'Full article content goes here...',
    image: 'fuel-efficiency.jpg',
    category: 'Fuel',
    author: 'John Adebayo',
    date: 'April 5, 2025',
    readTime: '5 min read',
    slug: 'fuel-efficiency',
    tags: ['Fuel', 'Savings', 'Efficiency']
  },
  {
    id: '2',
    title: 'Essential Car Maintenance During Rainy Season',
    excerpt: 'Protect your vehicle during Nigeria\'s rainy season with these maintenance tips from our expert technicians.',
    content: 'Full article content goes here...',
    image: 'car-maintenance.jpg',
    category: 'Maintenance',
    author: 'Chioma Nwosu',
    date: 'April 2, 2025',
    readTime: '7 min read',
    slug: 'car-maintenance',
    tags: ['Maintenance', 'Rainy Season', 'Tips']
  },
  {
    id: '3',
    title: 'Why Subscription Plans Save Both Time and Money',
    excerpt: 'Discover how our subscription plans can provide convenience while reducing your overall vehicle maintenance costs.',
    content: 'Full article content goes here...',
    image: 'subscription-benefits.jpg',
    category: 'Subscription',
    author: 'Tunde Ibrahim',
    date: 'March 28, 2025',
    readTime: '4 min read',
    slug: 'subscription-benefits',
    tags: ['Subscription', 'Savings', 'Convenience']
  },
  {
    id: '4',
    title: 'Understanding Different Fuel Types: What\'s Right for Your Vehicle',
    excerpt: 'A comprehensive guide to different fuel types available in Nigeria and how to choose the right one for your vehicle.',
    content: 'Full article content goes here...',
    image: 'fuel-types.jpg',
    category: 'Fuel',
    author: 'Funmi Adeleke',
    date: 'March 25, 2025',
    readTime: '6 min read',
    slug: 'fuel-types',
    tags: ['Fuel', 'Education', 'Vehicle Care']
  },
  {
    id: '5',
    title: 'DIY vs Professional Car Wash: Pros and Cons',
    excerpt: 'We explore the advantages and disadvantages of washing your car yourself versus using a professional service.',
    content: 'Full article content goes here...',
    image: 'car-wash.jpg',
    category: 'Maintenance',
    author: 'Emeka Okonkwo',
    date: 'March 20, 2025',
    readTime: '5 min read',
    slug: 'diy-vs-professional',
    tags: ['Car Wash', 'Maintenance', 'DIY']
  },
  {
    id: '6',
    title: 'How Often Should You Change Your Engine Oil?',
    excerpt: 'Our mechanics settle the debate on oil change frequency and what factors affect this important maintenance task.',
    content: 'Full article content goes here...',
    image: 'oil-change.jpg',
    category: 'Maintenance',
    author: 'John Adebayo',
    date: 'March 15, 2025',
    readTime: '8 min read',
    slug: 'oil-change-frequency',
    tags: ['Oil Change', 'Engine', 'Maintenance']
  }
];

// Categories for filtering
const categories = ['All', 'Fuel', 'Maintenance', 'Subscription'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter posts based on active category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Insights, tips, and news about vehicle maintenance and fuel efficiency
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Category Filter */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search articles..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="All" onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-4 w-full">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-brand-blue data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Blog Posts */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-medium text-gray-500">No articles found.</h3>
            <p className="mt-2 text-gray-400">Try adjusting your search or filter.</p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {filteredPosts.map((post) => (
              <motion.article 
                key={post.id}
                variants={fadeIn}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute top-4 left-4 bg-brand-blue text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 hover:text-brand-blue transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-brand-blue/20 rounded-full flex items-center justify-center mr-2">
                        <User className="h-4 w-4 text-brand-blue" />
                      </div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="text-brand-blue hover:text-brand-blue/80 font-medium text-sm flex items-center"
                    >
                      Read More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
                
                {post.tags.length > 0 && (
                  <div className="px-6 py-4 border-t border-gray-100">
                    <div className="flex items-center flex-wrap gap-2">
                      <Tag className="h-4 w-4 text-gray-400" />
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.article>
            ))}
          </motion.div>
        )}
        
        {/* Newsletter */}
        <motion.div 
          className="mt-20 bg-brand-blue text-white p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h3>
            <p className="mb-6 opacity-90">
              Get the latest articles, tips, and promotions delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-brand-blue hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
