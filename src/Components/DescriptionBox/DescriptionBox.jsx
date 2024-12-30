import React from 'react'
import './DescriptionBox.css' 
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
            An e-commerce website is a platform that allows you to sell and buy products on the internet. It is a website that facilitates the transaction of goods and services between the seller and the buyer. The website acts as a virtual store where customers can browse through the products, add them to the cart, and make a purchase. The e-commerce website provides a platform for sellers to showcase their products and reach a wider audience. It also provides a convenient and secure way for customers to shop online. The e-commerce website is an essential tool for businesses looking to expand their reach and increase their sales.
        </p>
        <p>
            E-commerce websites come in different shapes and sizes, ranging from small online stores to large marketplaces. They can be built using various technologies and platforms, depending on the requirements of the business. Some of the popular e-commerce platforms include Shopify, WooCommerce, Magento, and BigCommerce. These platforms provide a range of features and functionalities to help businesses create an online store that meets their needs.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
