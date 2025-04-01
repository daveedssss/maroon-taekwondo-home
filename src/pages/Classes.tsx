
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Classes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8 section-title">Our Classes</h1>
          
          <p className="text-lg mb-12 max-w-4xl">
            Dave Hermino Taekwondo offers a variety of classes designed to accommodate students of all ages and skill levels. Each program is carefully structured to ensure proper progression and skill development.
          </p>
          
          {/* Classes List */}
          <div className="space-y-12 mb-16">
            {/* Class 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="bg-gray-200 h-64 rounded-lg"></div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-3">Little Tigers (Ages 4-6)</h2>
                <p className="mb-4">
                  Our Little Tigers program is specially designed for our youngest students. Using fun games and activities, we introduce basic Taekwondo concepts while developing coordination, balance, and social skills.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-bold">Schedule:</h3>
                    <p>Mon & Wed: 4:00 PM - 4:45 PM</p>
                    <p>Sat: 9:00 AM - 9:45 AM</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Requirements:</h3>
                    <p>No experience necessary</p>
                    <p>Uniform provided</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Class 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="bg-gray-200 h-64 rounded-lg"></div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-3">Youth Program (Ages 7-12)</h2>
                <p className="mb-4">
                  Our most popular program focuses on developing strong fundamentals while instilling core values like respect, discipline, and perseverance. Students learn traditional Taekwondo techniques, forms, and basic sparring.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-bold">Schedule:</h3>
                    <p>Mon, Wed, Fri: 5:00 PM - 6:00 PM</p>
                    <p>Sat: 10:00 AM - 11:00 AM</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Requirements:</h3>
                    <p>No experience necessary</p>
                    <p>Uniform required (available for purchase)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Class 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="bg-gray-200 h-64 rounded-lg"></div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-3">Teen & Adult Program (Ages 13+)</h2>
                <p className="mb-4">
                  Our Teen & Adult program offers comprehensive Taekwondo training that develops physical fitness, self-defense skills, and mental discipline. Classes include traditional techniques, forms, sparring, and practical self-defense applications.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-bold">Schedule:</h3>
                    <p>Mon, Wed, Fri: 6:30 PM - 7:45 PM</p>
                    <p>Sat: 11:30 AM - 12:45 PM</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Requirements:</h3>
                    <p>No experience necessary</p>
                    <p>Uniform required (available for purchase)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Class 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="bg-gray-200 h-64 rounded-lg"></div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-3">Competition Team (By Invitation)</h2>
                <p className="mb-4">
                  For dedicated students looking to test their skills in competition, our team training provides advanced instruction in Olympic-style Taekwondo sparring and forms competition. Team members represent Dave Hermino Taekwondo in local, national, and international tournaments.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-bold">Schedule:</h3>
                    <p>Tue & Thu: 6:00 PM - 7:30 PM</p>
                    <p>Sat: 1:00 PM - 2:30 PM</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Requirements:</h3>
                    <p>By invitation only</p>
                    <p>Minimum rank requirements apply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 section-title">Pricing & Membership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-[#800020] text-white p-6 text-center">
                  <h3 className="text-xl font-bold">Basic Membership</h3>
                </div>
                <div className="p-6">
                  <p className="text-center text-3xl font-bold mb-6">₱2,500/month</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-[#800020] mr-2">✓</span>
                      2 classes per week
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#800020] mr-2">✓</span>
                      Access to open practice areas
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#800020] mr-2">✓</span>
                      Belt testing (fees apply)
                    </li>
                  </ul>
                  <Link to="/contact" className="block text-center bg-[#800020] hover:bg-[#5c0017] text-white font-bold py-2 px-4 rounded-md transition-colors">
                    Sign Up
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-[#800020] text-white p-6 text-center">
                  <h3 className="text-xl font-bold">Standard Membership</h3>
                </div>
                <div className="p-6">
                  <p className="text-center text-3xl font-bold mb-6">₱3,500/month</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-[#800020] mr-2">✓</span>
                      3 classes per week
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#800020] mr-2">✓</span>
                      Access to open practice areas
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#800020] mr-2">✓</span>
                      Free uniform (first-time members)
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#800020] mr-2">✓</span>
                      Belt testing (fees apply)
                    </li>
                  </ul>
                  <Link to="/contact" className="block text-center bg-[#800020] hover:bg-[#5c0017] text-white font-bold py-2 px-4 rounded-md transition-colors">
                    Sign Up
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-[#800020] text-white p-6 text-center">
                  <h3 className="text-xl font-bold">Premium Membership</h3>
                </div>
                <div className="p-6">
                  <p className="text-center text-3xl font-bold mb-6">₱4,500/month</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-[#800020] mr-2">✓</span>
                      Unlimited classes
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#800020] mr-2">✓</span>
                      Access to open practice areas
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#800020] mr-2">✓</span>
                      Free uniform and gear package
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#800020] mr-2">✓</span>
                      Free belt testing
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#800020] mr-2">✓</span>
                      One free private lesson per month
                    </li>
                  </ul>
                  <Link to="/contact" className="block text-center bg-[#800020] hover:bg-[#5c0017] text-white font-bold py-2 px-4 rounded-md transition-colors">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold mb-8 section-title">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-4xl">
              <div>
                <h3 className="text-xl font-bold mb-2">Do I need prior experience to join?</h3>
                <p>No prior experience is necessary for our regular classes. We welcome beginners and provide thorough instruction on all techniques.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">What should I wear to my first class?</h3>
                <p>For your first class, comfortable athletic clothing is appropriate. If you decide to continue, you'll need to purchase a Taekwondo uniform (dobok).</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">How often should I attend classes?</h3>
                <p>For optimal progress, we recommend at least 2-3 classes per week. Consistent practice is key to developing and maintaining skills.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">How long does it take to earn a black belt?</h3>
                <p>The journey to black belt typically takes 3-5 years of dedicated training. However, Taekwondo is a lifelong journey that continues well beyond earning a black belt.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Classes;
