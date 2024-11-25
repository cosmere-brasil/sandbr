"use client";

// importação de dependências:
import React, { ReactNode } from "react";

// importação de componentes:
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";

interface Videos_YouTube {
  titulo?: string | ReactNode,
  subtitulo?: string,
  idDoVideo: string,
}

const YouTube: React.FC<Videos_YouTube> = ({ titulo, subtitulo, idDoVideo }) => {
  return (
    <div className="border rounded-md aspect-video flex flex-col justify-center">
      <div className="border-b p-3 select-none flex items-center justify-between">
        {titulo === undefined ? <p>Vídeo no YouTube</p> : <p className="flex flex-col">{titulo}{subtitulo === undefined ? null : <span className="text-sm text-zinc-400">{subtitulo}</span>}</p>}
      </div>

      <div className="aspect-video">
        <iframe src={`https://www.youtube-nocookie.com/embed/${idDoVideo}`} className="w-full h-full rounded-md"  title="Vídeo do YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export { YouTube };
