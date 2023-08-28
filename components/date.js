import { format } from 'date-fns';

export default function NiceDate({data}) {
  return format(new Date(data.year, data.month-1, data.day), 'PPPP')
}
