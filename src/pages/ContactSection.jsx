import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for your message",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative z-10 py-40 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Get in <span className="text-primary">touch</span>
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-primary/30 mx-auto mb-8 rounded-full"></div>

        <div className="flex justify-center">
          <div className="text-center w-full max-w-md space-y-6">
            {/* Email */}
            <div className="flex items-start space-x-4 py-4 px-6 bg-card rounded-lg border border-primary/50 w-full transition-colors duration-300 bg-primary/10">
              <div className="p-3 rounded-full border border-primary/50 bg-background hover:bg-primary/10 flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col flex-1 min-w-0 text-left">
                <h4 className="font-medium text-foreground mb-1">Email</h4>
                <a
                  href="mailto:ethanchoi422@gmail.com"
                  className="text-muted-foreground hover:text-blue-600 transition-colors truncate text-body"
                >
                  ethanchoi422@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 py-4 px-6 bg-card rounded-lg border border-primary/50 w-full transition-colors duration-300 bg-primary/10">
              <div className="p-3 rounded-full border border-primary/50 bg-background hover:bg-primary/10 flex-shrink-0">
                <Phone className="h-6 w-6 text-primary " />
              </div>
              <div className="flex flex-col flex-1 min-w-0 text-left">
                <h4 className="font-medium text-foreground mb-1">Phone</h4>
                <a
                  href="tel:+447444292973"
                  className="text-muted-foreground hover:text-blue-600 transition-colors text-body"
                >
                  +44 7444292973
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4 py-4 px-6 bg-card rounded-lg border border-primary/50 w-full transition-colors duration-300 bg-primary/10">
              <div className="p-3 rounded-full border border-primary/50 bg-background hover:bg-primary/10 flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col flex-1 min-w-0 text-left">
                <h4 className="font-medium text-foreground mb-1">Location</h4>
                <p className="text-body">London</p>
              </div>
            </div>

            {/* Divider before socials */}
            <div className="w-24 h-0.5 bg-primary/20 mx-auto my-8"></div>

            {/* Socials */}
            <div>
              <h4 className="font-medium mb-6 text-foreground/80">Socials</h4>
              <div className="flex space-x-6 justify-center">
                <a
                  href="https://www.linkedin.com/in/ethan-choi-524664254/"
                  target="_blank"
                  className="p-3 rounded-full border border-primary/50 bg-card hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="https://x.com/huairuu"
                  target="_blank"
                  className="p-3 rounded-full border border-primary/50 bg-card hover:bg-primary/10 transition-colors"
                >
                  <Twitter className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="https://www.instagram.com/wiruuuu/"
                  target="_blank"
                  className="p-3 rounded-full border border-primary/50 bg-card hover:bg-primary/10 transition-colors"
                >
                  <Instagram className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
