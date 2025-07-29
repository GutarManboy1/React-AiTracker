import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import { resumes } from "~/constants";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "AI feedback for Stellar Resumes!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();

  const navigate = useNavigate(); 

  useEffect(() => {
    if (!auth.isAuthenticated) navigate(`/auth?next=/`);
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover  ">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track your Resume Ratings & Applications</h1>
          <h2>
            Resumind is a tool that helps you track your resume ratings and
            applications.
          </h2>
        </div>

        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
