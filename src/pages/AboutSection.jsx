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
                I have two goals in life. The first is to do things for good. The second is to service my local community.
              </p>
              <p>
                These two things are non-negotiables in the righteous life. Interestingly enough, they can be (trivially) achieved regardless of social status, income level, or external successes. Many people prioritise other material gains in a way that overshadows this moral code, or do not prioritise this moral code.
              </p>
              <p>The content above can be summed up by this Aristotelian quote:</p>

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
                When I was around 15, I wanted to be a maths researcher. I loved reading up on pure mathematics, specialising in number theory and algebra. But then all that abstraction with homological algebra and automorphic forms and whatnot made me lose touch with the world. Although this was very fun, very day working with said maths felt like I was tinkering with an entangled system of cogs, strings, and screws in a contemporary art exhibit — while I did get the bigger picture, not everyone comes to truly appreciate abstract art even if they've worked with it for a while.<sup id="fnref-1">
                  <a href="#fn-1" className="hover:underline text-body">
                    1
                  </a>
                </sup>
              </p>

              <p>Two years passed. I wrote a book on adelic <a href="https://www.wikiwand.com/en/articles/Class_field_theory" className="underline">class field theory</a> which somewhat diminished my love for pure maths. I proceeded to study economics at undergraduate level.</p>

              <p>Why economics? Firstly we must understand the reasons for why people would be averse towards economics degrees at large. In recent years academic economics has been largely adherent to neoclassical economics and rational economic behaviour. In intermediate micro and macro courses students are given problem sets of a purely mathematical nature by which students use mechanical tools to work through a series of mental gymnastics. Most curriculums do not teach about ecological crises, geopolitics and colonialism, nor teach how to rid these rigid pedagogies and develop independent modes of thought. I agree that economics should not solely be modified algebra and calculus. </p>

              <p>Economics, when correctly taught, is grounded in solving problems and challenging the status quo. I try to make political philosophy and climate policy tied in with economics. I am a strong advocate of econometrics and quanitative economics to bolster the positions held by these applications of economics.</p>

              <p>Some models are useful. In quantitative finance, Black-Scholes is never used as a pricing model in practice but is useful as a reference in comparing the price of options using an analytic formula with clear-cut assumptions and flaws.<sup id="fnref-1">
                  <a href="#fn-2" className="hover:underline text-body">
                    2
                  </a>
                </sup> It is also useful for traders as they navigate these flaws and adjust their risk exposures accordingly. “Better” option pricing models are, by and large, propelled by Black-Scholes. A similar analogy can be made for economics models.</p>

              <p className="text-xl font-semibold text-left text-foreground">Two questions I receive a lot:</p>
              <ol className="list-decimal list-outside space-x-4 marker:pr-8 space-y-2 pl-4">
                <li>“Why do you study economics if you’re more proficient in mathematics?”</li>
                <li>“Why did you choose an economics degree if you’re heading for quant?”</li>
              </ol>
              <p className="text-foreground font-semibold">My responses:</p>

              <ol className="list-decimal list-outside space-x-4 marker:pr-8 space-y-2 pl-4">
                <li> It’s what I enjoy studying. It keeps me connected and aware with the world around me. It compels me to be largely abreast of global events and to know the reasons and rationales behind them. While abstract, it is often not abstract for abstraction’s sake. </li>
                <li> Economics is a largely quantitative discipline. I personally know some economics majors working in large quant firms. By “large quant firms” I probably mean the one(s) you’re thinking of right now. They probably wouldn’t be very fond of how that question is worded.
                </li>
              </ol>
              <p>When I’m not working or studying, I’m usually performing, producing, arranging, or composing music, watching a movie, or writing this blog. I also hike, climb, and swim, and do about a million random side quests.</p>

              <p className="text-xl font-semibold text-left text-foreground"> Two truths and one lie</p>

              <ol className="list-decimal list-outside space-x-4 marker:pr-8 space-y-2 pl-4">
                <li>I used to catch creeps on the internet as a kid</li>
                <li>I’ve seen 3 Laufey concerts #performativemale</li>
                <li>I’ve chatted with <a href="https://www.wikiwand.com/en/articles/Terence_Tao" className="underline">Terence Tao</a></li>
              </ol>
            </div>
          </div>

          <div className="w-20 h-1 bg-primary/30 mx-auto mb-8 rounded-full"></div>

          {/* Footnotes */}
          <div className="text-sm text-body mt-6 text-left">
            <h4 className="font-medium">Footnotes</h4>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li id="fn-1">
                An interesting piece of abstract art is Robert Ryman's <a href="https://www.centrepompidou.fr/en/ressources/oeuvre/yJJQZOL" className="underline hover:text-primary"><i>Untitled Triptych</i></a>, housed in the Centre Pompidou in Paris. 
                It contains three panels of white placed side by side. Perhaps this piece of art serves as an inapt analogy as my analogy with art intended to expose the abstract complexities of maths. But this is nevertheless an intriguing piece of artwork to bring up when someone asks you "what is art?".
              </li>
              <li id="fn-2">
                Traders usually use Black-Scholes as a "reference point" by first computing implied volatility and using that to guide them on how to quote on different strike prices. Thinking in implied volatility terms is, in most cases, better than thinking in option premium terms as the nature of options are inherently priced into Black-Scholes. Some of my blog posts discuss Black-Scholes in greater detail.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
