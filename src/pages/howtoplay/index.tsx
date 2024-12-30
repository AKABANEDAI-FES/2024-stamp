import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";

import { HomeLinkButton } from "@/components/HomeLinkButton";
import { Title } from "@/components/Title";

const HowToPlayPage = () => {
  return (
    <div className="mb-6 mx-5">
      <div className="mt-6">
        <Title title="あそびかた" />
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-semibold">1. スタンプを集める！</h2>
      </div>
      <div className="mt-3">
        <p>
          赤羽周辺にある5ヶ所のスポットを巡り、QRコードをスマートフォンのカメラで読み込んでスタンプを集めよう。
          各商業施設には2つずつチェックポイントが設置されているぞ。
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-semibold">2. ポイントを貯める！</h2>
      </div>
      <div className="mt-3">
        <p>
          スタンプを集めてポイントを貯めよう。6ポイントから景品交換ができ、9ポイント以上集めるとより豪華な景品が抽選対象に加わるぞ。
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-semibold">3. 景品を交換する！</h2>
      </div>
      <div className="mt-3">
        <p>
          大学祭当日に設置される景品交換所で、ポイントと引き換えに景品を受け取ろう。
        </p>
        <small>
          ※ 景品交換所はキャンパスに設置される予定です。
          <br />※ 11月2日の10時から18時,
          11月3日の10時から18時（最終入場17時半）のみ景品交換が可能です。
          <br />※
          景品の数には限りがあります。無くなり次第終了となりますので、ご了承ください。
        </small>
      </div>
      <div className="mt-6">
        <Title title="この企画について" />
      </div>
      <div className="flex items-center mt-5">
        <HelpOutlineIcon className="text-xl mr-2" />
        <h2 className="text-lg font-semibold">バネスタ！とは</h2>
      </div>
      <div className="mt-3">
        <p>
          バネスタ！は、赤羽西口の商業施設と東洋大学赤羽台キャンパスを巡るスタンプラリーゲームです。
          <br />
          お店を巡ってスタンプを集め、大学祭当日に設置される景品交換所で景品と交換することができます。
        </p>
      </div>
      <div className="flex items-center mt-5">
        <VolunteerActivismOutlinedIcon className="text-xl mr-2" />
        <h2 className="text-lg font-semibold">協力</h2>
        <small className="ms-2">※ カナ順</small>
      </div>
      <div className="mt-3">
        <ul>
          <li>アピレ 様</li>
          <li>イトーヨーカドー赤羽店 様</li>
          <li>ビーンズ赤羽 様</li>
          <li>ビビオ 様</li>
        </ul>

        <small>
          本企画は、上記の店舗様の多大なるご協力により実現いたしました。
          この場をお借りして、心より御礼申し上げます。
        </small>
      </div>
      <div className="mt-5">
        <HomeLinkButton />
      </div>
    </div>
  );
};

export default HowToPlayPage;
