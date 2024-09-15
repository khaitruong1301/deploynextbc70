import { getAllProductAction, getProductByIdAction } from '@/app/actions/service/productApi';
import React from 'react';
import Image from 'next/image';

// Hàm này tạo metadata động cho trang dựa trên dữ liệu của sản phẩm
export async function generateMetadata({ params }) {
  const prodDetail = await getProductByIdAction(params.id);

  return {
    title: `${prodDetail.name} - Product Details`,
    description: prodDetail.description,
    openGraph: {
      title: prodDetail.name,
      description: prodDetail.description,
      images: [
        {
          url: prodDetail.image,
          alt: prodDetail.alias,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: prodDetail.name,
      description: prodDetail.description,
      image: prodDetail.image,
    },
  };
}

const Detail = async ({ params }) => {
  const prodDetail = await getProductByIdAction(params.id); // Lấy chi tiết sản phẩm theo ID

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <Image 
            width={500} 
            height={500} 
            style={{ width: '100%', height: 'auto' }} 
            crossOrigin="anonymous" 
            quality={100} 
            src={prodDetail.image} 
            alt={prodDetail.alias} 
            className='w-100' 
          />
        </div>
        <div className='col-md-8'>
          <h3>{prodDetail.name}</h3>
          <p>{prodDetail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
