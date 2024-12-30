import checkpoints from "@/assets/checkpoints.json";
import { CheckPoint } from "@/types/checkpoint";

const Places = ["Campus", "Bivio", "Ito", "Apire", "Beans"];

// ForDebug
export const DisplayStatus = () => {
  console.log(
    "獲得状況 : " +
      localStorage.getItem("Stamp") +
      "ポイント数 : " +
      GetPoints() +
      "交換済み : " +
      localStorage.getItem("Exchanged"),
  );
  console.log("Logged By DisplayStatus");
  console.log("Done");
};

// ForDebug
export const ResetStatus = () => {
  localStorage.clear();
  console.log("Logged By ResetStatus");
  console.log(localStorage.getItem("Stamp"));
  console.log("Logged By ResetStatus");
  console.log(localStorage.getItem("Exchanged"));
  console.log("続行するには初期化を実行するかリロードしてください。");
  console.log("続行するには初期化を実行するかリロードしてください。");
};

// 初期化
export const Initialize = () => {
  if (localStorage.getItem("Stamp")) {
    if (!localStorage.getItem("Exchanged")) {
      localStorage.setItem("Exchanged", "false");
      console.log("Exchanged By Initialize");
    }
    console.log("Logged By Initialize");
    console.log("Succeeded Accsess LocalStrage");
  } else {
    console.log("Logged By Initialize");
    console.log("Not Found LocalStrage");
    localStorage.setItem(
      "Stamp",
      JSON.stringify({ Campus: 0, Bivio: 0, Ito: 0, Apire: 0, Beans: 0 }),
    );
    localStorage.setItem("Exchanged", "false");
  }
};

// スタンプ獲得状況の取得

// GetStamps() 全て取得
// return {Campus:int, Bivio:int, Ito:int, Apire:int, Beans:int}
export const GetStamps = () => {
  const Stamps = JSON.parse(localStorage.getItem("Stamp") || "{}") as {
    [key: string]: number;
  };
  return Stamps;
};

// GetStamp("Campus") 一つ取得
// return int

// GetStamp(Placesに存在しない文字列)
// return -1
export const GetStamp = (Place: string) => {
  const Stamps = JSON.parse(localStorage.getItem("Stamp") || "{}") as {
    [key: string]: number;
  };
  if (Places.includes(Place)) {
    return Stamps[Place] ?? 0;
  } else {
    return -1;
  }
};

// スタンプ獲得の処理

// SetStamp(Placesに存在する文字列, 1か2)
// return 0

// 不正な引数を入れた時
// return -1
export const SetStamp = (Place: string, Point: number) => {
  Initialize();
  const Valid = CanStamp(Place, Point);
  if (Valid != -1 && Valid) {
    console.log("Logged By SetStamp");
    console.log(GetStamps());

    const Update = GetStamps();
    if (typeof Update === "object") {
      Update[Place] = Point;
      localStorage.setItem("Stamp", JSON.stringify(Update));

      console.log("Logged By SetStamp");
      console.log(GetStamps());
      return 0;
    } else {
      console.log("Logged By SetStamp");
      console.log("Failed Accsess LocalStrage");
      return -1;
    }
  } else {
    console.log("Denied");
    return -1;
  }
};

// スタンプ獲得の処理 あるいは クイズの処理に移行して良いかの判定

// 獲得先が既に1ポイントある時
// CanStamp(Placesに存在する文字列, 1)
// return false
// CanStamp(Placesに存在する文字列, 2)
//return true

// 未獲得の時
// CanStamp(Placesに存在する文字列, 1か2)
// return true

// 獲得先が既に2ポイントある時
// CanStamp(Placesに存在する文字列, 1か2)
// return false

// 不正な引数を入れた時
// return -1
export const CanStamp = (Place: string, Point: number) => {
  if (Places.includes(Place) && (Point == 1 || Point == 2)) {
    const currentStamp = GetStamp(Place);
    if (typeof currentStamp === "number" && currentStamp >= 0) {
      if (currentStamp >= Point) {
        return false;
      } else {
        return true;
      }
    } else {
      return -1;
    }
  }
};

// 現在のポイント数を取得
// GetPoints()
// return int 0~9

// スタンプ獲得状況が取得できない場合
// return -1
export const GetPoints = () => {
  const Stamps = GetStamps();
  if (typeof Stamps === "object") {
    return (
      (Stamps.Apire ?? 0) +
      (Stamps.Beans ?? 0) +
      (Stamps.Bivio ?? 0) +
      (Stamps.Campus ?? 0) +
      (Stamps.Ito ?? 0)
    );
  } else {
    return -1;
  }
};

// 交換可能であるかを取得
// CanExchange()
// return bool

export const CanExchange = () => {
  /*let AllChecked = true;
  for (let i = 0; i <= 4; i++) {
    if (GetStamp(Places[i]) == 0) {
      AllChecked = false;
      break;
    }
  }*/

  return (
    GetPoints() >= 5 && localStorage.getItem("Exchanged") == "false" /*&&
    AllChecked*/
  );
};

export const AlreadyExchanged = () => {
  return localStorage.getItem("Exchanged") == "true";
};

// 交換済みに設定

// 交換条件を満たしている場合
// SetExchange()
// return 0

// 交換条件を満たしていない場合
// SetExchange()
// return -1

export const SetExchange = () => {
  if (CanExchange()) {
    console.log("Logged By SetExchange");
    console.log(localStorage.getItem("Exchanged"));

    localStorage.setItem("Exchanged", "true");

    console.log("Logged By SetExchange");
    console.log(localStorage.getItem("Exchanged"));

    return 0;
  } else {
    console.log("Denied");
    return -1;
  }
};

export const GetCheckPoints = (): CheckPoint[] => {
  return Object.values(checkpoints);
};

export const GetCheckPoint = (id: string): CheckPoint | undefined => {
  const checkpoints = GetCheckPoints();
  return checkpoints.find((checkpoint) => checkpoint.id === id);
};

export const GetCheckPointPaths = () => {
  return GetCheckPoints().map((checkpoint) => ({
    params: { id: checkpoint.id },
  }));
};
