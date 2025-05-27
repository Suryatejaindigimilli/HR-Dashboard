'use client'

import { useState } from 'react'

const tabs = ['Overview', 'Projects', 'Feedback']

export default function TabbedPanel({
  overview,
  projects,
  feedback,
}: {
  overview: React.ReactNode
  projects: React.ReactNode
  feedback: React.ReactNode
}) {
  const [activeTab, setActiveTab] = useState('Overview')

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return overview
      case 'Projects':
        return projects
      case 'Feedback':
        return feedback
    }
  }

  return (
    <div className="mt-6">
      <div className="flex gap-4 border-b mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`pb-2 ${
              activeTab === tab
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="text-sm text-gray-700">{renderContent()}</div>
    </div>
  )
}
