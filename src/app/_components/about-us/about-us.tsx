import BlogAbout from "./blog-about/blog-about";
import HeaderAbout from "./header-about/header-about";
import Statictis from "./statictis-about/statictis-about";
import TeamMembers from "./team-members/team-members";

const AboutUs = () => {
  return (
    <>
      <section>
        <section>
          <HeaderAbout />
        </section>
        <section>
          <BlogAbout />
        </section>
        <section>
          <Statictis />
        </section>
        <section>
          <TeamMembers />
        </section>
      </section>
    </>
  );
};

export default AboutUs;
