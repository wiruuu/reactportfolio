import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"

import { cn } from '@/lib/utils';
import {useToast} from '@/hooks/use-toast';
import { useState, useEffect } from "react";

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault()
      setIsSubmitting(true);
      setTimeout(() => {
        toast({
          title: 'message sent',
          description: 'thank you for your message'
        });
        setIsSubmitting(false); 
      }, 1500)
    }

  return (
    <section id="contact" className="py-40 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Get in <span className="text-primary"> touch </span>
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-primary/30 mx-auto mb-8 rounded-full"></div>

        <div className="flex justify-center">
          <div className="text-center">
            <div className="space-y-6 flex flex-col items-center w-full max-w-md mx-auto pb-10">
              
              {/* Email */}
              <div className="flex items-start space-x-4 py-4 pl-4 pr-20 bg-primary/10 rounded-lg border-2 border-primary/50 w-full hover:bg-primary/15 transition-colors duration-300 group">
                <div className="p-3 rounded-full border-1 border-primary/50 bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col flex-1 min-w-0 text-left">
                  <h4 className="font-medium text-gray-700 mb-1">Email</h4>
                  <a href="mailto:ethanchoi422@gmail.com" className="text-gray-500 hover:text-blue-600 transition-colors truncate">
                    ethanchoi422@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 py-4 pl-4 pr-20 bg-primary/10 rounded-lg border-2 border-primary/50 w-full hover:bg-primary/15 transition-colors duration-300 group">
                <div className="p-3 rounded-full border-1 border-primary/50 bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col flex-1 min-w-0 text-left">
                  <h4 className="font-medium text-gray-700 mb-1">Phone</h4>
                  <a href="tel:+447444292973" className="text-gray-500 hover:text-blue-600 transition-colors">
                    +44 7444292973
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4 py-4 pl-4 pr-20 bg-primary/10 rounded-lg border-2 border-primary/50 w-full hover:bg-primary/15 transition-colors duration-300 group">
                <div className="p-3 rounded-full border-1 border-primary/50 bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col flex-1 min-w-0 text-left">
                  <h4 className="font-medium text-gray-700 mb-1">Location</h4>
                  <p className="text-gray-500">
                    London
                  </p>
                </div>
              </div>
            </div>

            {/* Divider before socials */}
            <div className="w-24 h-0.5 bg-primary/20 mx-auto my-8"></div>

            <div className="pt-4">
              <h4 className="font-medium mb-6 text-foreground/80">Socials</h4>
              <div className="flex space-x-6 justify-center">
                <a href="https://www.linkedin.com/in/ethan-choi-524664254/" target="_blank" className="p-3 rounded-full border-1 border-primary/50 bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
                <a href="https://x.com/huairuu" target="_blank" className="p-3 rounded-full border-1 border-primary/50 bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Twitter className="h-6 w-6 text-primary" />
                </a>
                <a href="https://www.instagram.com/wiruuuu/" target="_blank" className="p-3 rounded-full border-1 border-primary/50 bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Instagram className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>  
        </div>

      </div>
    </section>
  )
}

{/* <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-6"> send </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 font-semibold"> {" "}  name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="your name"
                /> 
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 font-semibold"> {" "}  email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="your email"
                /> 
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 font-semibold">  {" "} message</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="your message"
                /> 
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                )}> 
                {isSubmitting ? "Sending..." : "send message"}
                <Send size={16} />

              </button>
            </form>
          </div> */}