import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { useEffect, useState } from "react";

export const Attention = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(0); // 現在のステップを管理
  const [isVisible, setIsVisible] = useState(false); // モーダルの表示状態を管理
  const steps = [
    {
      title: "スタンプラリーで遊ぶ際の注意事項",
      description:
        "注意事項を守らないと集めたスタンプが消えてしまう場合があります。必ず確認してください。",
    },
    {
      title: "SafariやChromeでこのページを開いてください",
      description:
        "LINEやInstagramなど他のアプリの中でこのページを開いている時は、「ブラウザで開く」などのボタンを押してSafariやChromeに移動してください。",
    },
    {
      title: "プライベートモードは解除してください",
      description:
        "プライベートモードやシークレットモードはオフにしてください。また、参加中はブラウザの履歴を消さないでください。",
    },
  ];

  useEffect(() => {
    // localStorage から attention の値を確認
    const attention = localStorage.getItem("attention");
    if (attention !== "true") {
      setIsVisible(true); // 表示する
    }
  }, []);

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleClose(); // 閉じるときに localStorage を更新
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    localStorage.setItem("attention", "true"); // localStorage に true を設定
    setIsVisible(false); // モーダルを非表示にする
    onClose(); // 親コンポーネントの onClose を呼び出す
  };

  if (!isVisible) return null; // 表示する必要がない場合は null を返す
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl py-6 px-8 w-80 text-center relative">
        <WarningRoundedIcon
          style={{ fontSize: 64, color: "orange" }}
          className="mb-4"
        />
        <h1 className="text-xl font-bold mb-2">{steps[step].title}</h1>
        <p className="text-sm text-gray-600 mb-4">{steps[step].description}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleBack}
            className={`px-4 py-2 rounded-lg ${step === 0 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gray-300 text-black"}`}
            disabled={step === 0}
          >
            戻る
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            {step < steps.length - 1 ? "次へ" : "確認した"}
          </button>
        </div>
      </div>
    </div>
  );
};
