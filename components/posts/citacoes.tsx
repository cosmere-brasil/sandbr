// importação de dependências:
import { ReactNode } from "react";
import Link from "next/link";

// lista de tipagem:
interface Citação {
  citacao: string;
  children?: string | ReactNode;
}

interface Menção {
  quem: string
}

// componentes:
const Citar: React.FC<Citação> = ({ citacao, children }) => {
  return (
    <p className="text-zinc-400 text-base italic">
      “{citacao}” {children}
    </p>
  );
};

const Mencionar: React.FC<Menção> = ({ quem }) => {
  return(
    <Link className="text-destaque hover:underline" href={`/cosmere/personagens/${quem.toLowerCase()}`}>{quem}</Link>
  )
};

export { Citar, Mencionar }