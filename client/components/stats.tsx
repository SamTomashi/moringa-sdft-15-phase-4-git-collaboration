import { Card } from "@/components/ui/card"

interface StatsProps {
  totalStudents: number
  totalMentors: number
}

export function Stats({ totalStudents, totalMentors }: StatsProps) {
  const averageStudentsPerMentor = Math.round(totalStudents / totalMentors)

  return (
    <div className="mb-12 grid gap-4 md:grid-cols-3">
      <Card className="border shadow-lg">
        <div className="p-6">
          <p className="text-sm font-medium text-muted-foreground">Total Students Trained</p>
          <p className="mt-2 text-4xl font-bold text-primary">{totalStudents.toLocaleString()}</p>
          <p className="mt-1 text-xs text-muted-foreground">Across all cohorts</p>
        </div>
      </Card>

      <Card className="border shadow-lg">
        <div className="p-6">
          <p className="text-sm font-medium text-muted-foreground">Active Mentors</p>
          <p className="mt-2 text-4xl font-bold text-accent">{totalMentors}</p>
          <p className="mt-1 text-xs text-muted-foreground">Excellence ambassadors</p>
        </div>
      </Card>

      <Card className="border shadow-lg">
        <div className="p-6">
          <p className="text-sm font-medium text-muted-foreground">Avg. Students per Mentor</p>
          <p className="mt-2 text-4xl font-bold text-secondary">{averageStudentsPerMentor}</p>
          <p className="mt-1 text-xs text-muted-foreground">Dedication per mentor</p>
        </div>
      </Card>
    </div>
  )
}
