// import { Code, Music, ChartCandlestick, Briefcase } from "lucide-react"

// export const AboutSection = () => {
//   return (
//     <section id="about" className="py-24 px-4 relative">
//       {" "}
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb text-center">
//           a propos de <span className="text-primary"> moi </span>
//         </h2>

//         <div className="grid grid-cols1 md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h3 className="font-semibold text-2xl">coding</h3>
//             <p className="text-muted-foreground">i do backend ml with an interest in neural networks and clustering</p>
//             <p></p>
//             <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
//               <a href="#contact" className="cosmic-button">
//                 {" "}
//                 grape
//               </a>

//             </div>
//           </div>


//           <div className="grid grid-cols-1 gap-6 py-6">
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <ChartCandlestick className="h-6 w-6 text-primary" />
//                 </div>
//               <div className="text-left">
//                 <h3 className="font-semibold text-xl">trading</h3>
//                 <p>i don't give professional financial advice</p>
//               </div>
//               </div>
              
//             </div>
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Music className="h-6 w-6 text-primary" />
//                 </div>
//               <div className="text-left">
//                 <h3 className="font-semibold text-xl">trading</h3>
//                 <p>i don't give professional financial advice</p>
//               </div>
//               </div>

//             </div>
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Briefcase className="h-6 w-6 text-primary" />
//                 </div>
//               <div className="text-left">
//                 <h3 className="font-semibold text-xl">trading</h3>
//                 <p>i don't give professional financial advice</p>
//               </div>
//               </div>

//             </div>
//           </div>
//         </div>

//       </div>

//     </section>
//   )
// }

import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-40 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary"> about me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              kodor
            </h3>

            <p> i do backend ml with an interest in neural networks and clustering </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                grape
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                now
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">trading</h4>
                  <p className="text-muted-foreground">
                    i don't give professional financial advice
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">trading</h4>
                  <p className="text-muted-foreground">
                    i don't give professional financial advice
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">trading</h4>
                  <p className="text-muted-foreground">
                    i don't give professional financial advice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// import { useState } from 'react';
// import { Code, Music, ChartCandlestick, Briefcase } from "lucide-react";

// export const AboutSection = () => {
//   const [showAbout, setShowAbout] = useState(false);

//   return (
//     <section id="about" className="py-12 px-4 relative">
//       <div className="container mx-auto max-w-5xl text-center">
//         <button 
//           onClick={() => setShowAbout(!showAbout)}
//           className="cosmic-button mx-auto mb-8"
//         >
//           {showAbout ? 'Hide About Me' : 'Show About Me'}
//         </button>

//         {showAbout && (
//           <div className="animate-fade-in">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8">
//               a propos de <span className="text-primary">moi</span>
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               {/* Rest of your about content */}
//               <div className="space-y-6">
//                 <h3 className="font-semibold text-2xl">coding</h3>
//                 <p className="text-muted-foreground">i do backend ml with an interest in neural networks and clustering</p>
//                 <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
//                   <a href="#contact" className="cosmic-button">grape</a>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 gap-6 py-6">
//                 {/* Your cards here */}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };