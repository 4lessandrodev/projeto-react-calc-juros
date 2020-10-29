export const format = {
 formatarMoeda: (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value),
 formatarPorcentagem: (value) => new Intl.NumberFormat('pt-BR', { style: "percent", maximumFractionDigits: 2 }).format((value / 100))
};