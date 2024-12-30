import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useState } from "react";

import { Attention } from "@/components/Attention";

export const AttentionButton = () => {
  const [showAttention, setShowAttention] = useState(false);

  const handleButtonClick = () => {
    setShowAttention(true);
  };

  return (
    <div>
      <div
        className="bg-primary shadow-center rounded-xl py-4 w-full flex items-center justify-center"
        onClick={handleButtonClick}
      >
        <WarningAmberIcon className="text-white me-2" />
        <p className="underline text-white">注意事項 ＞</p>
      </div>
      {showAttention && (
        <Attention
          onClose={() => setShowAttention(false)}
          forceShow={showAttention}
        />
      )}
    </div>
  );
};
