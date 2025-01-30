// app/ip/provider.ts
type Data = {
    ip: string;
};

export async function getData(): Promise<Data> {
    try {
        const url = 'https://api.ipify.org?format=json';
        const res = await fetch(url, {
            cache: "no-store", // Zawsze pobiera nowe dane
        });

        if (!res.ok) throw new Error("Błąd ładowania danych");

        return await res.json();
    } catch (error) {
        console.error("❌ Błąd pobierania IP:", error);
        throw error;
    }
}