export function calculate(capital = 0, juros = 0, periodo = 1) {

 if (typeof capital !== 'number' || typeof juros !== 'number' || typeof periodo !== 'number'){
  console.error('A number is required');
  return alert('A number is required');
 }

 const JUROS_MENSAIS = [];
 const CAPITAL_INICIAL = capital;
 let rendimentoAcumulado = 0;

 const resultMes = (capital, taxaJuros, periodo, rendimentoAcumulado) => {
  return {
   periodo,
   rendimentos:(((((taxaJuros / 100) * capital) / CAPITAL_INICIAL) * 100) + rendimentoAcumulado),
   capital: (((taxaJuros / 100) * capital) + capital)
  }
 }

 for (let index = 1; index <= periodo; index++) {
  let ultimoResult = resultMes(capital, juros, index, rendimentoAcumulado);
  JUROS_MENSAIS.push(ultimoResult);
  capital = ultimoResult.capital;
  rendimentoAcumulado = ultimoResult.rendimentos;
 }

 return JUROS_MENSAIS;
}

