import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import { HomeLinkButton } from "@/components/HomeLinkButton";
import Layout from "@/components/Layout";
import { Title } from "@/components/Title";

export const PrizePage = () => {
  return (
    <Layout pageTitle="ホーム">
      <div className="mb-6 mx-5">
        <div className="mt-6">
          <Title title="景品について" />
        </div>
        <div className="bg-yellow-50 shadow-center border-yellow-500 border-2 rounded-xl p-4 mt-5 w-full">
          <div className="flex justify-start items-center">
            <WarningAmberIcon className="text-yellow-500 mr-2" />
            <p>景品交換はキャンパスにて、大学祭期間中のみ実施いたします。</p>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center mt-5">
            <MilitaryTechIcon className="text-xl mr-2" />
            <h2 className="text-lg font-semibold">10 〜 9 ポイント</h2>
          </div>
          <div className="mt-5">
            <p>下記より抽選で一点</p>
          </div>
          <div className="mt-5">
            <div className="bg-white shadow-center rounded-xl p-6 py-4 w-full">
              <h2 className="text-xl font-semibold">特賞</h2>

              <ul className="list-inside list-disc">
                <li>東京タワー招待券</li>
                <li>箱根ガラスの森美術館ペア招待券</li>
              </ul>
              <h2 className="text-xl font-semibold mt-5">物品賞</h2>

              <ul className="list-inside list-disc">
                <li>モバイルバッテリー</li>
                <li>フルーツティーセット</li>
                <li>ポップコーンセット</li>
                <li>今治タオル＆ハンドソープセット</li>
                <li>ブルドックソース</li>
                <li>小川珈琲ドリップコーヒー</li>
              </ul>
              <h2 className="text-xl font-semibold mt-5">チケット賞</h2>

              <ul className="list-inside list-disc">
                <li>ビッグエコー室料50％OFF券</li>
                <li>安楽亭3000円割引券</li>
                <li>餃子の王将割引券</li>
                <li>ジャンカラ19時以降室料30％オフ</li>
              </ul>
              <h2 className="text-xl font-semibold mt-5">参加賞</h2>
              <ul className="list-inside list-disc">
                <li>アニマルクッキー</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center mt-5">
            <MilitaryTechIcon className="text-xl mr-2" />
            <h2 className="text-lg font-semibold">8 〜 6 ポイント</h2>
          </div>
          <div className="mt-5">
            <p>下記より抽選で一点</p>
          </div>
          <div className="mt-5">
            <div className="bg-white shadow-center rounded-xl p-6 py-4 w-full">
              <h2 className="text-xl font-semibold">物品賞</h2>
              <ul className="list-inside list-disc">
                <li>モバイルバッテリー</li>
                <li>フルーツティーセット</li>
                <li>ポップコーンセット</li>
                <li>今治タオル＆ハンドソープセット</li>
                <li>ブルドックソース</li>
                <li>小川珈琲ドリップコーヒー</li>
              </ul>
              <h2 className="text-xl font-semibold mt-5">チケット賞</h2>
              <ul className="list-inside list-disc">
                <li>ビッグエコー室料50％OFF券</li>
                <li>安楽亭3000円割引券</li>
                <li>餃子の王将割引券</li>
                <li>ジャンカラ19時以降室料30％オフ券</li>
              </ul>
              <h2 className="text-xl font-semibold mt-5">参加賞</h2>
              <ul className="list-inside list-disc">
                <li>アニマルクッキー</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <HomeLinkButton />
        </div>
      </div>
    </Layout>
  );
};

export default PrizePage;
