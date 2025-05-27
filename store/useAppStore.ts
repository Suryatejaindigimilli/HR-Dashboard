import { create } from 'zustand';

interface AppState {
  query: string;
  selectedDepartments: string[];
  selectedRatings: number[];
  setQuery: (query: string) => void;
  setDepartments: (departments: string[]) => void;
  setRatings: (ratings: number[]) => void;
}

export const useAppStore = create<AppState>((set) => ({
  query: '',
  selectedDepartments: [],
  selectedRatings: [],
  setQuery: (query) => set({ query }),
  setDepartments: (departments) => set({ selectedDepartments: departments }),
  setRatings: (ratings) => set({ selectedRatings: ratings }),
}));
