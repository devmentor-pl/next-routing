// app/api/users/route.ts
import { NextResponse } from 'next/server';

type User = {
    id: number,
    login: string,
    email: string,
}

const users: User[] = [
    {id: 1, login: 'u1', email: 'u1@gmail.com'},
    {id: 2, login: 'u2', email: 'u2@gmail.com'},
];

export async function GET() {
    return NextResponse.json(users);
}
// ...
export async function POST(req: Request) {
    const newUser = await req.json() as User;
    
    // zapisuje w pliku lub bazie danych

    // zwracam informacje o pomyślnym przebiegu operacji
    return NextResponse.json({ success: true, user: newUser });
}