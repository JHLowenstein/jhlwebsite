// ProductItem.tsx

import React from 'react'

interface Product {
  title: string
  description: string
}

interface ProductItemProps {
  product: string
  name: Product[]
}

const ProductItem: React.FC<ProductItemProps> = ({ product, name }) => {
  return (
    <li>
      <h4 className='text-xl font-medium mb-2'>{product}</h4>
      {name.map((item, index) => (
        <div key={index} className='ml-4'>
          {item.title && <p className='font-bold'>{item.title}</p>}
          <p className='text-gray-400 mt-2'>{item.description}</p>
        </div>
      ))}
    </li>
  )
}

export default ProductItem
