const Places = ["Campus", "Bivio", "Ito", "Apire", "Beans"];

// ForDebug
function DisplayStatus(){
    var Display = document.getElementById("Status");
    Display.innerHTML = "獲得状況 : " + localStorage.getItem('Stamp') + '<br>' + "ポイント数 : " + GetPoints() + '<br>' + "交換済み : " + localStorage.getItem('Exchanged');
    console.log("Logged By DisplayStatus");
    console.log("Done");
}

// ForDebug
function ResetStatus(){
    localStorage.clear();
    console.log("Logged By ResetStatus");
    console.log(localStorage.getItem('Stamp'));
    console.log("Logged By ResetStatus");
    console.log(localStorage.getItem('Exchanged'));
    var Display = document.getElementById("Status");
    Display.innerHTML = "続行するには初期化を実行するかリロードしてください。";
    console.log("続行するには初期化を実行するかリロードしてください。");
}

// 初期化
function Initialize(){
    if(localStorage.getItem('Stamp')){
        console.log("Logged By Initialize");
        console.log("Succeeded Accsess LocalStrage");
    }
    else{
        console.log("Logged By Initialize");
        console.log("Not Found LocalStrage");
        localStorage.setItem('Stamp', JSON.stringify({Campus:0, Bivio:0, Ito:0, Apire:0, Beans:0}));
        localStorage.setItem('Exchanged', false);
    }
}

Initialize();

// スタンプ獲得状況の取得

// GetStamp() 指定なしで全て取得
// return {Campus:int, Bivio:int, Ito:int, Apire:int, Beans:int}

// GetStamp("Campus")
// return int

// GetStamp(Placesに存在しない文字列)
// return -1
function GetStamp(Place = "all"){
    var Stamps = JSON.parse(localStorage.getItem('Stamp'));
    if(Place=="all"){
        return Stamps;
    }
    else if(Places.includes(Place)){
        return Stamps[Place];
    }
    else{
        return -1;
    }
}

// スタンプ獲得の処理

// SetStamp(Placesに存在する文字列, 1か2)
// return 0

// 不正な引数を入れた時
// return -1
function SetStamp(Place, Point){
    var Valid = CanStamp(Place, Point);
    if(Valid!=-1 && Valid){
        console.log("Logged By SetStamp");
        console.log(GetStamp());

        var Update = GetStamp();
        Update[Place] = Point;
        localStorage.setItem('Stamp', JSON.stringify(Update));
        
        console.log("Logged By SetStamp");
        console.log(GetStamp());
        return 0;
    }
    else{
        console.log("Denied");
        return -1;
    }
}

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
function CanStamp(Place, Point){
    if(Places.includes(Place) && (Point==1 || Point==2)){
        if(GetStamp(Place)>=Point){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return -1;
    }
}

// 現在のポイント数を取得
// GetPoints()
// return int 0~9

function GetPoints(){
    var Stamps = GetStamp();
    return Stamps.Apire + Stamps.Beans + Stamps.Bivio + Stamps.Campus + Stamps.Ito;
}

// 交換可能であるかを取得
// CanExchange()
// return bool

function CanExchange(){
    var AllChecked = true;
    for(var i=0; i<=4; i++){
        if(GetStamp(Places[i])==0){
            AllChecked = false;
            break;
        }
    }
    return ((GetPoints()>=5) && (localStorage.getItem('Exchanged')=="false") && (AllChecked));
}

// 交換済みに設定

// 交換条件を満たしている場合
// SetExchange()
// return 0

// 交換条件を満たしていない場合
// SetExchange()
// return -1

function SetExchange(){
    if(CanExchange()){
        console.log("Logged By SetExchange");
        console.log(localStorage.getItem('Exchanged'));

        localStorage.setItem('Exchanged', true);

        console.log("Logged By SetExchange");
        console.log(localStorage.getItem('Exchanged'));

        return 0;
    }
    else{
        console.log("Denied");
        return -1;
    }
}