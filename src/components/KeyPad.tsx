import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useEffect, useState } from "react";

import { CanExchange, SetExchange } from "@/utils/stamp";

interface KeypadProps {
  onClose: () => void;
  onExchange: () => void;
  forceShow?: boolean;
}

export const Keypad = ({
  onClose,
  onExchange,
  forceShow = false,
}: KeypadProps) => {
  const [input, setInput] = useState(""); // 入力された数字を管理
  const [isVisible, setIsVisible] = useState(false); // モーダルの表示状態を管理
  const maxInputLength = 4; // 入力する最大桁数

  useEffect(() => {
    if (forceShow) {
      setIsVisible(true); // 表示する
    }
  }, [forceShow]);

  const handleNumberClick = (number: string) => {
    if (input.length < maxInputLength) {
      setInput(input + number);
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleSubmit = () => {
    if (input == "1840" && CanExchange()) {
      SetExchange();
      setIsVisible(false);
      onExchange();
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  if (!isVisible) return null; // 表示する必要がない場合は null を返す
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* 縦幅を固定し、スクロールが可能なモーダル */}
      <div className="bg-white shadow-lg rounded-xl py-6 w-80 max-h-screen overflow-y-auto relative">
        {/* 閉じるボタン */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>
        <div className="bg-yellow-50 shadow-center border-yellow-500 border-2 rounded-xl p-3 my-5 mx-4">
          <div className="flex justify-start items-center">
            <WarningAmberIcon className="text-yellow-500 mr-2" />
            <p className="text-sm">
              スタッフが操作します。
              <br />
              誤って開いた場合は右上の「×」ボタンを押してください。
            </p>
          </div>
        </div>
        <p className="text-2xl font-mono mb-6 text-center">{input || "----"}</p>
        <div className="grid grid-cols-3 gap-4 mb-4 px-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "削除"].map((key, index) => (
            <button
              key={index}
              onClick={() =>
                key === "削除"
                  ? handleDelete()
                  : handleNumberClick(key.toString())
              }
              className={`px-4 py-3 rounded-lg ${
                key === "削除"
                  ? "bg-red-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
              disabled={key === ""}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            交換する
          </button>
        </div>
      </div>
    </div>
  );
};
