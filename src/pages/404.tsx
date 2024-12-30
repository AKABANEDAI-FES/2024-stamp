import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import Link from "next/link";

import notFound from "@/assets/notfoundnya.png";
import Layout from "@/components/Layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 NotFound">
      <div className="flex flex-col items-center justify-center my-10 mx-5 text-black">
        <Image
          src={notFound.src}
          width={200}
          height={200}
          alt="404 Not Found"
        />
        <h1 className="text-3xl my-2">404 Not Found</h1>
        <p className="text-md">お探しのページが見つかりませんでした。</p>
        <Link
          href="/"
          className="bg-primary shadow-center rounded-xl mt-5 py-3 w-full flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center">
            <HomeIcon className="text-white me-2" />
            <p className="text-lg underline text-white">
              最初のページにもどる ＞
            </p>
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
