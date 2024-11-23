"use client"

// importação de dependências:
import React, { ReactNode, useRef } from "react";

// importação de componentes:
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"
import { Copy } from "lucide-react";

interface Copiaveis {
  titulo: string | ReactNode;
  children: ReactNode; // Permitir qualquer nó React
}

const Copiavel: React.FC<Copiaveis> = ({ titulo, children }) => {
  const { toast } = useToast()
  const preRef = useRef<HTMLDivElement>(null); // referência ao elemento que será copiado

  // função para copiar o conteúdo renderizado dentro do <pre>
  const handleCopy = () => {
    if (preRef.current) {
      // seleciona o texto renderizado dentro do elemento
      const content = preRef.current.innerText;
      navigator.clipboard
        .writeText(content)
        .then(() => {
          toast({
            duration: 5000,
            description: "O texto foi copiado.",
          })
        })
        .catch(() => {
          toast({
            duration: 5000,
            description: "Houve um erro ao copiar o texto. Se ele persistir, tente recarregar a página.",
          })
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
        ref={preRef} // referência para o elemento
      >
        <pre className="max-h-72 flex flex-col gap-3 overflow-y-auto overflow-x-hidden font-mono whitespace-pre-wrap scrollbar-none">
          {children}
        </pre>
      </div>
    </div>
  );
};

export { Copiavel };