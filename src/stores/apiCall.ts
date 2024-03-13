import { defineStore } from 'pinia';

interface Font {
  family: string;
  category: string;
  variants: string[];
  subsets: string[];
  version: string;
  lastModified: string;
  files: {
    [key: string]: string;
  };
  kind: string;
  menu: string;
}

interface ApiCallState {
  fontsList: Font[];
}

export const useApi = defineStore('apiCall', {
  state: (): ApiCallState => ({ fontsList: [] }),
  getters: {
    getFilteredFonts: (state) => (param: string) => {
      return state.fontsList.filter(
        (font) => font.family.toLowerCase().indexOf(param.toLowerCase()) > -1,
      );
    },
  },
  actions: {
    async fetchApi(min: number, max: number): Promise<void> {
      const response = await fetch(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${import.meta.env.VITE_API_KEY}`,
      ).then((response) => response.json());

      this.fontsList = response.items.slice(min, max);
    },
  },
});
