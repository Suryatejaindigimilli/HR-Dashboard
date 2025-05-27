import { useMemo } from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  age: number;
  department: string;
  rating: number;
}


export function useSearch(users: User[], query: string, selectedDepartments: string[], selectedRatings: number[]) {
  return useMemo(() => {
    return users.filter((user) => {
      const matchesQuery =
        user.fullName.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()) ||
        user.department.toLowerCase().includes(query.toLowerCase());

      const matchesDepartment =
        selectedDepartments.length === 0 || selectedDepartments.includes(user.department);

      const matchesRating =
        selectedRatings.length === 0 || selectedRatings.includes(user.rating);

      return matchesQuery && matchesDepartment && matchesRating;
    });
  }, [users, query, selectedDepartments, selectedRatings]);
}
