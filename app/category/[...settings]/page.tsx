// app/category/[...settings]/page.tsx
import { notFound } from "next/navigation";

const list = [
    {cat: 'c1', name: "Pierwszy produkt", price: 1},
    {cat: 'c1', name: "Drugi produkt", price: 2},
    {cat: 'c2', name: "Trzeci produkt", price: 3},
    {cat: 'c2', name: "Czwarty produkt", price: 4},
]

interface CategoryProps { 
    params: Promise<{ settings: string[] }>
}

// ...
export default async function CategoryPage(
    { params }: CategoryProps
) {
    const { settings } = await params;
    // ...
    const [cat, sort] = settings;

    const products = list.filter(
        p => p.cat === cat
    ).sort((a, b) => sort === 'asc' 
        ? a.price - b.price : b.price - a.price
    )

    if(!products.length) {
        notFound();
    }
    
    return <ul>{ 
        products.map((p, i) => (
            <li key={ i }>{ p.name } ({p.price} PLN)</li>
        ))
    }</ul>
}
