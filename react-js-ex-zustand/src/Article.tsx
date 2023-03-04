interface ArticleProps {
    title: string;
    content: string;
}
  
export default function Article({ title, content }: ArticleProps) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}
