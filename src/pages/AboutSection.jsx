import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-40 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Get to know{" "}
          <span className="font-bold text-primary underline decoration-primary/60 decoration-4 underline-offset-2">
            me
          </span>
        </h2>
        <div className="w-20 h-1 bg-primary/30 mx-auto mb-8 rounded-full"></div>

        {/* Intro paragraph */}
        <p className="justify-center flex text-xl pb-8 text-body">
          I'm a sophomore studying economics in London with quantitative
          interests in econometrics and quant finance. I'm also an algo trader
          and quant developer specialising in ML and statistical arbitrage who
          likes building nice web apps. I write recreationally on a wide range
          of topics and have written 2 maths textbooks.
        </p>

        {/* Introduction */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-left">Introduction</h3>
          <div className="flex flex-col sm:flex-row gap-4 pb-10 text-body">
            <div className="text-left space-y-3">
              <p>
                I have two goals in life. The first is to do things for good.
                The second is to service my local community.
              </p>
              <p>
                These two things are non-negotiables in the righteous life.
                Interestingly enough, they can be (trivially) achieved
                regardless of social status, income level, or external
                successes. Many people prioritise other material gains in a way
                that overshadows this moral code, or do not prioritise this
                moral code.
              </p>
              <p>The content above seeks to outline this Aristotelian quote:</p>

              {/* Quote box */}
              <div className="border-l-4 border-primary/70 pl-4 text-body">
                <div className="text-lg">
                  The good of man is a working of the <i>soul</i> in the way of{" "}
                  <i>excellence</i> in a complete life.
                </div>
                <div className="text-base">
                  - Aristotle, <i>The Nicomachean Ethics</i>
                </div>
              </div>

              <p>Didactic lecture over. Now a bit about myself:</p>
              <p>
                When I was around 15, I wanted to be a maths researcher. I loved
                reading up on pure mathematics, specialising in number theory
                and algebra. But then all that abstraction with homological
                algebra and automorphic forms and whatnot made me lose touch
                with the world. Although this was very fun, very day working with said maths felt like I was tinkering with an
                entangled system of cogs, strings, and screws — while I did get
                the bigger picture, not everyone comes to truly appreciate
                abstract art.<sup id="fnref-1">
                  <a href="#fn-1" className="hover:underline text-body">
                    1
                  </a>
                </sup>
              </p>
            </div>
          </div>

          <div className="w-20 h-1 bg-primary/30 mx-auto mb-8 rounded-full"></div>

          {/* Footnotes */}
          <div className="text-sm text-body mt-6 text-left">
            <h4 className="font-medium">Footnotes</h4>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li id="fn-1">
                An interesting piece of abstract art is Robert Ryman's <a href="https://www.centrepompidou.fr/en/ressources/oeuvre/yJJQZOL" className="underline hover:text-primary"><i>Untitled Triptych</i></a>, housed in the Centre Pompidou in Paris. 
                It contains three panels of white placed side by side. Perhaps this is an inapt analogy as the analogy with art intended to expose the abstract complexities 
                of maths.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
