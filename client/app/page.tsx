"use client"

import { useAuth } from "@/app/context/auth-context"
import { Header } from "@/components/header"
import { MentorDashboard } from "@/components/mentor-dashboard"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!user) {
    return null
  }

  return (
    <>
      <Header />
      <main className="py-8">
        <MentorDashboard />
      </main>
    </>
  )
}
