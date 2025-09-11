import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { useState } from "react";

export const WhyIWrite = () => {
  return (
    <section id="whyiwrite" className="relative z-10 py-40 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Why I <span className="text-primary">write</span>
        </h2>
        <div className="w-20 h-1 bg-primary/30 mx-auto mb-8 rounded-full"></div>

        {/* Intro paragraph */}
        <p className="justify-center flex text-xl pb-8 text-body">
          WIP
        </p>

      </div>
    </section>
  );
};
