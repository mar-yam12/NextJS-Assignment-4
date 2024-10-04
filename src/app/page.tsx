"use client";
//page.tsx
import React from "react";
import StudentCard from "./components/StudentCard";


const students = [
  {
    name: "Areeba Shahid",
    age: 16,
    rollNumber: "00987654",
    className: "Monday 2-5",
    imageUrl: "/images/Areeba.jpg",
    gender: "Female",
    city: "Karachi",
    center: "Governor House Karachi",
  },
  {
    name: "Maryam Shahid",
    age: 16,
    rollNumber: "00133331",
    className: "Monday 2-5",
    imageUrl: "/images/Maryam.jpg",
    gender: "Female",
    city: "Karachi",
    center: "Governor House Karachi",
  },
  {
    name: "Abrish Fatima",
    age: 16,
    rollNumber: "00321654",
    className: "Monday 2-5",
    imageUrl: "/images/Abrish.jpg",
    gender: "Female",
    city: "Karachi",
    center: "Governor House Karachi",
  },
];

export default function Home() {
  return (
    <div className="home w-auto h-20 bg-pink-100 pt-5">
      <h1 className="title text-center text-bold text-5xl text-transform: uppercase ">Student's ID Card</h1>
      <div className="student-cards">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>

      <style jsx>{`
        .home {
          text-align: center;
          padding: 20px;
        }
        .student-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
      `}</style><br />
      <div className="min-w-full h-20 bg-pink-100 mt-2 pt-5">
        <h2 className="text-center text-3xl font-bold text-b text-blue-950">
        Created by Maryam Shahid
        </h2>
      </div>
    </div>
    
  );
}