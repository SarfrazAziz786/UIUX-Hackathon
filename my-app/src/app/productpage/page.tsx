import Breadcrumb from '@/app/components/shoppageComponent/ProductPageComp/Breadcrumb'
import React from 'react'
import ProductDetail from '@/app/components/shoppageComponent/ProductPageComp/ProductDetail'
import ProductTabs from '@/app/components/shoppageComponent/ProductPageComp/ProductTabs'
import RelatedProduct from '@/app/components/shoppageComponent/ProductPageComp/RelatedProduct'


const ProductPage = () => {
  return (
    <div>
      <Breadcrumb/>
      <ProductDetail/>
      <ProductTabs/>
      <RelatedProduct/>
    </div>
  )
}

export default ProductPage
