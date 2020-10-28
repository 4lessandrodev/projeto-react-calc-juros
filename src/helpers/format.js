export const format = {
 formatarMoeda: (value) => Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value),
 percentageFormatter: (value) => Intl.formateNumber(value / 100, { style: "percent", maximumFractionDigits: 2 })
};