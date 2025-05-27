'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import TabbedPanel from '@/components/TabbedPanel'


type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  address: {
    address: string
    city: string
    postalCode: string
  }
}

export default function EmployeeDetailPage() {
  const { id } = useParams()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [id])

  if (!user) return <p className="p-4">Loading...</p>

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-2">
        {user.firstName} {user.lastName}
      </h1>
      <p className="text-gray-600 mb-1">Email: {user.email}</p>
      <p className="text-gray-600 mb-1">Phone: {user.phone}</p>
      <p className="text-gray-600 mb-1">
        Address: {user.address.address}, {user.address.city} - {user.address.postalCode}
      </p>

<TabbedPanel
  overview={
    <ul className="list-disc ml-6">
      <li>Email: {user.email}</li>
      <li>Phone: {user.phone}</li>
      <li>City: {user.address.city}</li>
    </ul>
  }
  projects={
    <ul className="list-disc ml-6">
      <li>HR Portal Redesign – Jan 2024</li>
      <li>Onboarding Workflow Automation – Mar 2024</li>
    </ul>
  }
  feedback={
    <ul className="list-disc ml-6">
      <li>"Great team player!" – Manager</li>
      <li>"Needs to improve punctuality." – Peer</li>
      <li>"Excellent on documentation." – Lead</li>
    </ul>
  }
/>

    </main>
  )
}
