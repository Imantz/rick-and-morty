export const useEnvVar = (key: string, fallback?: string): string => {
    return import.meta.env[key] || fallback || "";
};