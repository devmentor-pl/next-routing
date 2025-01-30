// app/ip/error.tsx
"use client"; // Musi być Client Side Rendering

export default function ErrorPage(
    { error, reset }: { error: Error; reset: () => void }
) {
    return (
        <div>
        <h2>❌ Wystąpił błąd: {error.message}</h2>
        <button onClick={() => reset()}>
            Spróbuj ponownie
        </button>
    </div>
  ) ;
}