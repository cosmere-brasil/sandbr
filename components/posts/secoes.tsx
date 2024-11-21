// importação de dependências:
import React, { ReactNode } from "react";

// lista de tipagem:


interface Topicos {
  titulo: string;
  children: string | ReactNode;
}

// componentes:
const Topico: React.FC<Topicos> = ({ titulo, children }) => {
  return (
    <section className="flex flex-col gap-3 text-justify hyphens-auto mb-5">
      <h2 className="text-xl font-medium scroll-mt-[76px]" id={titulo.toLowerCase().replace(/\s/g, '_')}>
        {titulo}
      </h2>
      {children}
    </section>
  );
};

const Subtopico: React.FC<Topicos> = ({ titulo, children }) => {
  return (
    <div className="flex flex-col gap-3 mt-5 text-justify hyphens-auto">
      <h3 className="text-lg font-medium scroll-mt-[76px]" id={titulo.toLowerCase().replace(/\s/g, '_')}>
        {titulo}
      </h3>
      {children}
    </div>
  );
};

export { Subtopico, Topico };
