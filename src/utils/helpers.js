export const formatDate = (date) => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const monthName = month[date.getMonth()]
  return `${monthName} ${date.getDate()}, ${date.getFullYear()}`
}
