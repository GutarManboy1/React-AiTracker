import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "~/constants/index";
import ResumeCard from "~/components/ResumeCard";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "AI feedback for Stellar Resumes!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover  ">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track your Resume Ratings & Applications</h1>
          <h2>
            Resumind is a tool that helps you track your resume ratings and
            applications.
          </h2>
        </div>
      </section>

      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </main>
  );
}
