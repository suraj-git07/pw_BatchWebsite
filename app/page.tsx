"use client";

import Card from './components/atoms/Card';
import React, { useState, useEffect } from 'react';
import appwriteService from "./appwrite/database";
import Image from 'next/image'; 

export default function Home() {
  const [courses, setCourses] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const courses = await appwriteService.getCourses();
        if (courses) {
          setCourses(courses.documents);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Image
          src="/banner.png" 
          alt="Banner Image"
          width={640} 
          height={360} 
          className="w-full h-auto max-h-72 mt-1 mb-5"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-4">
        {courses.map((course: any, index: number) => (
          <div key={course.courseID} className={`mb-8 mx-auto ${index % 3 !== 2 ? 'mr-8' : ''}`}>
            <Card
              image={course.image}
              courseName={course.name}
              price={course.price}
              rating={course.rating}
              link={course.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
