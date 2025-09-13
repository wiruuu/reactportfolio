import { ArrowLeft, HeartCrack, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { useState } from "react";

export const WhyIWrite = () => {
  return (
    <section id="whyiwrite" className="relative z-10 py-40 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-primary">Why</span> I write; <span className="text-primary">what</span> I write about
        </h2>

        <div className="flex justify-center items-center">
          
          <div className="w-20 h-1 bg-primary/30 mx-auto mb-8 rounded-full">
          </div>
          
        </div>


        {/* Intro paragraph */}
        <div className="pb-8 text-body text-left space-y-3">
          <p> George Orwell outlines four chief reasons for why he writes, or rather motives that should exist in every writer. They are: </p>

          <ol className="space-y-3">
            <li>1. Sheer egoism. A writer wants to be talked about after his death and to seem clever. They are vain but not too interested in money.</li>
            <li>2. Aesthetic enthusiasm. The gift of writing is to make one’s writing aesthetically good, to have “pleasure in the impact of one sound on another, in the firmness of good prose or the rhythm of a good story."</li>
            <li>3. Historical impulse. To seek true facts and store them up for the use of posterity.</li>
            <li>4. Political purpose. To describe the society that the writer exists in and to fulfill one’s desire of pushing the world in a particular direction. No text is devoid of political bias.</li>

          </ol>
          <p>  Although many of my musings are political and/or topical, my motivations for writing are not to fulfill a political purpose or obligation. Orwell’s doctrine is at most tangential to my motivations.</p>

          <h3 className="text-2xl font-semibold mb-6 mt-6 text-foreground">Why do I write?</h3>
          <ol className="space-y-3">
            <li><p className="mb-4">1. I write because I do. There is a marked je ne sais quoi that compels me to write. Not necessarily because I am experienced in commenting on some academic doctrine or vocational field. I channel my belief that my ideas, regardless of importance, should be stated in some way.</p>

              <p>I believe in constructive freedom of expression, and I believe that soundness of argument alone should not diminish or augment one’s right to speak. I am not a moral absolutist, or at least not in a way that parallels Kant’s deontology. If I debated against Kant’s deontological ethics with Kant himself, Kant could very well devise well-executed responses to all my objections and hold his ground much better than I can. Within the purview of acceptable moral discourse, I don’t believe that my dialectic is in any way less valid to be stated than Kant’s albeit being less justified.</p></li>


            <li><p className="mb-4">2. Intellectual and creative play. To intentionally discuss topics I am not familiar with for the sake of discussion. I write to entertain myself and to record a list of topics that I have read about, and, from said topics, engage in intellectual experimentation.</p>

              <p>A writer is a choreographer. A writer is a creative. I take many stylistic liberties in the way I express myself. In all forms of intellectual argument there are many similarities in which one can choreograph the presentation of their arguments. The first pertains to distinctions, classifications, and articulations; it is often the case that arguments become well strung-out once clear distinctions have been made. Classifying an argument, viewpoint, or response to an objection as being comprised of a few sub-parts also requires some creative liberty, and so do the examples I outline for articulative purposes.</p></li>

          </ol>

          <h3 className="text-2xl font-semibold mb-6 mt-6 text-foreground">What do I write about?</h3>

          <p>The contents of this page seem to imply that I have a predilection for philosophy. This couldn't be further from the truth. My academic concentration is economics. My vocation is finance. However I do love the human sciences, and try to write on a large range of topics. My range is (roughly) covered by the tags which you can classify my blog posts by.</p>
          <p>I tend to write about topics I am unfamiliar with and by such may make inaccuracies or incorrect judgments. Regardless I am by no means an experienced or adept academic writer. Nonetheless I try to write with truth and conviction. Please send all queries to my email, viewable on my <a href="/contact" className="underline hover:text-primary">contact</a> page. </p>

        </div>
        <a href="/blog" className="inline-flex items-center justify-center p-3 rounded-full font-medium bg-primary text-primary-foreground transition-transform duration-300 transform hover:scale-110 active:scale-95; mb-6"> <ArrowLeft />
          </a>
      </div>
    </section>
  );
};
