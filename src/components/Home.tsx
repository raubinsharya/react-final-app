import Carousels from "./carousel";
import FeatureProduct from "./feature-product";

import Electronic from "../assets/img/electronics1.jpg";
import Jewelery from "../assets/img/jewelery.png";
import Mens from "../assets/img/20833148.jpg";
import Womens from "../assets/img/womens.jpg";

export default function Home() {
  const images: any = [Electronic, Jewelery, Mens, Womens];
  return (
    <div>
      <Carousels images={images} />
      <FeatureProduct />
    </div>
  );
}
