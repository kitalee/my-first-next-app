import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>This is news</h1>
      <ul>
        <li>
          <Link href="/news/test-detail">Go to test detail page</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
