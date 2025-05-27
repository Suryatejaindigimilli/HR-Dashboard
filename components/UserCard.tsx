'use client';

import { useBookmarks } from '@/context/BookmarkContext';
import Link from 'next/link';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  fullName?: string;
  email: string;
  age: number;
};


type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();

  const isBookmarked = bookmarks.some((b) => b.id === user.id);

  const department = ['Tech', 'HR', 'Sales', 'Marketing'][user.id % 4];
  const rating = (user.id % 5) + 1;

  return (
    <div className="rounded-xl p-4 shadow-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 transition hover:shadow-xl">
      <h2 className="text-lg font-bold">{user.firstName} {user.lastName}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm">Age: {user.age}</p>
      <p className="text-sm">Department: {department}</p>

      <div className="my-2">
        <span className="text-yellow-400">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </span>
      </div>

      <div className="flex gap-2 mt-3">
        <Link href={`/employee/${user.id}`}>
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-medium transition hover:brightness-110">View</button>
        </Link>

        <button 
          className={`${
            isBookmarked ? 'bg-red-500' : 'bg-green-500'
          } text-white px-3 py-1 rounded`}
          onClick={() =>
            isBookmarked ? removeBookmark(user.id) : addBookmark(user)
          }
        >
          {isBookmarked ? 'Unbookmark' : 'Bookmark'}
        </button>

        <button className="bg-purple-500 text-white px-3 py-1 rounded">Promote</button>
      </div>
    </div>
  );
}
