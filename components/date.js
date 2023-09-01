import { format } from 'date-fns';

export default function NiceDate({data}) {
  return format(new Date(data.year, data.month-1, data.day), 'PPPP')
}

export function MonthYear({data}) {
    return format(new Date(data.year, data.month-1, data.day), 'MMMM u')
}

export function DayDate({data}) {
   return format(new Date(data.year, data.month-1, data.day), 'cccc eo')
}

