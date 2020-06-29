import Link from "next/link";
import { HeadTitle } from "../../components";
import style from "./index.scss";

const AboutPage = () => (
  <div className={style.about}>
    <HeadTitle title="About" />
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </div>
);

export default AboutPage;
