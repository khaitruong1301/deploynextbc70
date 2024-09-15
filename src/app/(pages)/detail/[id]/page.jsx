import { getAllProductAction, getProductByIdAction } from '@/app/actions/service/productApi';
import React from 'react';
import Image from 'next/image';

// Hàm này tạo ra danh sách các ID mà ứng dụng sẽ tạo trang tĩnh cho chúng
// export async function generateStaticParams() {
//   // Giả sử bạn có một hàm lấy tất cả sản phẩm, trả về danh sách ID sản phẩm
//   const products = await getAllProductAction(); // Hàm này cần được triển khai nếu chưa có
  
//   return products.map(product => ({
//     id: product.id.toString(), // Trả về ID dưới dạng string
//   }));
// }

const Detail = async ({ params }) => {
  const prodDetail = await getProductByIdAction(params.id); // Lấy chi tiết sản phẩm theo ID
  console.log('data', prodDetail);

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
