"use client"

// importação de dependências:
import React, { ReactNode } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast"

// importação de componentes da shadcn:
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Caminhos {
  children: ReactNode;
}

interface ItemsDoCaminho {
  pronde: string,
  pagina: string,
}

interface Final {
  pagina: string
}

const estilo_do_item = "hover:text-white"
const Caminho: React.FC<Caminhos> = ({ children }) => {
  return (
    <Breadcrumb className="sticky top-14 h-8 bg-background flex items-center z-40">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href="/" className={estilo_do_item}>Enciclopédia</Link>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {children}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

const ItemDoCaminho: React.FC<ItemsDoCaminho> = ({ pronde, pagina }) => {
  return (
    <>
      <BreadcrumbItem className={estilo_do_item}>
        <Link href={pronde} className="estilo_do_item">{pagina}</Link>
      </BreadcrumbItem>

      <BreadcrumbSeparator />
    </>
  );
};

const Aqui: React.FC<Final> = ({pagina}) => {
  const { toast } = useToast()
  const copiar_link = () => {
    const url = window.location.href; // Obtém o URL atual
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast({description: "O link da página foi copiado."});
      })
      .catch((err) => {
        toast({description: "Houve um erro ao copiar o link. Se ele persistir, tente recarregar a página."});
        console.error(err);
      });
  };
  
  return(
    <>
      <BreadcrumbItem>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger onClick={copiar_link}>
              <BreadcrumbPage>{pagina}</BreadcrumbPage>
            </TooltipTrigger>
            <TooltipContent className="text-white bg-[#0a0a0a] border-[#262626] border">
              <p className="w-40 text-center">Parece que você já está aqui. Clique para copiar o link.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </BreadcrumbItem>
    </>
  );
}

export { Caminho, ItemDoCaminho, Aqui };