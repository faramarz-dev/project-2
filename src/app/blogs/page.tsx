import { Blogs } from "@/app/_components/blogs";
import { blogsData } from "@/data/blogs.data";
import Footer from "../_components/footer/footer";
import HeaderNavbar from "../_components/header/header-navbar/header-navbar";
import Pagination from "../_components/pagination/pagination";
import { BLOGS_PER_PAGE } from "../configs/blogs-per-page";

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedParams = await searchParams;

  const pageParam = Array.isArray(resolvedParams.page)
    ? resolvedParams.page[0]
    : resolvedParams.page;

  const activePage = pageParam ? Number(pageParam) : 1;
  const blogsPerPage = BLOGS_PER_PAGE;

  const startIndex = (activePage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const visibleBlogs = blogsData.slice(startIndex, endIndex);

  return (
    <section>
      <header>
        <HeaderNavbar />
      </header>

      <main className="relative">
        <Blogs visibleBlogs={visibleBlogs} />
        <section className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <Pagination
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