import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useState } from "react";

import { Keypad } from "@/components/KeyPad";

interface PointPanelProps {
  point: number;
  exchanged: boolean;
  onExchange: () => void;
}

export const PointPanel = ({
  point,
  exchanged,
  onExchange,
}: PointPanelProps) => {
  const [tapCount, setTapCount] = useState(0);
  const [showKeypad, setShowKeypad] = useState(false);

  const handleTap = () => {
    if (tapCount + 1 >= 5 && exchanged == false && point >= 6) {
      setShowKeypad(true);
      setTapCount(0);
    } else {
      setTapCount(tapCount + 1);
    }
  };

  return (
    <div
      className="bg-white shadow-center rounded-xl p-6 py-4 w-full"
      onClick={handleTap}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">景品交換ポイント</h2>
        <p className="text-xl font-semibold">
          <span className="text-3xl">{point}</span>P
        </p>
      </div>
      {exchanged ? (
        <div className="flex items-center justify-end">
          <TaskAltIcon className="mr-1" fontSize="small" />
          <p className="text-right text-sm">交換済み</p>
        </div>
      ) : (
        showKeypad && (
          <Keypad
            onClose={() => setShowKeypad(false)}
            forceShow={showKeypad}
            onExchange={onExchange}
          />
        )
      )}
    </div>
  );
};
