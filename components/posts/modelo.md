// importação de dependências:
import Link from "next/link";

// importação de componentes meus:
import { Indice, Subtopico, Topico } from "@/components/posts/secoes";
import { Item, Lista, SubItem } from "@/components/posts/indice";

// importação de componentes da shadcn:
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// importação de variáveis:
import { estilos } from "@/lib/constants/estilos_de_posts";

export default function Construindo() {
  const tooltip_props = "text-white bg-[#0a0a0a] border-[#262626] border";

  return (
    <section className="max-w-screen flex justify-center mx-5 my-5">
      <Indice>
        <Lista>
          <Item link="introducao" item="Introdução" />

          <Item link="reinos" item="Reinos do Cosmere">
            <SubItem link="reino_fisico" item="Reino Físico" />
            <SubItem link="reino_cognitivo" item="Reino Cognitivo" />

            <Item link="reino_espiritual" item="Reino Espiritual">
              <SubItem link="intencao" item="Intenção" />
              <SubItem link="identidade" item="Identidade" />
              <SubItem link="conexao" item="Conexão" />
              <SubItem link="sorte" item="Sorte" />
            </Item>
          </Item>

          <Item link="adonalsium" item="Adonalsium" />

          <Item link="investidura" item="Investidura">
            <SubItem link="natureza_e_aparencia" item="Natureza e aparência" />
            <SubItem link="origem_e_ruptura" item="Origem e ruptura" />
            <SubItem link="lascas" item="Lascas" />
            <SubItem
              link="interacao_e_corrupcao"
              item="Interação e corrupção"
            />
            <SubItem link="anti_investidura" item="Anti-Investidura" />
          </Item>

          <Item link="perpendicularidade" item="Perpendicularidade" />

          <Item link="planetas" item="Planetas">
            <SubItem link="tri-fractario" item="Sistemas tri-fractários" />
            <SubItem link="bi-fractario" item="Sistemas bi-fractários" />
            <SubItem link="mono_fractario" item="Sistemas mono-fractários" />
            <SubItem link="sem_fractal" item="Sistemas sem fractal" />
            <SubItem link="outros_sistemas" item="Outros sistemas" />
          </Item>

          <Item link="historia" item="História">
            <SubItem link="pre-ruptura" item="Pré-Ruptura" />
            <SubItem link="ruptura" item="A Ruptura de Adonalsium" />
            <SubItem link="missao_odio" item="Missão do Ódio" />
            <SubItem link="ascensao_de_harmonia" item="Ascensão de Harmonia" />
            <SubItem
              link="verdadeira_desolacao"
              item="A verdadeira Desolação"
            />
            <SubItem link="trell_scadrial" item="Trell e Scadrial" />
            <SubItem link="era_espacial" item="A era espacial" />
          </Item>

          <Item link="saltadores" item="Saltadores de mundos">
            <SubItem link="hoid" item="Hoid" />
            <Item link="grupos_de_saltadores" item="Grupos de Saltadores">
              <SubItem link="decimo_setimo" item="O Décimo Sétimo Fractal" />
              <SubItem link="luz_prateada" item="A Luz Prateada" />
              <SubItem link="os_ire" item="Os Irish" />
              <SubItem
                link="fantasmas_de_sangue"
                item="Os Fantasmas de Sangue"
              />
            </Item>
            <SubItem link="outros_grupos" item="Outros grupos" />
          </Item>

          <Item link="desenvolvimento" item="Desenvolvimento" />
          <Item link="livros" item="Livros da Cosmere">
            <SubItem link="lancados" item="Lançados" />
            <SubItem link="por_vir" item="Planejados" />
            <SubItem link="ordem" item="Ordens de leitura" />
          </Item>

          <Item link="adicional" item="Leituras adicionais" />
          <Item link="notas" item="Notas" />
          <Item link="bibliografia" item="Bibliografia" />
        </Lista>
      </Indice>

      <main className={estilos.main}>
        <Breadcrumb className={estilos.caminho}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/" className="hover:text-white">
                Enciclopédia
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-default">
                    <BreadcrumbPage>Brandon Sanderson</BreadcrumbPage>
                  </TooltipTrigger>
                  <TooltipContent className={tooltip_props}>
                    <p>Parece que você já está aqui</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article className={estilos.article}>
          <section className={estilos.post}>

          </section>

          <section className={estilos.complementar}>

          </section>
        </article>
      </main>
    </section>
  );
}
