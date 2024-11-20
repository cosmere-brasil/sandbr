// importação de componentes:
import { Spinner } from "@/components/pecas_soltas/spinner";

export default function Construindo(){
    return (
        <main className="w-screen h-screen flex items-center justify-center gap-3">
            <div className="w-[500px] flex flex-col items-center justify-center text-center gap-5 select-none">
                <Spinner/>
                <p >Infelizmente, ainda não temos essa definição. Mas você pode nos ajudar a aumentar a quantidade de termos e definições disponíveis no Sandbr contribuindo através do <a href="https://github.com/cosmere-brasil/cosmere-brasil" target="_blank" rel="noopener noreferrer" className="text-destaque hover:underline">GitHub</a>.</p>
                <p>É simples e gratuito, mas exige um pouco de conhecimento em inglês e/ou em programação.</p>
            </div>
        </main>
    )
}