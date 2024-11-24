// importação de dependências:
import Link from "next/link";

// importação de componentes meus:
import { Indice, Lista, Item, SubItem } from "@/components/posts/indice";
import { Subtopico, Topico } from "@/components/posts/secoes";
import { Enlaçar, Ir, Referenciar, CriarReferencia } from "@/components/posts/ligacoes";
import { Imagem } from "@/components/posts/imagens";

// importação de componentes da shadcn:
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Revisado } from "@/components/posts/revisao";
import { Copiavel } from "@/components/posts/copiavel";

export default function Pagina() {
  const tooltip_props = "text-white bg-[#0a0a0a] border-[#262626] border";
  const ul_props = "flex flex-col gap-2 list-disc list-inside"
  const liint_props = "pl-6"
  const estilos = {
    caminho: "sticky top-14 h-8 bg-background flex items-center z-40",
    main: "w-screen lg:w-[80%] flex flex-col gap-3",
    article: "flex",
    post: "w-screen lg:w-[70%] px-5",
    complementar: "hidden lg:block w-[30%] flex flex-col items-center rounded-sm"
  }

  const ano = new Date().getFullYear().toString();
  
  return (
    <section className="max-w-screen flex justify-center mx-5 my-5">
      <Indice>
        <Lista>
          <Item item="A Sandbr"/>
          <Item item="Licença do conteúdo">
            <SubItem item="Como fazer atribuirção do conteúdo distribuído?"/>
          </Item>
          <Item item="Licença do código-fonte">
            <SubItem item="Principais termos da licença"/>
            <SubItem item="Como fazer atribuirção do código-fonte distribuído?"/>
          </Item>
          <Item item="Direitos autorais"/>
          <Item item="Limitações e restrições"/>
          <Item item="Atualizações de licença"/>
          <Item item="Notas"/>
        </Lista>
      </Indice>

      <main className={estilos.main}>
        <article className={estilos.article}>
          <section className={estilos.post}>
            <Breadcrumb className={estilos.caminho}>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link href="/" className="hover:text-white">
                    Enciclopédia
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <Link href="/sobre" className="hover:text-white">
                    Sobre
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="cursor-default">
                        <BreadcrumbPage>Licenças</BreadcrumbPage>
                      </TooltipTrigger>
                      <TooltipContent className={tooltip_props}>
                        <p>Parece que você já está aqui</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Topico titulo="A Sandbr">
              <p>A Sandbr é uma enciclopédia independente<Referenciar qual={1}/>, feita por fãs e dedicada exclusivamente às obras de <Enlaçar destino="/brandon-sanderson" texto="Brandon Sanderson"/>. Nosso objetivo é catalogar, organizar e compartilhar informações sobre suas criações, além de ampliar o acesso a conteúdos relacionados.</p>

              <p>Com base nesse objetivo, assumimos o compromisso de tornar esta enciclopédia aberta, colaborativa, livre e acessível — um espaço onde leitores e admiradores do autor possam encontrar informações organizadas, detalhadas e constantemente atualizadas sobre suas obras.</p>

              <p>Em alinhamento com esse compromisso, adotamos os modelos de licenciamento listados abaixo.</p>
            </Topico>

            <Topico titulo="Licença do conteúdo">
              <p>Todo o conteúdo documental da Sandbr é disponibilizado sob a licença <Ir destino="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.pt" texto="CC BY-NC-SA 4.0 Internacional"/> (Atribuição - Não Comercial - Compartilha Igual). Isso significa que:</p>

              <ul className={ul_props}>
                <li>Você pode compartilhar (copiar e redistribuir o material em qualquer formato ou meio).</li>
                <li>Você pode adaptar (remixar, transformar e criar a partir do material).
                </li>
              </ul>

              <p>Desde que você:</p>
              <ul className={ul_props}>
                <li>Dê os devidos créditos à Sandbr como fonte original.</li>
                <li>Não utilize o material para fins comerciais.</li>
                <li>Compartilhe o material derivado sob a mesma licença CC BY-NC-SA 4.0.</li>
              </ul>

              <Subtopico titulo="Como fazer atribuirção do conteúdo distribuído?">
                <p>Ao reutilizar ou compartilhar o conteúdo da Sandbr, pedimos que você inclua a seguinte nota de atribuição:</p>

                
                <Copiavel titulo="Atribuição de conteúdo">
                  <p>Informações extraídas da Sandbr. Disponível em sandbr.vercel.app. Licenciado sob CC BY-NC-SA 4.0.</p>
                </Copiavel>
              </Subtopico>
            </Topico>

            <Topico titulo="Licença do código-fonte">
              <p>O código-fonte da Sandbr está licenciado sob a <Ir destino="https://www.gnu.org/licenses/gpl-3.0.en.html#license-text" texto="GNU General Public License v3.0"/> (GPL v3) e disponível publicamente no <Ir destino="https://github.com/sand-br/sandbr" texto="GitHub"/>.</p>

              <Subtopico titulo="Principais termos da licença">
                <ul className="flex flex-col gap-2 list-disc list-inside">
                  <li>Liberdade de uso: Qualquer pessoa pode usar, modificar e distribuir o código, desde que respeite os termos da licença.</li>
                  <li>Código aberto: Qualquer redistribuição do código (modificado ou não) deve incluir o código-fonte e manter a mesma licença GPL v3.</li>
                  <li>Direito de modificações: Você pode alterar o código e redistribuir versões modificadas, mas deve garantir que elas também sejam distribuídas sob a GPLv3.</li>
                  <li>Garantias: O código é fornecido “como está”, sem garantias de funcionamento ou adequação a propósitos específicos.</li>
                </ul>
              </Subtopico>

              <Subtopico titulo="Como fazer atribuirção do código-fonte distribuído?">
                <p>Se você redistribuir o código, precisa incluir:</p>
                <ul className="flex flex-col gap-2 list-decimal list-inside">
                  <li>Uma cópia da licença GPL v3.</li>
                  <li>Um aviso de copyright mencionando os autores do projeto.</li>
                </ul>
                
                <Copiavel titulo="Atribuição de código-fonte">
                  <p>Copyright (C) {ano} Sandbr.</p> 

                  <p>Este programa é software livre: você pode redistribuí-lo e/ou modificá-lo sob os termos da Licença Pública Geral GNU (GNU General Public License) conforme publicada pela Free Software Foundation, na versão 3 da Licença, ou qualquer versão posterior.</p>
                    
                  <p>Este programa é distribuído na esperança de que seja útil, mas SEM NENHUMA GARANTIA; sem sequer a garantia implícita de COMERCIALIZAÇÃO ou de ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO. Consulte a Licença Pública Geral GNU para mais detalhes.</p>

                  <p>Você deve ter recebido uma cópia da Licença Pública Geral GNU junto com este programa. Caso contrário, veja &lt;https://www.gnu.org/licenses/&gt;.</p>
                </Copiavel>
              </Subtopico>
            </Topico>
          </section>

          <section className={estilos.complementar}>
            <Imagem fonte="https://i.pinimg.com/736x/46/39/1e/46391e4360de6e81710f15ac5fac7e20.jpg" alt="Sazed" autor="Rho_Concepts" link_do_autor="https://www.reddit.com/user/Rho_Concepts/" descricao="Um Inquisidor de Aço. Durante o Império Final, os inquisidores eram responsáveis por executar algumas das leis do Senhor Soberano."/>
          </section>
        </article>

        <article className={estilos.article}>
          <section className={estilos.post}>
            <Topico titulo="Direitos autorais">
              <p>Embora a Sandbr seja um projeto independente, as informações aqui presentes se baseiam nas obras de Brandon Sanderson e estão sujeitas aos direitos autorais do autor e de suas editoras. Não reivindicamos posse intelectual sobre as obras originais de Brandon Sanderson, mas apenas sobre o conteúdo produzido pela Sandbr (análises, resumos, tabelas e outros materiais organizados pelo projeto).</p>
            </Topico>

            <Topico titulo="Limitações e restrições">
              <ul className={ul_props}>
                <li>Imagens:
                  <ul className={ul_props}>
                    <li className={liint_props}>Qualquer imagem oficial das obras (capas, artes conceituais, etc.) é usada sob a prerrogativa de uso justo (fair use) para fins informativos, sem intenção comercial.</li>
                    <li className={liint_props}>Obras de artistas terceiros, como fanarts ou ilustrações relacionadas às obras de Brandon Sanderson, são utilizadas sob a prerrogativa de uso justo (fair use). E são usados dando o devido crédito ao artista sempre que possível. Reconhecemos a importância do trabalho de artistas independentes e incentivamos que os leitores visitem e apoiem seus perfis ou páginas pessoais. 
                      
                    <p className="pt-2">Caso algum artista identifique seu trabalho na Sandbr e deseje solicitar a remoção ou ajustes nos créditos, basta entrar em contato pelo e-mail <Ir destino="mailto:sandbr@proton.me" texto="sandbr@proton.me"/>.</p></li>
                  </ul>
                </li>
                <li>Conteúdo derivado:
                  <ul className={ul_props}>
                    <li className={liint_props}>Não são permitidas adaptações que deturpem ou prejudiquem a integridade do conteúdo original e/ou usado e postado nesta enciclopédia.</li>
                  </ul>
                </li>
                <li>Uso comercial:
                  <ul className={ul_props}>
                    <li className={liint_props}>A Sandbr não disponibiliza licenças de uso comercial para nenhum material feito por, usado e/ou distribuído na enciclopédia. Exceto quando explicitamente permitido no caso do código-fonte sob a licença <Ir destino="https://www.gnu.org/licenses/gpl-3.0.en.html#license-text" texto="GPL v3"/>.</li>
                  </ul>
                </li>
              </ul>
            </Topico>

            <Topico titulo="Atualizações de licença">
              <p>A Sandbr se reserva o direito de atualizar suas políticas de licenciamento para refletir mudanças no escopo do projeto ou demandas legais, sempre preservando o compromisso com a comunidade.</p>

              <p>Se você tem alguma dúvida ou deseja utilizar algum conteúdo fora dos termos acima, entre em contato pelo e-mail <Ir destino="mailto:sandbr@proton.me" texto="sandbr@proton.me"/>.</p>
            </Topico>

            <Topico titulo="Notas">
              <CriarReferencia qual={1}>
                A Sandbr não é afiliada a Brandon Sanderson, suas editoras ou quaisquer entidades relacionadas às suas obras e à publicação destas.
              </CriarReferencia>

              <Revisado quando="22/11/2024" quem="Raavë Aires" link="https://github.com/raave-aires/"/>
            </Topico>
          </section>

          <section className={estilos.complementar}>
            <Imagem fonte="https://i.imgur.com/bvd6b3A.png" alt="Shallan Davar" autor="Caio Santos" link_do_autor="https://www.instagram.com/caiosantosart/" descricao="Shallan Davar. Shallan é conhecida por ter um grande talento artistíco."/>
          </section>
        </article>
      </main>
    </section>
  );
}
