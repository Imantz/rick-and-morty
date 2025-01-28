import { useEnvVar } from "../utils/useEnvVar.ts";

export const API_BASE_URLS = {
    rickAndMorty: useEnvVar("VITE_RICK_AND_MORTY_API_BASE_URL", "https://rickandmortyapi.com/api"),
};
  