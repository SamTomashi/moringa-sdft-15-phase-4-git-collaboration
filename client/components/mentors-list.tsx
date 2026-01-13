import { Card } from "@/components/ui/card"

interface Mentor {
  id: number
  name: string
  students: number
  specialty: string
  image: string
}

interface MentorsListProps {
  mentors: Mentor[]
}

export function MentorsList({ mentors }: MentorsListProps) {
  return (
    <Card className="overflow-hidden border shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-6 py-4 text-left text-sm font-semibold">Rank</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Specialty</th>
              <th className="px-6 py-4 text-right text-sm font-semibold">Students Trained</th>
              <th className="px-6 py-4 text-right text-sm font-semibold">% of Total</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {mentors.map((mentor, index) => {
              const totalStudents = mentors.reduce((sum, m) => sum + m.students, 0)
              const percentage = ((mentor.students / totalStudents) * 100).toFixed(1)
              const isTopFive = index < 5

              return (
                <tr
                  key={mentor.id}
                  className={`transition-colors ${
                    isTopFive ? "bg-primary/5 hover:bg-primary/10" : "hover:bg-muted/50"
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">#{index + 1}</span>
                      {isTopFive && <span className="text-lg">🌟</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{mentor.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{mentor.specialty}</td>
                  <td className="px-6 py-4 text-right font-semibold text-primary">{mentor.students}</td>
                  <td className="px-6 py-4 text-right text-sm text-muted-foreground">{percentage}%</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Summary */}
      <div className="border-t bg-muted/30 px-6 py-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Total Students Trained</span>
          <span className="text-lg font-bold text-primary">{mentors.reduce((sum, m) => sum + m.students, 0)}</span>
        </div>
      </div>
    </Card>
  )
}
