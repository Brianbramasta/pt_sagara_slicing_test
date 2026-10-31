import { create } from "zustand";

interface SearchState {
  selectedCity: string;
  selectedRegion: string;
  selectedType: string;
  selectedDate: string;
  setCity: (city: string) => void;
  setRegion: (region: string) => void;
  setType: (type: string) => void;
  setDate: (date: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  selectedCity: "Jakarta",
  selectedRegion: "All",
  selectedType: "All Space",
  selectedDate: "Mon, 17 Aug - Tue, 18 Aug",
  setCity: (city) => set({ selectedCity: city }),
  setRegion: (region) => set({ selectedRegion: region }),
  setType: (type) => set({ selectedType: type }),
  setDate: (date) => set({ selectedDate: date }),
}));