import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const Footer = () => {
  return (
    <footer className="bg-indigo-950 p-8 flex flex-col items-center justify-between text-white">

      <div className="mb-8">
        <h1 className={`text-xl font-bold text-pink-500 mb-3 ${poppins.className}`}>Know about Physics Wallah</h1>
        <p className={`text-base font-light text-white ${poppins.className}`}>Physics Wallah is India's top online ed-tech platform that provides affordable and comprehensive learning experience to students of classes 6 to 12 and those preparing for JEE and NEET exams. We also provide extensive NCERT solutions, sample papers, NEET, JEE Mains, BITSAT previous year papers, which makes us a one-stop solution for all resources.

Physics Wallah also caters to over 3.5 million registered students and over 78 lakh+ Youtube subscribers with a 4.8 rating on its app.</p>
      </div>

      <div className="mb-8">
        <h1 className={`text-xl font-bold text-pink-500 mb-3 ${poppins.className}`}>What Makes Us Different</h1>
        <p className={`text-base font-light text-white ${poppins.className}`}>Physics Wallah strives to develop a comprehensive pedagogical structure for students, where they get a state-of-the-art learning experience with study material and resources. Apart from catering students preparing for JEE Mains and NEET, PW also provides study material for each state board like Uttar Pradesh, Bihar, and others.</p>
      </div>

      <div>
        <h1 className={`text-xl font-bold text-pink-500 mb-3 ${poppins.className}`}>Our Key Focus Areas</h1>
        <p className={`text-base font-light text-white ${poppins.className}`}>Physics Wallah's main focus is to make the learning experience as economical as possible for all students. With our affordable courses like Lakshya, Udaan, and Arjuna and many others, we have been able to provide a platform for lakhs of aspirants. From providing Chemistry, Maths, Physics formulas to giving e-books of eminent authors like RD Sharma, RS Aggarwal, and Lakhmir Singh, PW focuses on every single student's need for preparation.</p>
      </div>
    </footer>
  );
};

export default Footer;
