import Link from "next/link";
import { HeadTitle } from "../components";

const IndexPage = () => (
  <div className="home">
    <HeadTitle title="Home" />

    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default IndexPage;
