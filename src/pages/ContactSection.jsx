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

  return(
    <section id="contact" className="py-40 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary"> touch </span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> hi </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> 
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">{""} contacts</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 border-2 border-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email </h4>
                  <a href="mailto:ethanchoi422@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    email
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 border-2 border-primary/20">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone </h4>
                  <a href="tel:+447444292973" className="text-muted-foreground hover:text-primary transition-colors">
                    phone
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-primary/20">
                    <div className="p-3 rounded-full bg-blue-100 border-2 border-blue-200 flex-shrink-0">
                        <i className="fas fa-map-marker-alt text-blue-600 text-xl"></i>
                    </div>
                    <div className="flex flex-col content-start">
                        <h4 className="font-medium text-gray-700 mb-1 text-left">{" "} Location</h4>
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-left">
                            London
                        </a>
                    </div>
                </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4"> find me </h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/ethan-choi-524664254/" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>  

          <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
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
          </div>

        </div>
      </div>

    </section>
  )
}