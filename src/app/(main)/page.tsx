import Banner_1 from "../_components/banners/banner-1/banner-1";
import Favorites from "../_components/favorites/favorites";
import Categories from "../_components/categories/categories";
import Banner_2 from "../_components/banners/banner-2/banner-2";
import BestSellers from "../_components/best-sellers/best-sellers";
import Follow from "../_components/follow/follow";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Banner_1 />
        </section>
        <section>
          <Favorites />
        </section>
        <section>
          <Categories />
        </section>
        <section>
          <Banner_2 />
        </section>
        <section>
          <BestSellers />
        </section>
        <section>
          <Follow />
        </section>
      </main>
    </>
  );
}
