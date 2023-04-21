import { Mail, Home, Clock, Eye, Columns } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Реальное время',
    icon: <Eye size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Рабочая смена',
    icon: <Clock size={20} />,
    navLink: '/second-page'
  },
  {
    id: 'secondPage',
    title: 'Простои',
    icon: <Columns size={20} />,
    navLink: '/error'
  }
]
