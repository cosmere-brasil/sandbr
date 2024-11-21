// importação de dependências:
import React, { ReactNode } from "react";
import Link from "next/link";

// listas de tipagem:
interface Indices {
  children?: string | ReactNode
}

interface Items {
  link: string,
  item: string,
  children?: string | ReactNode;
}

interface SubItems {
  link: string,
  item: string
}

// estilos:
const estilo_de_link = "text-zinc-400 hover:text-destaque hover:underline"

// componentes:
const Item: React.FC<Items> = ({ link, item, children }) => {
  return (
    <li>
      <Link href={`#${link}`} className={estilo_de_link} scroll={true}>{item}</Link>
      <ul className="list-disc list-inside pl-4">{children}</ul>
    </li>
  );
};

const Lista: React.FC<Indices> = ({ children }) => {
  return (
    <ol className="list-decimal list-inside flex flex-col gap-2">
      {children}
    </ol>
  );
};

const SubItem: React.FC<SubItems> = ({ link, item }) => {
  return (
    <li>
      <Link href={`#${link}`} className={estilo_de_link} scroll={true}>{item}</Link>
    </li>
  ) ;
};

export { Item, Lista, SubItem };
