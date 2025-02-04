// app/[locale]/cart/page.tsx
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const list = [
    {cat: 'c1', name: "Pierwszy produkt", price: 1},
    {cat: 'c1', name: "Drugi produkt", price: 2},
    {cat: 'c2', name: "Trzeci produkt", price: 3},
    {cat: 'c2', name: "Czwarty produkt", price: 4},
];

// ...
export default function CartPage() {
    const t = useTranslations('CartPage');
    // ...
    
    return <>
        <h1>{t('welcome')}</h1>
        <h2>{t('cart', { count: list.length} )}</h2>
        <ul>
            {list.map((p, i) => (
                <li key={ i }>{ p.name } ({p.price} PLN)</li>
            ))}
        </ul>
        <hr/>
        <Link href="/cart">current</Link> |&nbsp; 
        <Link href="/cart" locale="pl">PL</Link> |&nbsp; 
        <Link href="/cart" locale="en">EN</Link>
    </>
}