// importação de componentes:
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Significados {
    palavra: string
    significado: string,
}

const tooltip_props = "text-white bg-[#0a0a0a] border-[#262626] border";

const Significado: React.FC<Significados> = ({ palavra, significado }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger><span className="underline">{palavra}</span></TooltipTrigger>
        <TooltipContent className={tooltip_props}>
          <p>{significado}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export { Significado }
