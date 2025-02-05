import { NextResponse } from 'next/server';

const users = [
    {id: 1, login: 'u1', email: 'u1@gmail.com'},
    {id: 2, login: 'u2', email: 'u2@gmail.com'},
];

interface UsersParams {
    params: Promise<{id: string}>,
}
// ...
export async function GET(req: Request, { params }: UsersParams) {
    const { id } = await params;
    // ...

    const idParsed = Number(id);
    if (Number.isNaN(idParsed)) {
        return NextResponse.json(
            { error: "Invalid ID" }, 
            { status: 400 }
        );
    }

    const user = users.find(u => u.id === idParsed)
    if(!user) {
        return NextResponse.json(
            { error: "Not found" }, 
            { status: 404 }
        );
    }

    return NextResponse.json(user);
}
