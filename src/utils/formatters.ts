export const formatToBRLNumber = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2, // Garante 2 casas decimais
    maximumFractionDigits: 2,
  }).format(value)
}
