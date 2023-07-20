// Faqs.tsx

import React from 'react'
import ProductItem from './productItem'
import { ProductData } from './productData'

const Products: React.FC = () => {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 border-t border-gray-800 lg:border-0 lg:pt-0'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12'>
            <h2 className='h2'>Hair Products</h2>
          </div>

          {/* Faqs */}
          <ul className='grid gap-8 md:grid-cols-2 xl:gap-x-16 lg:gap-y-12'>
            {ProductData.map((productItem, index) => (
              <ProductItem
                key={index}
                product={productItem.product}
                name={productItem.name}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Products
