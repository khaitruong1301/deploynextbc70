import Image from "next/image";
import styles from "./page.module.css";
import { getAllProductAction } from "./actions/service/productApi";
import Link from "next/link";

// Thêm metadata cho SEO
export const metadata = {
  title: 'Shoes App - Latest Shoe Collection',
  description: 'Discover the latest collection of shoes in our Shoes App. Find detailed descriptions and reviews for all products.',
  openGraph: {
    title: 'Shoes App - Latest Shoe Collection',
    description: 'Discover and shop the latest shoes collection with detailed reviews.',
    url: 'https://yourdomain.com',
    images: [
      {
        url: 'https://apistore.cybersoft.edu.vn/images/vans-black-black.png', // Thay bằng URL hình ảnh thực tế
        width: 800,
        height: 600,
        alt: 'Latest Shoes Collection',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shoes App - Latest Shoe Collection',
    description: 'Discover and shop the latest shoes collection with detailed reviews.',
    images: ['https://apistore.cybersoft.edu.vn/images/van-old-school.png'], // Thay bằng URL hình ảnh thực tế
  },
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Shoes App - Latest Shoe Collection',
    description: 'Discover and shop the latest collection of shoes.',
    url: 'https://yourdomain.com',
  },
};

const Home = async () => {
  const data = await getAllProductAction();

  return (
    <div className="container">
      <h3>Shoes App</h3>
      <div className="row">
        {data?.map((prod) => {
          return (
            <div className="col-4 mt-2" key={prod.id}>
              <div className="card">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  crossOrigin="anonymous"
                  width={500}
                  height={500}
                  className="w-100 h-auto"
                />
                <div className="card-body">
                  <h3>{prod.name}</h3>
                  <p>{prod.description}</p>
                  <Link href={`/detail/${prod.id}`} className="btn btn-success">
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;