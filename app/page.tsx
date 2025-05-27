'use client';

import { useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import FilterDropdown from '@/components/FilterDropdown';
import { useSearch } from '@/hooks/useSearch';
import UserCard from '@/components/UserCard';
import { useAppStore } from '@/store/useAppStore'; // ✅ Zustand store import

type User = {
  id: number;
  fullName: string;
  email: string;
  age: number;
  department: string;
  rating: number;
};

const departments = ['Engineering', 'HR', 'Marketing', 'Finance'];
const ratings = [1, 2, 3, 4, 5];

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  // ✅ Zustand global state hooks
  const query = useAppStore((state) => state.query);
  const selectedDepartments = useAppStore((state) => state.selectedDepartments);
  const selectedRatings = useAppStore((state) => state.selectedRatings);
  const setQuery = useAppStore((state) => state.setQuery);
  const setSelectedDepartments = useAppStore((state) => state.setDepartments);
  const setSelectedRatings = useAppStore((state) => state.setRatings);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=20')
      .then((res) => res.json())
      .then((data) => {
        const mappedUsers = data.users.map((user: any) => ({
          id: user.id,
          fullName: `${user.firstName} ${user.lastName}`,
          email: user.email,
          age: user.age,
          department: departments[Math.floor(Math.random() * departments.length)],
          rating: Math.floor(Math.random() * 5) + 1,
        }));

        setUsers(mappedUsers);
      });
  }, []);

  const filteredUsers = useSearch(users, query, selectedDepartments, selectedRatings);

  return (
  <main className="max-w-7xl mx-auto px-6 py-8">
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        HR Performance Dashboard
      </h1>
    </header>

    <section className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <div className="grid md:grid-cols-3 gap-4">
        <SearchBar query={query} onChange={setQuery} />
        <FilterDropdown
          label="Filter by Department"
          options={departments}
          selected={selectedDepartments}
          onChange={setSelectedDepartments}
        />
        <FilterDropdown
          label="Filter by Rating"
          options={ratings.map(String)}
          selected={selectedRatings.map(String)}
          onChange={(vals) => setSelectedRatings(vals.map(Number))}
        />
      </div>
    </section>

    <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {filteredUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  </main>
);

}
