import Link from "next/link";
import { db } from "@/db";
export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <Link
      href={`/snippets/${snippet.id}`}
      key={snippet.id}
      className="flex justify-between items-center p-2 rounded border">
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  ));

  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <h1 className="text-xl bold">Snippets</h1>

        <Link href="/snippets/new" className="p-2 rounded border">
          <div> New </div>
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
