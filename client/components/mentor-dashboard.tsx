"use client"

import { TopMentorCard } from "./top-mentor-card"
import { MentorsList } from "./mentors-list"
import { Stats } from "./stats"

// Sample data for demonstration
const mentorsData = [
  {
    id: 1,
    name: "Sarah Kipchoge",
    students: 487,
    specialty: "Full Stack Development",
    image: "/professional-woman-diverse.png",
  },
  { id: 2, name: "James Omondi", students: 456, specialty: "React & Frontend", image: "/professional-man.jpg" },
  { id: 3, name: "Amara Okoro", students: 423, specialty: "Data Science", image: "/professional-woman-diverse.png" },
  { id: 4, name: "David Kiplagat", students: 398, specialty: "DevOps & Cloud", image: "/professional-man.jpg" },
  { id: 5, name: "Nina Mwendwa", students: 376, specialty: "UX/UI Design", image: "/professional-woman-diverse.png" },
  {
    id: 6,
    name: "Marcus Wanjiru",
    students: 342,
    specialty: "Backend Development",
    image: "/professional-man.jpg",
  },
  { id: 7, name: "Elena Mussa", students: 298, specialty: "Product Management", image: "/professional-woman-diverse.png" },
  { id: 8, name: "Ahmed Hassan", students: 265, specialty: "Mobile Development", image: "/professional-man.jpg" },
]

const topFive = mentorsData.slice(0, 5)
const totalStudents = mentorsData.reduce((sum, m) => sum + m.students, 0)

export function MentorDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <span className="text-2xl">🎉</span>
              <span className="text-sm font-semibold text-primary">10 Year Anniversary</span>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Celebrating Our Top Mentors</h1>
            <p className="text-lg text-muted-foreground">Recognizing excellence in mentorship at Moringa School</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Stats */}
        <Stats totalStudents={totalStudents} totalMentors={mentorsData.length} />

        {/* Top 5 Mentors */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Top 5 Mentors</h2>
            <p className="text-muted-foreground">Our most dedicated mentors who have trained the most students</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {topFive.map((mentor, index) => (
              <TopMentorCard key={mentor.id} mentor={mentor} rank={index + 1} />
            ))}
          </div>
        </section>

        {/* All Mentors List */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold">All Mentors</h2>
            <p className="text-muted-foreground">Complete list of mentors and their student count</p>
          </div>
          <MentorsList mentors={mentorsData} />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          <p>© 2026 Moringa School. Celebrating 10 years of excellence in tech education.</p>
        </div>
      </footer>
    </div>
  )
}
