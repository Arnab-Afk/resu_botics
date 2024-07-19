import React from "react";
import CardOne from "./card";

export default function SecOne() {
  return (
    <div>
      <p className="text-9xl text-[#059212] mb-32 font-pixelify-sans text-center mt-10">RESUBOTICS</p>
      <CardOne 
        title="Resume Chatbot" 
        description="Effortlessly sift through multiple resumes with our Resume Chatbot. Upload resumes, interact with the chatbot to specify criteria, and get recommendations for the best-fit candidates based on your requirements."
        buttonContent="EXPLORE CHATBOT"
        imageO="/botVector.jpg"
        cardLink="https://chatbotshortlister.streamlit.app/"
      />
      <CardOne 
        title="Resume Maker" 
        description="Create a professional resume in minutes. Input your personal, educational, and professional details into our form, and instantly generate a LaTeX-formatted PDF resume, ready for download and use."
        buttonContent="CREATE RESUME"
        imageO="/resumeVector.jpg"
        cardLink="/resumeform"
      />
      <CardOne 
        title="Resume Analyzer" 
        description="Optimize your resume to match job openings. Upload your current resume and enter job details to get a detailed analysis, including keyword matching and improvement suggestions to enhance your job prospects." 
        buttonContent="ANALYZE RESUME"
        imageO="/analyzeVector.jpg"
        cardLink="/analyserApp"
      />
    </div>
  );
}
