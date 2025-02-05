// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
// import { notFound } from 'next/navigation';
// import path from 'path';
// import fs from 'fs';
import { getMessages } from 'next-intl/server';

interface LocaleProps {
    children: React.ReactNode, 
    // params: Promise<{ locale: string }>,
}

export default async function LocaleLayout({ children, /* params */ }: LocaleProps) {
    // const { locale } = await params;

    // Wczytujemy plik tłumaczeń
    // const filePath = path.join(process.cwd(), `locales/${locale}.json`);
    // if (!fs.existsSync(filePath)) {
    //     console.log('brak pliku')
    //     notFound();
    // }
    // const messages = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}
