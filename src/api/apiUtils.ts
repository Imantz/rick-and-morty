export async function fetchJson<T>(url: string, options: RequestInit = {}): Promise<T> {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error: unknown) {
        console.error('Error in API call:', error);
        throw new Error(error instanceof Error ? error.message : 'Unknown API error');
    }
}
