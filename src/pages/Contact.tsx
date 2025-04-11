
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with react-hook-form and zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  // Form submission handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond shortly.",
    });
    
    // Reset form
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Our team is here to help!
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-brand-blue">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Our friendly team is always ready to assist you with any questions about our fuel delivery
              and car servicing options. Reach out to us through any of the following channels:
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Our Location</h3>
                  <p className="text-gray-600">123 Fuel Avenue, Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone Number</h3>
                  <p className="text-gray-600">+234 800 555 5555</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email Address</h3>
                  <p className="text-gray-600">info@fuelandwheels.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8am - 7pm</p>
                  <p className="text-gray-600">Saturday: 9am - 5pm</p>
                  <p className="text-gray-600">Sunday: Closed (Emergency Service Available)</p>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="mt-10 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Google Maps will be integrated here</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold mb-6 text-brand-blue">Send Us a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+234 800 123 4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="How can we help you?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe your inquiry in detail..."
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Your message will be sent to our customer service team.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
