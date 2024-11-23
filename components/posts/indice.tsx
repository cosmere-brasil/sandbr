// importação de dependências:
import React, { ReactNode } from "react";
import Link from "next/link";

// listas de tipagem:
interface Campos {
  children: string | ReactNode;
}

interface Indices {
  children?: string | ReactNode
}

interface Items {
  item: string,
  children?: string | ReactNode;
}

interface SubItems {
  item: string
}

// estilos:
const estilo_de_link = "text-zinc-400 hover:text-destaque hover:underline"

// componentes:
const Indice: React.FC<Campos> = ({ children }) => {
  return (
    <aside className="w-[18%] h-screen pr-3 text-sm top-[76px] sticky overflow-y-scroll scrollbar-none pb-20 border-r">
      <h2 className="text-lg">Conteúdo da página</h2>
      {children}
    </aside>
  );
};

const Item: React.FC<Items> = ({ item, children }) => {
  return (
    <li>
      <Link href={`#${item.toLowerCase().replace(/\s/g, '_')}`} className={estilo_de_link} scroll={true}>{item}</Link>
      <ul className="list-disc list-inside pl-4">{children}</ul>
    </li>
  );
};

const Lista: React.FC<Indices> = ({ children }) => {
  return (
    <ol className="list-decimal list-inside flex flex-col gap-2 pt-3 pb-10">
      {children}
    </ol>
  );
};

const SubItem: React.FC<SubItems> = ({ item }) => {
  return (
    <li>
      <Link href={`#${item.toLowerCase().replace(/\s/g, '_')}`} className={estilo_de_link} scroll={true}>{item}</Link>
    </li>
  ) ;
};

export { Indice, Item, Lista, SubItem };
