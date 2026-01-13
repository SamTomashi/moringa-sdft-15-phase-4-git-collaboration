import { Card } from "@/components/ui/card"

interface Mentor {
  id: number
  name: string
  students: number
  specialty: string
  image: string
}

interface TopMentorCardProps {
  mentor: Mentor
  rank: number
}

const RANK_COLORS = {
  1: "from-yellow-400 to-yellow-600",
  2: "from-gray-300 to-gray-500",
  3: "from-orange-400 to-orange-600",
  4: "from-blue-300 to-blue-500",
  5: "from-purple-300 to-purple-500",
}

const RANK_ICONS = {
  1: "👑",
  2: "🥈",
  3: "🥉",
  4: "⭐",
  5: "✨",
}

export function TopMentorCard({ mentor, rank }: TopMentorCardProps) {
  const bgGradient = RANK_COLORS[rank as keyof typeof RANK_COLORS]
  const icon = RANK_ICONS[rank as keyof typeof RANK_ICONS]

  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Rank Badge */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 transition-opacity group-hover:opacity-10`}
      />

      <div className="relative p-6 text-center">
        {/* Rank Icon */}
        <div className="mb-4 text-5xl">{icon}</div>

        {/* Rank Number */}
        <div
          className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${bgGradient} font-bold text-white`}
        >
          #{rank}
        </div>

        {/* Mentor Info */}
        <h3 className="mb-1 font-bold text-card-foreground">{mentor.name}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{mentor.specialty}</p>

        {/* Student Count */}
        <div className="mb-3">
          <p className="text-3xl font-bold text-primary">{mentor.students}</p>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Students Trained</p>
        </div>

        {/* Progress Bar */}
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className={`h-full bg-gradient-to-r ${bgGradient}`}
            style={{ width: `${(mentor.students / 500) * 100}%` }}
          />
        </div>
      </div>
    </Card>
  )
}
