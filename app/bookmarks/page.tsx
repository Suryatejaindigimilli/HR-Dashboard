'use client';

import { useBookmarks } from '@/context/BookmarkContext';

export default function BookmarksPage() {
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bookmarked Employees</h1>

      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {bookmarks.map((user) => (
            <div key={user.id} className="border rounded-xl p-4 shadow-md bg-white dark:bg-gray-800">
              <h2 className="text-lg font-bold">{user.firstName} {user.lastName}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm">Age: {user.age}</p>
              <p className="text-sm">ID: {user.id}</p>

              <div className="flex gap-2 mt-4">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => removeBookmark(user.id)}
                >
                  Unbookmark
                </button>
                <button className="bg-purple-500 text-white px-3 py-1 rounded">
                  Promote
                </button>
                <button className="bg-indigo-500 text-white px-3 py-1 rounded">
                  Assign to Project
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}