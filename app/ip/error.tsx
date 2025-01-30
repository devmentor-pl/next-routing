// app/ip/error.tsx
"use client"; // Musi być Client Component

export default function Error(
    { error, reset }: { error: Error; reset: () => void }
) {
  return (
    <div>
      <h2>❌ Wystąpił błąd: {error.message}</h2>
      <button onClick={() => reset()}>Spróbuj ponownie</button>
    </div>
  );
}