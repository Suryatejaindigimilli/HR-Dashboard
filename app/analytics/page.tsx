'use client';

import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const departmentData = {
  labels: ['Tech', 'HR', 'Sales', 'Marketing'],
  datasets: [
    {
      label: 'Average Rating',
      data: [4.2, 3.8, 4.0, 3.5],
      backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'],
    },
  ],
};

const bookmarkTrendData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Bookmarks This Month',
      data: [2, 5, 3, 7],
      backgroundColor: ['#6366F1', '#F87171', '#34D399', '#FBBF24'],
    },
  ],
};

export default function AnalyticsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">📊 Analytics Dashboard</h1>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Department-wise Average Rating</h2>
        <Bar data={departmentData} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Bookmark Trends (Mock)</h2>
        <Pie data={bookmarkTrendData} />
      </section>
    </main>
  );
}
