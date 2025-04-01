
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8 section-title">About Dave Hermino</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg h-[500px] bg-gray-200">
                {/* Dave's image would go here */}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Taekwondo Master & Instructor</h2>
              <p className="mb-4 text-lg">
                Dave Hermino began his Taekwondo journey at the age of 7, quickly showing exceptional talent and dedication to the martial art. Over the years, he has earned numerous accolades and championships, establishing himself as a respected figure in the Taekwondo community.
              </p>
              <p className="mb-4 text-lg">
                With a passion for teaching and a deep understanding of Taekwondo techniques, Dave founded his own training center to share his knowledge and help others develop both physically and mentally through this ancient martial art.
              </p>
              <p className="mb-4 text-lg">
                Dave holds a {/* belt level */} degree black belt and is certified by {/* organization */}. His teaching philosophy combines traditional Taekwondo values with modern training methods to create a comprehensive martial arts education.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 section-title">Our Philosophy</h2>
            <p className="mb-4 text-lg">
              At Dave Hermino Taekwondo, we believe that martial arts training extends far beyond physical techniques. Our core philosophy centers on developing the whole person – mind, body, and spirit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-bold mb-3">Discipline</h3>
                <p>We teach students the value of self-discipline, helping them develop focus and perseverance that transfers to all areas of life.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-bold mb-3">Respect</h3>
                <p>Respect for oneself and others is fundamental to our practice, creating a positive and supportive training environment.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p>We encourage all students to pursue excellence in their training, constantly challenging themselves to improve and grow.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 section-title">Our Facility</h2>
            <p className="mb-8 text-lg">
              Our state-of-the-art training facility provides the perfect environment for students of all levels to learn and practice Taekwondo. With top-quality equipment, spacious training areas, and a team of experienced instructors, we offer an unparalleled martial arts experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-200 h-64 rounded-lg"></div>
              <div className="bg-gray-200 h-64 rounded-lg"></div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
