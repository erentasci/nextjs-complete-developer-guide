interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);
  return <div>Editing snippet with id {id}</div>;
}
