import { Blogs } from "@/app/_components/blogs";
import { blogsData } from "@/data/blogs.data";
import Footer from "../_components/footer/footer";
import HeaderNavbar from "../_components/header/header-navbar/header-navbar";
import Pagination from "../_components/pagination/pagination";
import { BLOGS_PER_PAGE } from "../configs/blogs-per-page";
export default function BlogsPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  // 🔹 گرفتن مقدار صفحه از URL به‌صورت امن
  const pageParam = Array.isArray(searchParams.page)
    ? searchParams.page[0]
    : searchParams.page;

  const activePage = pageParam ? Number(pageParam) : 1;

  // 🔹 تنظیم تعداد بلاگ در هر صفحه
  const blogsPerPage = BLOGS_PER_PAGE;

  // 🔹 محاسبه ایندکس شروع و پایان برای slice
  const startIndex = (activePage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  // 🔹 گرفتن بلاگ‌های قابل نمایش در این صفحه
  const visibleBlogs = blogsData.slice(startIndex, endIndex);

  return (
    <section>
      <header>
        <HeaderNavbar />
      </header>

      <main className="relative">
        <Blogs visibleBlogs={visibleBlogs} />
<section className="absolute bottom-0 left-1/2 transform -translate-x-1/2">          <Pagination
            totalItems={blogsData.length}
            activePage={activePage}
            itemsPerPage={blogsPerPage}
          />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}
