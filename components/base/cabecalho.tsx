// importação de dependências:
import React from "react";
import Image from "next/image";
import Link from "next/link";

// importação de componentes:
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// importação de ícones:
import { Search } from "lucide-react";

// importação de arquivos:
import Cobre from "@/public/cobre.svg";
import GitHub from "@/public/github.svg";
import Discord from "@/public/discord.svg";

//importação de variáveis:
import {
  conceitos,
  livros,
  mundos,
  outros,
  personagens,
  ItemCat,
} from "@/components/base/itens_do_menu/categorias";
import { universos, ItemUni } from "@/components/base/itens_do_menu/universos";

function Cabecalho() {
  const triger_props = "bg-transparent p-2 aria-expanded:text-destaque";
  const aItem_props = "w-[240px]";
  const a_props = "flex items-center";
  const ul_props = "flex flex-wrap gap-1 pb-2";
  const icons_size = 18;
  const tooltip_props = "text-white bg-[#0a0a0a] border-[#262626] border";

  return (
    <>
      <header className="sticky top-0 z-50 w-full h-14 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border flex items-center justify-center">
        <div className="w-[98%] flex items-center justify-between">
          <div className="flex jus items-center">
            <h1 className="flex items-center justify-center">
              <Link href="/">
                <Image
                  src={Cobre}
                  width={50}
                  height={50}
                  alt="Cosmere Brasil"
                />
              </Link>
            </h1>

            <NavigationMenu className="flex flex-col transition-none transform-none duration-0">
              {/*container do menu*/}
              <NavigationMenuList className="relative">
                <NavigationMenuItem>
                  {/*container das categorias*/}
                  <NavigationMenuTrigger className={triger_props}>
                    Categorias
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex-col lg:flex overflow-y-scroll scrollbar-none">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex flex-col lg:flex-wrap m-3 gap-3"
                    >
                      <AccordionItem value="livros" className={aItem_props}>
                        <AccordionTrigger>Livros</AccordionTrigger>
                        <AccordionContent>
                          <ul className={ul_props}>
                            {livros.map((livro) => (
                              <ItemCat
                                key={livro.nome}
                                nome={livro.nome}
                                link={livro.link}
                              />
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="personagens"
                        className={aItem_props}
                      >
                        <AccordionTrigger>Personagens</AccordionTrigger>
                        <AccordionContent>
                          <ul className={ul_props}>
                            {personagens.map((personagem) => (
                              <ItemCat
                                key={personagem.nome}
                                nome={personagem.nome}
                                link={personagem.link}
                              />
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="mundos" className={aItem_props}>
                        <AccordionTrigger>Mundos</AccordionTrigger>
                        <AccordionContent>
                          <ul className={ul_props}>
                            {mundos.map((mundo) => (
                              <ItemCat
                                key={mundo.nome}
                                nome={mundo.nome}
                                link={mundo.link}
                              />
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Accordion
                      type="single"
                      collapsible
                      className="flex flex-col lg:flex-wrap m-3 gap-3 overflow-y-scroll scrollbar-none"
                    >
                      <AccordionItem value="conceitos" className={aItem_props}>
                        <AccordionTrigger>Conceitos</AccordionTrigger>
                        <AccordionContent>
                          <ul className={ul_props}>
                            {conceitos.map((conceito) => (
                              <ItemCat
                                key={conceito.nome}
                                nome={conceito.nome}
                                link={conceito.link}
                              />
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="outros" className={aItem_props}>
                        <AccordionTrigger>Outros</AccordionTrigger>
                        <AccordionContent>
                          <ul className={ul_props}>
                            {outros.map((outro) => (
                              <ItemCat
                                key={outro.nome}
                                nome={outro.nome}
                                link={outro.link}
                              />
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/*fim do container das categorias */}

                <NavigationMenuItem>
                  {/*container dos universos*/}
                  <NavigationMenuTrigger className={triger_props}>
                    Universos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[550px] ">
                      {universos.map((universo) => (
                        <ItemUni
                          key={universo.nome}
                          nome={universo.nome}
                          link={universo.link}
                          descricao={universo.descricao}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/*fim do container dos universos*/}

                <NavigationMenuItem>
                  <Link href="/noticias" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md text-sm font-medium focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-transparent p-2 hover:text-destaque">
                      Notícias
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {/*fim do container do menu*/}
          </div>

          <div className="hidden lg:flex gap-3 mr-3 w-auto">
            <Button
              variant="outline"
              className="flex items-center justify-start pl-3 w-52 h-8"
            >
              <Search stroke="#b3b3b3" />
              <p className="text-[#b3b3b3]">Pesquisar</p>
            </Button>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href="https://github.com/sand-br/sandbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={a_props}
                  >
                    <Image
                      src={GitHub}
                      height={icons_size}
                      width={icons_size}
                      alt="GitHub"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent className={tooltip_props}>
                  <p>Contribua no GitHub</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href="https://discord.gg/wsMb237Fj8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={a_props}
                  >
                    <Image
                      src={Discord}
                      width={icons_size - 2}
                      height={icons_size - 2}
                      alt="Discord"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent className={tooltip_props}>
                  <p>Participe da nossa comunidade no Discord</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>
    </>
  );
}

export { Cabecalho };
