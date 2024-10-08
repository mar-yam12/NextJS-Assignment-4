"use client";
// studentcard.tsx
import React from "react";
import Image from "next/image";
// Define the type for the student prop
type Student = {
  name: string;
  age: number;
  rollNumber: string;
  className: string;
  imageUrl: string;
  gender: string;
  city: string;
  center: string;
};

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="student-card">
      <div className="text-left">
      <Image 
      src={student.imageUrl} 
      alt={student.name} 
      layout="responsive"
      width={500} 
      height={300}
      />
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Roll Number: {student.rollNumber}</p>
      <p>Class: {student.className}</p>
      <p>City: {student.city}</p>
      <p>Center: {student.center}</p>
      </div>
    </div>
  );
};

export default StudentCard;
