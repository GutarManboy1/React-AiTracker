import React from "react";
import { useState } from "react";

import Navbar from "~/components/Navbar";
import FileUploader from "~/components/FileUploader";

const handleFileUpload = (file: File | null) => {
  if (file) {
    console.log("File uploaded:", file.name);
  } else {
    console.log("No file uploaded");
  }
}

const upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setFile(file);
    e.preventDefault();
    setIsProcessing(true);
    setStatusMessage("Processing your resume...");

    // Simulate an API call
    setTimeout(() => {
      setIsProcessing(false);
      setStatusMessage("Resume processed successfully!");
    }, 3000);
  };

  return (
    <main className='bg-[url("/images/bg-main.svg")] bg-cover'>
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Smart Feedback for Quicker Hiring</h1>
          {isProcessing ? (
            <>
              <h2>{statusMessage}</h2>
              <img src="/images/resume-scan.gif" className="w-full" alt="" />
            </>
          ) : (
            <h2>Upload your resume to get started</h2>
          )}

          {!isProcessing && (
            <form
              id="upload-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-8"
            >
              <div className="form-div">
                <label htmlFor="company-name">Company Name</label>
                <input
                  type="text"
                  name="company-name"
                  placeholder="Company Name"
                  id="company-name"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-title">Job Title</label>
                <input
                  type="text"
                  name="job-title"
                  placeholder="Job Title"
                  id="job-title"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-description">Job Description</label>
                <textarea
                  rows={5}
                  name="job-description"
                  placeholder="Job Description"
                  id="job-description"
                />
              </div>
              <div className="form-div">
                <label htmlFor="uploader">Upload Resume</label>
                <FileUploader onFileUpload={handleFileUpload}/>
              </div>

              <button type="submit" className="primary-button">
                Analyze Resume
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default upload;
