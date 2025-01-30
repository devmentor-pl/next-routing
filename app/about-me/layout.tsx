// app/about-me/layout.tsx

import { ReactNode } from 'react';

export default function AboutMeLayout(
    { children } : { children: ReactNode }
) {
    return <main>{ children }</main>
}