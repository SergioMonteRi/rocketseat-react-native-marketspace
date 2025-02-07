export const formatToBRLNumber = (value?: number): string => {
  if (!value) {
    return 'R$ 0,00'
  }

  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}
