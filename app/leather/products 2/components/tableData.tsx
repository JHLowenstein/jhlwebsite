import { StaticImageData } from 'next/image'

export interface TabData {
  title: string
  img: StaticImageData
  tag: string
  excerpt: string
  link: string
}

export const tableData: TabData[] = [
  {
    title: 'Tab 1',
    img: require('@/public/images/testtubes.png'), // Replace with the actual image path
    tag: 'Tag 1',
    excerpt: 'Excerpt 1',
    link: '/link1',
  },
  {
    title: 'Tab 2',
    img: require('@/public/images/testtubes.png'), // Replace with the actual image path
    tag: 'Tag 2',
    excerpt: 'Excerpt 2',
    link: '/link2',
  },
  // Add more tab objects as needed
]
