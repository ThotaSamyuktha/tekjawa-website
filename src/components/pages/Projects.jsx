// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Header from '@/components/sections/Header';
// import Footer from '@/components/sections/Footer';

// const projects = [
//   {
//     id: 1,
//     title: 'Completed Projects',
//     image: 'https://res.cloudinary.com/df8xowqdo/image/upload/v1752396257/tekjawa_logo-9_dpx3is.jpg',
//     description:
//       'We have successfully installed solar panels on numerous residential properties, helping homeowners reduce their carbon footprint and save money on their energy bills.',
//   },
//   {
//     id: 2,
//     title: 'Ongoing Projects',
//     image: 'https://res.cloudinary.com/df8xowqdo/image/upload/v1752396781/tekjawa_logo-10_rzm6wm.jpg',
//     description:
//       'We are currently working on a large-scale solar project for a commercial client, designing and installing a solar energy system that will offset a significant portion of their energy consumption.',
//   },
//   {
//     id: 3,
//     title: 'Future Projects',
//     image: 'https://res.cloudinary.com/df8xowqdo/image/upload/v1752397126/tekjawa_logo-11_g9luai.jpg',
//     description:
//       'We have several exciting future projects in the pipeline, including collaborations with local communities to establish community solar programs and expand access to clean energy.',
//   },
// ];

// const Projects = () => {
//   const [fullscreenImage, setFullscreenImage] = useState(null);

//   // ✅ Scroll to top when page loads
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, []);

//   return (
//     <>
//       <Header />

//       <section id="projects" className="bg-gradient-to-b from-orange-50 to-white pt-20">
//         {/* 🎥 Intro Video */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="w-full max-w-7xl mx-auto px-4 pb-10"
//         >
//           <video
//             src="/projects.mp4"
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl"
//           />
//         </motion.div>

//         {/* 🔧 Project Content */}
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold text-orange-600 mb-4">
//             What We’re Building for a Brighter Tomorrow
//           </h2>
//           <p className="text-gray-600 mb-12">
//             Take a look at some of our successful installations
//           </p>

//           {/* 🖼 Project Cards */}
//           <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
//             {projects.map((project) => (
//               <motion.div
//                 key={project.id}
//                 className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-60 object-cover cursor-pointer"
//                   onClick={() => setFullscreenImage(project.image)}
//                 />
//                 <div className="p-6 text-left">
//                   <h3 className="text-xl font-semibold text-orange-600">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm">{project.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* 🔍 Fullscreen Image Viewer */}
//         <AnimatePresence>
//           {fullscreenImage && (
//             <motion.div
//               className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <button
//                 className="absolute top-6 right-6 text-white text-4xl font-bold"
//                 onClick={() => setFullscreenImage(null)}
//               >
//                 &times;
//               </button>
//               <motion.img
//                 src={fullscreenImage}
//                 alt="Zoomed Project"
//                 className="max-w-full max-h-[90vh] rounded-lg"
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.8 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Spacing Before Footer */}
//         <div className="mt-16" />
//         <Footer />
//       </section>
//     </>
//   );
// };

// export default Projects;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const projects = [
  {
    id: 1,
    title: 'Completed Projects',
    image: 'https://res.cloudinary.com/df8xowqdo/image/upload/v1752396257/tekjawa_logo-9_dpx3is.jpg',
    description:
      'We have successfully installed solar panels on numerous residential properties, helping homeowners reduce their carbon footprint and save money on their energy bills.',
  },
  {
    id: 2,
    title: 'Ongoing Projects',
    image: 'https://res.cloudinary.com/df8xowqdo/image/upload/v1752396781/tekjawa_logo-10_rzm6wm.jpg',
    description:
      'We are currently working on a large-scale solar project for a commercial client, designing and installing a solar energy system that will offset a significant portion of their energy consumption.',
  },
  {
    id: 3,
    title: 'Future Projects',
    image: 'https://res.cloudinary.com/df8xowqdo/image/upload/v1752397126/tekjawa_logo-11_g9luai.jpg',
    description:
      'We have several exciting future projects in the pipeline, including collaborations with local communities to establish community solar programs and expand access to clean energy.',
  },
];

const Projects = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Header />

      <section id="projects" className="bg-gradient-to-b from-brand-orange/5 to-brand-green/10 pt-20">
        {/* 🎥 Intro Video */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-4 pb-10"
        >
          <video
            src="/project1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* 🔧 Project Content */}
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">
            What We’re Building for a <span className="text-brand-orange">Brighter Tomorrow</span>
          </h2>
          <p className="text-brand-green mb-12">
            Take a look at some of our successful installations
          </p>

          {/* 🖼 Project Cards */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                    onClick={() => setFullscreenImage(project.image)}
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-brand-orange">
                    {project.title}
                  </h3>
                  <p className="text-brand-green text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🔍 Fullscreen Image Viewer */}
        <AnimatePresence>
          {fullscreenImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="absolute top-6 right-6 text-white text-4xl font-bold"
                onClick={() => setFullscreenImage(null)}
              >
                &times;
              </button>
              <motion.img
                src={fullscreenImage}
                alt="Zoomed Project"
                className="max-w-full max-h-[90vh] rounded-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16" />
        <Footer />
      </section>
    </>
  );
};

export default Projects;
