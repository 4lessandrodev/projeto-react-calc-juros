import { Card } from "./Index";
import { format } from '../../helpers/format';
import {validateNumber as isNotNumber} from '../../helpers/validateNumber';


export function CardsCollection({ itens }) {
 return itens.map(({ periodo, taxaAcumulada, montanteAcumulado, rendimentoLiquido }) =>
    <Card taxa={format.formatarPorcentagem((!isNotNumber(taxaAcumulada)) ? taxaAcumulada : 0)}
       rendimentos={format.formatarMoeda((!isNotNumber(rendimentoLiquido)) ? rendimentoLiquido : 0)}
       acumulado={format.formatarMoeda((!isNotNumber(montanteAcumulado)) ? montanteAcumulado : 0)}
       mes={`# ${(!isNotNumber(periodo)) ? periodo : '0'}`} key={(!isNotNumber(periodo)) ? periodo : '0'}
    />)
}