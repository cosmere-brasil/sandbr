"use client"

import React, { ReactNode, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface Copiaveis {
  titulo: string | ReactNode;
  children: ReactNode; // Permitir qualquer nó React
}

const Copiavel: React.FC<Copiaveis> = ({ titulo, children }) => {
  const preRef = useRef<HTMLDivElement>(null); // Referência ao elemento que será copiado

  // Função para copiar o conteúdo renderizado
  const handleCopy = () => {
    if (preRef.current) {
      // Seleciona o texto renderizado dentro do elemento
      const content = preRef.current.innerText;
      navigator.clipboard
        .writeText(content)
        .then(() => {
          alert("Código copiado!"); // Feedback ao usuário
        })
        .catch(() => {
          alert("Erro ao copiar o conteúdo.");
        });
    }
  };

  return (
    <div className="border rounded-md">
      <div className="border-b p-3 select-none flex items-center justify-between">
        {titulo === undefined ? <p>Copie</p> : <p>{titulo}</p>}
        <Button variant="outline" onClick={handleCopy}>
          Copiar <Copy />
        </Button>
      </div>

      <div
        className="bg-black py-3 px-5 rounded-md"
        ref={preRef} // Referência para o elemento
      >
        <pre className="max-h-72 flex flex-col gap-3 overflow-y-auto overflow-x-hidden font-mono whitespace-pre-wrap scrollbar-none">
          {children}
        </pre>
      </div>
    </div>
  );
};

export { Copiavel };