// importação de dependências:
import React, { ReactNode } from "react"

// lista de tipagem:
interface Indices {
    children: string | ReactNode
}

interface Topicos {
    id: string,
    titulo: string,
    children: string | ReactNode
}

// componentes:
const Indice: React.FC<Indices> = ({children}) => {
    return (
        <section className="w-[20%] px-3 text-sm">
            <h2 className="text-lg">Conteúdo da página</h2>
            {children}
        </section>
    );
}

const Topico: React.FC<Topicos> = ({id, titulo, children}) => {
    return (
        <section className="flex flex-col gap-3 text-justify hyphens-auto mb-5">
            <h2 className="text-xl font-medium" id={id}>{titulo}</h2>
            {children}
        </section>
    )
}

const Subtopico: React.FC<Topicos> = ({id, titulo, children}) => {
    return (
        <div className="flex flex-col gap-3 mt-5 text-justify hyphens-auto">
            <h3 className="text-lg font-medium" id={id}>{titulo}</h3>
            {children}
        </div>
    )
}

export { Indice, Subtopico, Topico }