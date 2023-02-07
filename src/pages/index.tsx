import { Form } from "@/components/shared/form";
import connection from "@/database/connection";

export default function Home() {
  const inputs = [
    {
      name: "title",
      type: "text",
      placeholder: "Título",
    },
    {
      name: "image",
      type: "text",
      placeholder: "URL da imagem",
    },
    {
      name: "author",
      type: "text",
      placeholder: "Autor",
    },
    {
      name: "resume",
      type: "text",
      placeholder: "Sinopse",
    },
    {
      name: "price",
      type: "number",
      placeholder: "Preço",
    },
  ];

  return (
    <div>
      <h1>Livros de Programação</h1>
      <Form inputs={inputs} submitUrl="/api/create-book" />
    </div>
  );
}

export async function getServerSideProps() {
  await connection;

  return {
    props: {
      isConnected: true,
    },
  };
}
