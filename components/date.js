import { format } from 'date-fns';

export default function NiceDate({data}) {
  return format(new Date(data.year, data.month-1, data.day), 'PPPP')
}

export function MonthYear({data}) {
    return format(new Date(data.year, data.month-1, data.day), 'MMMM u')
}

export function Month({data}) {
    return format(new Date(data.year, data.month-1, data.day), 'MMMM')
}

export function DayDate({data}) {
   const date = new Date(data.year, data.month-1, data.day)
   return format(new Date(data.year, data.month-1, data.day), 'cccc do')
}

