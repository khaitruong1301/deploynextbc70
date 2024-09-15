import Image from "next/image";
import styles from "./page.module.css";
import { getAllProductAction } from "./actions/service/productApi";
import Link from "next/link";


//server component 
const Home = async () => {
  const data = await getAllProductAction();
  return (
    <div className="container">
      <h3>Shoes app</h3>
      <div className="row">
        {data?.map((prod) => {
          return <div className="col-4 mt-2" key={prod.id}>
            <div className="card">
              <Image src={prod.image} alt={prod.name} crossOrigin="anonymous" width={500} height={500} className="w-100 h-auto" />
              <div className="card-body">
                <h3>{prod.name}</h3>
                <p>{prod.description}</p>
                <Link href={`/detail/${prod.id}`} className="btn btn-success">Xem chi tiết</Link>

              </div>
            </div>
          </div>

        })}
      </div>


    </div>
  )
}
export default Home


//Cách làm sai : vì script gọi api lấy data thực hiện tại client
// export default function Home() {
//   const [arrProduct, setArrProduct] = useState([]);

//   useEffect(() => {
//     getAllProduct();
//   },[])
//   return (
//   const getAllProduct = async() => {
//     const res = await fetch('/api/product');
//     const data = await res.json();
//     console.log(data);
//     setArrProduct(data.content);
//   }
//     <div className={styles.page}>
//         <h3>Shoes shop</h3>
//         {arrProduct.map((prod)=>{
//           return <h3 key={prod.id}>
//               {prod.name}
//           </h3>
//         })}
//     </div>
//   );
// }
