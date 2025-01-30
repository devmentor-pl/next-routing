// app/ip/page.tsx

import { getData } from './provider';

export default async function IPPage() {
    const data = await getData();

    return <section>
        <h1>Twoje IP to {data.ip}</h1>
    </section>
}
