
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

// Mock blog post data
const blogPosts = [
  {
    id: '1',
    title: '7 Tips for Better Fuel Efficiency',
    excerpt: 'Learn how to make your fuel last longer with these practical tips from our mechanics and automotive experts.',
    content: `<p class="mb-4">One of the biggest expenses for vehicle owners is fuel. Whether you own a car, truck, or motorcycle, implementing these fuel efficiency tips can help you save money and reduce your environmental impact.</p>
              <h2 class="text-xl font-bold mt-8 mb-4">1. Maintain Proper Tire Pressure</h2>
              <p class="mb-4">Underinflated tires create more rolling resistance, which means your engine has to work harder. Check your tire pressure monthly and before long trips. The recommended pressure for your vehicle can be found in the owner's manual or on a sticker inside the driver's door.</p>
              <h2 class="text-xl font-bold mt-8 mb-4">2. Drive at Moderate Speeds</h2>
              <p class="mb-4">Fuel economy typically decreases rapidly at speeds above 80 km/h. Use cruise control on highways to maintain a constant speed, and avoid unnecessary acceleration and braking which waste fuel.</p>
              <h2 class="text-xl font-bold mt-8 mb-4">3. Remove Excess Weight</h2>
              <p class="mb-4">Every extra kilogram in your vehicle requires more fuel to move it. Clean out your trunk, cargo areas, and passenger compartments regularly.</p>
              <h2 class="text-xl font-bold mt-8 mb-4">4. Use the Recommended Motor Oil</h2>
              <p class="mb-4">Using the manufacturer's recommended grade of motor oil can improve fuel economy by 1-2%. Look for motor oil labeled as "Energy Conserving" which contains friction-reducing additives.</p>
              <h2 class="text-xl font-bold mt-8 mb-4">5. Plan and Combine Trips</h2>
              <p class="mb-4">Several short trips taken from a cold start can use twice as much fuel as a longer, multipurpose trip. Plan your routes to avoid backtracking and combine errands into one trip.</p>
              <h2 class="text-xl font-bold mt-8 mb-4">6. Avoid Excessive Idling</h2>
              <p class="mb-4">Modern engines don't need to be warmed up, even in cold weather. If you'll be stopped for more than 60 seconds (except in traffic), turn off your engine to save fuel.</p>
              <h2 class="text-xl font-bold mt-8 mb-4">7. Keep Your Engine Properly Tuned</h2>
              <p class="mb-4">Regular maintenance like changing air filters, spark plugs, and keeping the engine tuned can significantly improve your fuel efficiency. A well-maintained engine can improve mileage by up to 4%.</p>
              <p class="mt-8 italic">By following these tips, you can improve your fuel efficiency, save money, and reduce your environmental impact. Our Fuel&Wheels subscription plans also include regular maintenance to help keep your vehicle running at peak efficiency.</p>`,
    image: 'fuel-efficiency.jpg',
    category: 'Fuel',
    author: 'John Adebayo',
    authorRole: 'Senior Mechanic',
    date: 'April 5, 2025',
    readTime: '5 min read',
    slug: 'fuel-efficiency',
    tags: ['Fuel', 'Savings', 'Efficiency']
  },
  {
    id: '2',
    title: 'Essential Car Maintenance During Rainy Season',
    excerpt: 'Protect your vehicle during Nigeria\'s rainy season with these maintenance tips from our expert technicians.',
    content: `<p class="mb-4">Nigeria's rainy season can be tough on vehicles. From flooded roads to increased humidity, the elements can take a toll on your car's performance and lifespan. Here are essential maintenance tips to keep your vehicle in top condition.</p>
              <h2 class="text-xl font-bold mt-8 mb-4">1. Check Your Tires</h2>
              <p class="mb-4">Good tire tread is crucial for maintaining traction on wet roads. Check your tire pressure and tread depth regularly. If your tires are worn, consider replacing them before the heavy rains begin.</p>
              <h2 class="text-xl font-bold mt-8 mb-4">2. Inspect Wiper Blades</h2>
              <p class="mb-4">Visibility is critical during rainstorms. Replace worn wiper blades and make sure your windshield washer fluid is filled. Consider applying a rain repellent treatment to your windshield.</p>
              <h2 class="text-xl font-bold mt-8 mb-4">3. Check Your Brakes</h2>
              <p class="mb-4">Wet conditions mean your brakes need to be in optimal condition. Have your brake pads, rotors, and fluid checked before the rainy season begins.</p>
              <h2 class="text-xl font-bold mt-8 mb-4">4. Protect Against Rust</h2>
              <p class="mb-4">Increased moisture can accelerate rust formation. Wash your car regularly, especially the undercarriage, and consider applying a protective wax coating before the rainy season.</p>
              <h2 class="text-xl font-bold mt-8 mb-4">5. Check Your Battery</h2>
              <p class="mb-4">Humidity can affect battery performance. Have your battery tested and replace it if necessary. Clean terminals to ensure good connections.</p>
              <p class="mt-8 italic">With these preparations, your vehicle will be better equipped to handle Nigeria's rainy season. Remember that our mobile service can come to your location for many of these maintenance tasks.</p>`,
    image: 'car-maintenance.jpg',
    category: 'Maintenance',
    author: 'Chioma Nwosu',
    authorRole: 'Automotive Specialist',
    date: 'April 2, 2025',
    readTime: '7 min read',
    slug: 'car-maintenance',
    tags: ['Maintenance', 'Rainy Season', 'Tips']
  },
  // Include the rest of the blog posts from earlier
];

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the blog post that matches the slug
  const post = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [slug]);

  // If post not found, show a message
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
        <Button onClick={() => navigate('/blog')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blog')} 
              className="text-white/80 hover:text-white mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
            
            <div className="flex items-center text-sm text-white/80 mb-4">
              <Link 
                to="/blog" 
                className="hover:text-white transition-colors"
              >
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span>{post.category}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">{post.author}</div>
                  <div className="text-sm text-white/80">{post.authorRole}</div>
                </div>
              </div>
              
              <div className="h-6 border-l border-white/20"></div>
              
              <div className="flex items-center text-white/80">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              
              <div className="h-6 border-l border-white/20"></div>
              
              <div className="flex items-center text-white/80">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Blog Post Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <div className="h-96 bg-gray-200 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            </div>
          </motion.div>
          
          {/* Blog Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-12 flex items-center flex-wrap gap-2">
                  <Tag className="h-5 w-5 text-gray-400" />
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {/* Share */}
              <div className="mt-12 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share this article
                </h3>
                <div className="flex space-x-3">
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Facebook className="h-5 w-5 text-blue-600" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Twitter className="h-5 w-5 text-sky-500" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Linkedin className="h-5 w-5 text-blue-700" />
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Sidebar */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                <div className="space-y-6">
                  {blogPosts
                    .filter(relatedPost => 
                      relatedPost.id !== post.id && 
                      (relatedPost.category === post.category || 
                       relatedPost.tags.some(tag => post.tags.includes(tag)))
                    )
                    .slice(0, 3)
                    .map(relatedPost => (
                      <div key={relatedPost.id} className="group">
                        <Link to={`/blog/${relatedPost.slug}`} className="block">
                          <div className="h-32 bg-gray-200 rounded-lg mb-2"></div>
                          <h4 className="font-medium group-hover:text-brand-blue transition-colors">
                            {relatedPost.title}
                          </h4>
                          <div className="text-sm text-gray-500 mt-1">
                            {relatedPost.date}
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
                
                <div className="mt-10 bg-brand-blue/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Need Our Services?</h3>
                  <p className="text-gray-600 mb-4">
                    Book a fuel delivery or car service right to your doorstep.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full">
                      Order Fuel
                    </Button>
                    <Button variant="outline" className="w-full">
                      Book Service
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
