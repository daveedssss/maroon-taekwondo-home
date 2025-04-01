
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        <Hero />
        
        {/* About Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold section-title centered inline-block">About Dave Hermino</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gray-200 h-[400px]">
                  {/* This would be Dave's image */}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Master Instructor & Champion</h3>
                <p className="mb-4 text-lg">
                  Dave Hermino is a dedicated Taekwondo master with over 15 years of experience in martial arts. His passion for Taekwondo has led him to create a training center focused on excellence, discipline, and personal growth.
                </p>
                <p className="mb-6 text-lg">
                  Through his unique teaching methodology, Dave has trained numerous champions and helped countless students achieve their personal goals.
                </p>
                <Link to="/about" className="inline-block bg-[#800020] hover:bg-[#5c0017] text-white font-bold py-2 px-6 rounded-md transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Programs Section */}
        <section className="py-20 px-4 md:px-8 bg-gray-100">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold section-title centered inline-block">Our Programs</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Program 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Children's Classes</h3>
                  <p className="text-gray-600 mb-4">
                    Build confidence, discipline, and physical fitness in a fun, supportive environment designed specifically for young learners.
                  </p>
                  <Link to="/classes" className="text-[#800020] font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
              
              {/* Program 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Adult Training</h3>
                  <p className="text-gray-600 mb-4">
                    Challenge yourself with comprehensive training that improves strength, flexibility, and mental focus at any age.
                  </p>
                  <Link to="/classes" className="text-[#800020] font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
              
              {/* Program 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Competition Team</h3>
                  <p className="text-gray-600 mb-4">
                    Join our elite competition team and represent Dave Hermino Taekwondo in local, national, and international tournaments.
                  </p>
                  <Link to="/classes" className="text-[#800020] font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 px-4 md:px-8 bg-[#800020] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Taekwondo Journey?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join Dave Hermino's Taekwondo gym today and transform your life through the power of martial arts.
            </p>
            <Link to="/contact" className="inline-block bg-white text-[#800020] hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-colors text-lg">
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
