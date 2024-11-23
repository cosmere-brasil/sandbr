import { differenceInDays, parse } from "date-fns";
import React, { ReactNode } from "react";

interface Revisao {
  quando: string,
  quem?: string | ReactNode,
  link?: string
}

const Revisado: React.FC<Revisao> = ({ quando, quem, link }) => {
  const dia = () => differenceInDays(new Date(), parse(quando, "dd/MM/yyyy", new Date()));
  
  if (isNaN(dia())) {
    return null; // se dia() for NaN, o componente retorna null, e não renderiza nada na tela
  }

  const Quem = ()=>{
    return (
      <>
        {link === undefined ? (
          <span>{quem}</span>
        ) : (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-destaque hover:underline">{quem}</a>
        )}
      </>
    );
  }

  return (
    <>  
      <p className="text-zinc-400 text-sm">
        {dia() < 0 ? null : dia() === 0 ? (
          <span>Esta página foi revisada hoje</span>
        ) : dia() === 1 ? (
          <span>Esta página foi revisada ontem</span>
        ) : (
          <span>Esta página foi revisada {dia()} dias atrás</span>
        )}
        {quem === undefined ? (
          <span>.</span>
        ) : (
          <span> por <Quem />.</span>
        )}
      </p>
      
    </>
  );
};

export { Revisado };