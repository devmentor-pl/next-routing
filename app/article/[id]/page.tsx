// app/article/[id]/page.tsx
import { notFound } from "next/navigation";

const list = [
    {id: 1, title: "Pierwszy artykuł"},
    {id: 2, title: "Drugi artykuł"},
    {id: 3, title: "Trzeci artykuł"},
]

interface ArticleProps { 
    params: { id: string } 
}

// ...
export default async function ArticlePage(
    { params }: ArticleProps
) {
    const { id } = await params;
    const article = list.find(
        art => art.id === Number(id)
    )

    if(!article) {
        notFound();
    }
    
    return <h1>{ article.title }</h1>
}