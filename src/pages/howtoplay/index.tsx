import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { useState } from "react";

const HowToPlayModal = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(0);
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
    {
      title: "わからないときは",
      description:
        "ここまでの内容がよく分からない場合は、各チェックポイントの写真を撮ってください。景品交換所でスタッフが対応いたします。",
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onClose();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

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
            className="px-4 py-2 bg-gray-300 text-black rounded-lg"
            disabled={step === 0}
          >
            戻る
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            {step < steps.length - 1 ? "次へ" : "閉じる"}
          </button>
        </div>
      </div>
    </div>
  );
};

const HowToPlayPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {isModalOpen && <HowToPlayModal onClose={handleCloseModal} />}
    </div>
  );
};

export default HowToPlayPage;
