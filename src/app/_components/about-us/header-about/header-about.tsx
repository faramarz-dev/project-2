import BreadCrumb from "../../bread-crumb/bread-crumb";

export default function HeaderAbout() {
  const BreadCrumpItem = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about-us",
    },
  ];

  return (
    <>
      <div className=" h-[500px] bg-gradient-to-br from-pink-100 via-blue-100 to to-white">
        <div className="flex flex-col items-center justify-center h-full gap-5">
          <h1 className="text-7xl font-santa">About Us</h1>
          <BreadCrumb items={BreadCrumpItem} />
        </div>
      </div>
    </>
  );
}
