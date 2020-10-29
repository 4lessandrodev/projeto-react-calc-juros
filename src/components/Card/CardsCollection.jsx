import { Card } from "./Index";
import { format } from '../../helpers/format';

export function CardsCollection({ itens }){
 return itens.map(({ periodo, taxaAcumulada, montanteAcumulado, rendimentoLiquido }) =>
  <Card taxa={format.formatarPorcentagem(taxaAcumulada)}
   rendimentos={format.formatarMoeda(rendimentoLiquido)}
   acumulado={format.formatarMoeda(montanteAcumulado)}
   mes={`# ${periodo}`} key={periodo}/> )
}