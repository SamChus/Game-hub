import { create } from "zustand";

export interface QueryObject {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}


interface GameQueryStore {
  gameQuery: QueryObject;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}


export const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) => set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  setPlatformId: (platformId) => set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  setSortOrder: (sortOrder) => set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
  setSearchText: (searchText) => set((state) => ({ gameQuery: { ...state.gameQuery, searchText } })),
}));