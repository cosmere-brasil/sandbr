// importação de dependências:

// importação de componentes meus:
import { Indice, Lista, Item } from "@/components/posts/indice";
import { Topico } from "@/components/posts/secoes";
import { Ir } from "@/components/posts/ligacoes";
import { Imagem } from "@/components/posts/imagens";
import { Revisado } from "@/components/posts/revisao";
import {
  Caminho,
  ItemDoCaminho,
  Aqui,
} from "@/components/partes_pequenas/caminho";
import { YouTube } from "@/components/partes_pequenas/youtube";
// importação de componentes da shadcn:

export default function Pagina() {
  const estilos = {
    caminho: "sticky top-14 h-8 bg-background flex items-center z-40",
    main: "w-screen lg:w-[80%] flex flex-col gap-3",
    article: "flex",
    post: "w-screen lg:w-[70%] px-5",
    complementar:
      "hidden lg:block w-[30%] flex flex-col items-center rounded-sm",
  };

  const hoje = (): string => {
    const data = new Date()
    const saudacao = (): string => {
      const agora = data.getHours();
  
      if (agora >= 0 && agora < 6) {
        return "Boa madrugada";
      } else if (agora >= 6 && agora < 12) {
        return "Bom dia";
      } else if (agora >= 12 && agora < 18) {
        return "Boa tarde";
      } else {
        return "Boa noite";
      }
    }
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];
    const mes = data.getMonth();


    return `${saudacao()}! Hoje é dia ${data.getDate().toString()} de ${meses[mes]} de 12.${data.getFullYear().toString().slice(1)} da Era Humana.`
  }

  const ano = new Date().getFullYear().toString();

  return (
    <section className="max-w-screen flex justify-center mx-5 lg:my-5">
      <Indice>
        <Lista>
          <Item item="Calendário Holoceno" />
          <Item item="Estrutura e conversão" />
          <Item item="Saiba mais" />
        </Lista>
      </Indice>

      <main className={estilos.main}>
        <article className={estilos.article}>
          <section className={estilos.post}>
            <Caminho>
              <ItemDoCaminho pronde="/sobre" pagina="Sobre" />
              <Aqui pagina="Calendário holoceno" />
            </Caminho>

            <Topico titulo="Calendário Holoceno">
              <p className="text-zinc-400">{hoje()}</p>
              <p>
                O Calendário Holoceno, também conhecido como Era Holocena ou Era Humana (abreviado como EH), é uma adaptação do calendário <Ir destino="https://pt.wikipedia.org/wiki/Calend%C3%A1rio_gregoriano" texto="Juliano-Gregoriano"/>. Seu objetivo é estabelecer uma contagem de anos mais adequada
                para representar a história humana e o início do período
                geológico <Ir destino="https://pt.wikipedia.org/wiki/Holoceno" texto="Holoceno"/>. Para isso, adiciona-se 10.000 anos aos anos do calendário Gregoriano após o início da <Ir destino="https://pt.wikipedia.org/wiki/Era_Comum" texto="Era Comum"/> (EC) e 10.001 anos aos anos antes da Era Comum (AEC).
              </p>

              <p>Apesar do nome, o ano 1 EH não marca precisamente o início do Holoceno, mas é um ponto de referência arbitrário para o começo da chamada Era Humana. Essa escolha simplifica a conversão entre o Calendário Holoceno e o calendário Gregoriano, especialmente pela inexistência do ano zero nos sistemas Juliano e Gregoriano.</p>
            </Topico>

            <Topico titulo="Estrutura e conversão">
              <ul className="flex flex-col gap-3 list-inside list-disc">
                <li>O ano 0 EH corresponde ao ano 10.001 AEC no calendário Gregoriano.</li>
                <li>O ano 10.000 AEC equivale ao ano 1 EH.</li>
                <li>Para anos após o início da Era Comum, basta adicionar o número 1 à esquerda do ano Gregoriano para convertê-lo ao Calendário Holoceno.</li>
              </ul>

              <p>O ano {ano} EC torna-se 12.{ano.slice(1)} EH.</p>
            </Topico> 

            <Topico titulo="Saiba mais">
              <p>Para mais detalhes sobre o Calendário Holoceno, veja a página sobre ele na <Ir destino="https://pt.wikipedia.org/wiki/Calend%C3%A1rio_Holoceno" texto="Wikipédia"/>.</p>
              <p>Ou o vídeo abaixo do canal <Ir destino="https://www.youtube.com/@kurzgesagt" texto="Kurzgesagt – In a Nutshell"/>.</p>
              <YouTube idDoVideo="czgOWmtGVGs" titulo="Vídeo: Uma nova história para a humanidade - A Era Humana." subtitulo="Áudio em inglês. Legendas em português disponíveis."/>
            </Topico>

            <Revisado
              quando="24/11/2024"
              quem="Raavë Aires"
              link="https://github.com/raave-aires/"
            />
          </section>

          <section className={estilos.complementar}>
            <Imagem
              fonte="https://i.pinimg.com/736x/bc/8f/74/bc8f744b4413d52faa351cc865e845ba.jpg"
              alt="Sazed"
              autor="Diego López"
              link_do_autor="https://www.instagram.com/diegolopez_artist"
              descricao="Sazed, o Guardador de Terris que compilou boa parte do conhecimento que ajudou a restaurar Scadrial."
            />
          </section>
        </article>
      </main>
    </section>
  );
}
