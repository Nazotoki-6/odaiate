// WORD HUNTER - ゆか × たけ
// 878 high-familiarity curated topics are embedded so the game also works when index.html is opened directly.
const TOPICS = [{"genre":"食べ物・飲み物","topic":"カレー"},{"genre":"食べ物・飲み物","topic":"ラーメン"},{"genre":"食べ物・飲み物","topic":"寿司"},{"genre":"食べ物・飲み物","topic":"焼肉"},{"genre":"食べ物・飲み物","topic":"ピザ"},{"genre":"食べ物・飲み物","topic":"ハンバーガー"},{"genre":"食べ物・飲み物","topic":"パスタ"},{"genre":"食べ物・飲み物","topic":"うどん"},{"genre":"食べ物・飲み物","topic":"そば"},{"genre":"食べ物・飲み物","topic":"餃子"},{"genre":"食べ物・飲み物","topic":"チャーハン"},{"genre":"食べ物・飲み物","topic":"お好み焼き"},{"genre":"食べ物・飲み物","topic":"たこ焼き"},{"genre":"食べ物・飲み物","topic":"天ぷら"},{"genre":"食べ物・飲み物","topic":"唐揚げ"},{"genre":"食べ物・飲み物","topic":"おにぎり"},{"genre":"食べ物・飲み物","topic":"サンドイッチ"},{"genre":"食べ物・飲み物","topic":"食パン"},{"genre":"食べ物・飲み物","topic":"フランスパン"},{"genre":"食べ物・飲み物","topic":"ケーキ"},{"genre":"食べ物・飲み物","topic":"プリン"},{"genre":"食べ物・飲み物","topic":"ドーナツ"},{"genre":"食べ物・飲み物","topic":"アイスクリーム"},{"genre":"食べ物・飲み物","topic":"チョコレート"},{"genre":"食べ物・飲み物","topic":"クッキー"},{"genre":"食べ物・飲み物","topic":"ポテトチップス"},{"genre":"食べ物・飲み物","topic":"たい焼き"},{"genre":"食べ物・飲み物","topic":"団子"},{"genre":"食べ物・飲み物","topic":"大福"},{"genre":"食べ物・飲み物","topic":"りんご"},{"genre":"食べ物・飲み物","topic":"みかん"},{"genre":"食べ物・飲み物","topic":"いちご"},{"genre":"食べ物・飲み物","topic":"ぶどう"},{"genre":"食べ物・飲み物","topic":"バナナ"},{"genre":"食べ物・飲み物","topic":"桃"},{"genre":"食べ物・飲み物","topic":"スイカ"},{"genre":"食べ物・飲み物","topic":"メロン"},{"genre":"食べ物・飲み物","topic":"梨"},{"genre":"食べ物・飲み物","topic":"柿"},{"genre":"食べ物・飲み物","topic":"パイナップル"},{"genre":"食べ物・飲み物","topic":"レモン"},{"genre":"食べ物・飲み物","topic":"トマト"},{"genre":"食べ物・飲み物","topic":"きゅうり"},{"genre":"食べ物・飲み物","topic":"キャベツ"},{"genre":"食べ物・飲み物","topic":"にんじん"},{"genre":"食べ物・飲み物","topic":"玉ねぎ"},{"genre":"食べ物・飲み物","topic":"じゃがいも"},{"genre":"食べ物・飲み物","topic":"さつまいも"},{"genre":"食べ物・飲み物","topic":"とうもろこし"},{"genre":"食べ物・飲み物","topic":"枝豆"},{"genre":"食べ物・飲み物","topic":"納豆"},{"genre":"食べ物・飲み物","topic":"豆腐"},{"genre":"食べ物・飲み物","topic":"卵"},{"genre":"食べ物・飲み物","topic":"牛乳"},{"genre":"食べ物・飲み物","topic":"チーズ"},{"genre":"食べ物・飲み物","topic":"ヨーグルト"},{"genre":"食べ物・飲み物","topic":"コーヒー"},{"genre":"食べ物・飲み物","topic":"紅茶"},{"genre":"食べ物・飲み物","topic":"緑茶"},{"genre":"食べ物・飲み物","topic":"コーラ"},{"genre":"食べ物・飲み物","topic":"オレンジジュース"},{"genre":"食べ物・飲み物","topic":"ビール"},{"genre":"食べ物・飲み物","topic":"日本酒"},{"genre":"食べ物・飲み物","topic":"ワイン"},{"genre":"食べ物・飲み物","topic":"ハンバーグ"},{"genre":"食べ物・飲み物","topic":"オムライス"},{"genre":"食べ物・飲み物","topic":"グラタン"},{"genre":"食べ物・飲み物","topic":"シチュー"},{"genre":"食べ物・飲み物","topic":"麻婆豆腐"},{"genre":"食べ物・飲み物","topic":"エビフライ"},{"genre":"食べ物・飲み物","topic":"とんかつ"},{"genre":"食べ物・飲み物","topic":"焼きそば"},{"genre":"食べ物・飲み物","topic":"焼き鳥"},{"genre":"食べ物・飲み物","topic":"牛丼"},{"genre":"食べ物・飲み物","topic":"親子丼"},{"genre":"食べ物・飲み物","topic":"カツ丼"},{"genre":"食べ物・飲み物","topic":"ちらし寿司"},{"genre":"食べ物・飲み物","topic":"刺身"},{"genre":"食べ物・飲み物","topic":"しゃぶしゃぶ"},{"genre":"食べ物・飲み物","topic":"すき焼き"},{"genre":"食べ物・飲み物","topic":"鍋料理"},{"genre":"食べ物・飲み物","topic":"カップラーメン"},{"genre":"食べ物・飲み物","topic":"ホットドッグ"},{"genre":"食べ物・飲み物","topic":"フライドポテト"},{"genre":"食べ物・飲み物","topic":"パフェ"},{"genre":"食べ物・飲み物","topic":"クレープ"},{"genre":"食べ物・飲み物","topic":"ホットケーキ"},{"genre":"食べ物・飲み物","topic":"シュークリーム"},{"genre":"食べ物・飲み物","topic":"バウムクーヘン"},{"genre":"食べ物・飲み物","topic":"カステラ"},{"genre":"食べ物・飲み物","topic":"ゼリー"},{"genre":"食べ物・飲み物","topic":"かき氷"},{"genre":"食べ物・飲み物","topic":"ガム"},{"genre":"食べ物・飲み物","topic":"キャンディ"},{"genre":"食べ物・飲み物","topic":"マシュマロ"},{"genre":"食べ物・飲み物","topic":"梅干し"},{"genre":"食べ物・飲み物","topic":"味噌汁"},{"genre":"食べ物・飲み物","topic":"漬物"},{"genre":"食べ物・飲み物","topic":"目玉焼き"},{"genre":"食べ物・飲み物","topic":"ウインナー"},{"genre":"食べ物・飲み物","topic":"ベーコン"},{"genre":"動物・生き物","topic":"犬"},{"genre":"動物・生き物","topic":"猫"},{"genre":"動物・生き物","topic":"ライオン"},{"genre":"動物・生き物","topic":"トラ"},{"genre":"動物・生き物","topic":"ゾウ"},{"genre":"動物・生き物","topic":"キリン"},{"genre":"動物・生き物","topic":"パンダ"},{"genre":"動物・生き物","topic":"コアラ"},{"genre":"動物・生き物","topic":"ペンギン"},{"genre":"動物・生き物","topic":"イルカ"},{"genre":"動物・生き物","topic":"クジラ"},{"genre":"動物・生き物","topic":"サメ"},{"genre":"動物・生き物","topic":"カメ"},{"genre":"動物・生き物","topic":"ウサギ"},{"genre":"動物・生き物","topic":"ハムスター"},{"genre":"動物・生き物","topic":"リス"},{"genre":"動物・生き物","topic":"キツネ"},{"genre":"動物・生き物","topic":"タヌキ"},{"genre":"動物・生き物","topic":"オオカミ"},{"genre":"動物・生き物","topic":"クマ"},{"genre":"動物・生き物","topic":"シカ"},{"genre":"動物・生き物","topic":"ウマ"},{"genre":"動物・生き物","topic":"ウシ"},{"genre":"動物・生き物","topic":"ヒツジ"},{"genre":"動物・生き物","topic":"ヤギ"},{"genre":"動物・生き物","topic":"ブタ"},{"genre":"動物・生き物","topic":"サル"},{"genre":"動物・生き物","topic":"ゴリラ"},{"genre":"動物・生き物","topic":"チンパンジー"},{"genre":"動物・生き物","topic":"カンガルー"},{"genre":"動物・生き物","topic":"カバ"},{"genre":"動物・生き物","topic":"サイ"},{"genre":"動物・生き物","topic":"シマウマ"},{"genre":"動物・生き物","topic":"ラクダ"},{"genre":"動物・生き物","topic":"アルパカ"},{"genre":"動物・生き物","topic":"ナマケモノ"},{"genre":"動物・生き物","topic":"カワウソ"},{"genre":"動物・生き物","topic":"アザラシ"},{"genre":"動物・生き物","topic":"ラッコ"},{"genre":"動物・生き物","topic":"ハリネズミ"},{"genre":"動物・生き物","topic":"モグラ"},{"genre":"動物・生き物","topic":"ネズミ"},{"genre":"動物・生き物","topic":"コウモリ"},{"genre":"動物・生き物","topic":"フクロウ"},{"genre":"動物・生き物","topic":"ワシ"},{"genre":"動物・生き物","topic":"タカ"},{"genre":"動物・生き物","topic":"ハト"},{"genre":"動物・生き物","topic":"スズメ"},{"genre":"動物・生き物","topic":"カラス"},{"genre":"動物・生き物","topic":"ニワトリ"},{"genre":"動物・生き物","topic":"ヒヨコ"},{"genre":"動物・生き物","topic":"アヒル"},{"genre":"動物・生き物","topic":"ガチョウ"},{"genre":"動物・生き物","topic":"クジャク"},{"genre":"動物・生き物","topic":"フラミンゴ"},{"genre":"動物・生き物","topic":"ダチョウ"},{"genre":"動物・生き物","topic":"ツバメ"},{"genre":"動物・生き物","topic":"カモメ"},{"genre":"動物・生き物","topic":"インコ"},{"genre":"動物・生き物","topic":"オウム"},{"genre":"動物・生き物","topic":"カエル"},{"genre":"動物・生き物","topic":"イモリ"},{"genre":"動物・生き物","topic":"ヤモリ"},{"genre":"動物・生き物","topic":"ヘビ"},{"genre":"動物・生き物","topic":"ワニ"},{"genre":"動物・生き物","topic":"トカゲ"},{"genre":"動物・生き物","topic":"カメレオン"},{"genre":"動物・生き物","topic":"金魚"},{"genre":"動物・生き物","topic":"メダカ"},{"genre":"動物・生き物","topic":"マグロ"},{"genre":"動物・生き物","topic":"カツオ"},{"genre":"動物・生き物","topic":"サケ"},{"genre":"動物・生き物","topic":"フグ"},{"genre":"動物・生き物","topic":"タコ"},{"genre":"動物・生き物","topic":"イカ"},{"genre":"動物・生き物","topic":"エビ"},{"genre":"動物・生き物","topic":"カニ"},{"genre":"動物・生き物","topic":"クラゲ"},{"genre":"動物・生き物","topic":"ヒトデ"},{"genre":"動物・生き物","topic":"ウニ"},{"genre":"動物・生き物","topic":"貝"},{"genre":"動物・生き物","topic":"カブトムシ"},{"genre":"動物・生き物","topic":"クワガタ"},{"genre":"動物・生き物","topic":"セミ"},{"genre":"動物・生き物","topic":"バッタ"},{"genre":"動物・生き物","topic":"カマキリ"},{"genre":"動物・生き物","topic":"チョウ"},{"genre":"動物・生き物","topic":"トンボ"},{"genre":"動物・生き物","topic":"ホタル"},{"genre":"動物・生き物","topic":"アリ"},{"genre":"動物・生き物","topic":"ハチ"},{"genre":"動物・生き物","topic":"テントウムシ"},{"genre":"動物・生き物","topic":"ダンゴムシ"},{"genre":"動物・生き物","topic":"ミミズ"},{"genre":"動物・生き物","topic":"カタツムリ"},{"genre":"自然・場所","topic":"海"},{"genre":"自然・場所","topic":"プール"},{"genre":"自然・場所","topic":"山"},{"genre":"自然・場所","topic":"川"},{"genre":"自然・場所","topic":"湖"},{"genre":"自然・場所","topic":"滝"},{"genre":"自然・場所","topic":"森"},{"genre":"自然・場所","topic":"ジャングル"},{"genre":"自然・場所","topic":"砂漠"},{"genre":"自然・場所","topic":"島"},{"genre":"自然・場所","topic":"海岸"},{"genre":"自然・場所","topic":"砂浜"},{"genre":"自然・場所","topic":"温泉"},{"genre":"自然・場所","topic":"公園"},{"genre":"自然・場所","topic":"遊園地"},{"genre":"自然・場所","topic":"動物園"},{"genre":"自然・場所","topic":"水族館"},{"genre":"自然・場所","topic":"映画館"},{"genre":"自然・場所","topic":"図書館"},{"genre":"自然・場所","topic":"学校"},{"genre":"自然・場所","topic":"病院"},{"genre":"自然・場所","topic":"駅"},{"genre":"自然・場所","topic":"空港"},{"genre":"自然・場所","topic":"コンビニ"},{"genre":"自然・場所","topic":"スーパー"},{"genre":"自然・場所","topic":"デパート"},{"genre":"自然・場所","topic":"レストラン"},{"genre":"自然・場所","topic":"カフェ"},{"genre":"自然・場所","topic":"ファミレス"},{"genre":"自然・場所","topic":"居酒屋"},{"genre":"自然・場所","topic":"ホテル"},{"genre":"自然・場所","topic":"旅館"},{"genre":"自然・場所","topic":"キャンプ場"},{"genre":"自然・場所","topic":"神社"},{"genre":"自然・場所","topic":"寺"},{"genre":"自然・場所","topic":"城"},{"genre":"自然・場所","topic":"教会"},{"genre":"自然・場所","topic":"東京"},{"genre":"自然・場所","topic":"京都"},{"genre":"自然・場所","topic":"大阪"},{"genre":"自然・場所","topic":"北海道"},{"genre":"自然・場所","topic":"沖縄"},{"genre":"自然・場所","topic":"横浜"},{"genre":"自然・場所","topic":"鎌倉"},{"genre":"自然・場所","topic":"富士山"},{"genre":"自然・場所","topic":"東京タワー"},{"genre":"自然・場所","topic":"東京スカイツリー"},{"genre":"自然・場所","topic":"東京ドーム"},{"genre":"自然・場所","topic":"甲子園球場"},{"genre":"自然・場所","topic":"東京ディズニーランド"},{"genre":"自然・場所","topic":"東京ディズニーシー"},{"genre":"自然・場所","topic":"ユニバーサル・スタジオ・ジャパン"},{"genre":"自然・場所","topic":"渋谷"},{"genre":"自然・場所","topic":"新宿"},{"genre":"自然・場所","topic":"原宿"},{"genre":"自然・場所","topic":"秋葉原"},{"genre":"自然・場所","topic":"浅草"},{"genre":"自然・場所","topic":"お台場"},{"genre":"自然・場所","topic":"横浜中華街"},{"genre":"自然・場所","topic":"江の島"},{"genre":"自然・場所","topic":"箱根"},{"genre":"自然・場所","topic":"軽井沢"},{"genre":"自然・場所","topic":"奈良公園"},{"genre":"自然・場所","topic":"鳥取砂丘"},{"genre":"自然・場所","topic":"琵琶湖"},{"genre":"自然・場所","topic":"桜島"},{"genre":"自然・場所","topic":"阿蘇山"},{"genre":"自然・場所","topic":"屋久島"},{"genre":"自然・場所","topic":"ハワイ"},{"genre":"自然・場所","topic":"グアム"},{"genre":"自然・場所","topic":"パリ"},{"genre":"自然・場所","topic":"ロンドン"},{"genre":"自然・場所","topic":"ニューヨーク"},{"genre":"自然・場所","topic":"ローマ"},{"genre":"自然・場所","topic":"エッフェル塔"},{"genre":"自然・場所","topic":"自由の女神"},{"genre":"自然・場所","topic":"ピラミッド"},{"genre":"自然・場所","topic":"万里の長城"},{"genre":"自然・場所","topic":"グランドキャニオン"},{"genre":"自然・場所","topic":"ナイアガラの滝"},{"genre":"自然・場所","topic":"宇宙"},{"genre":"自然・場所","topic":"月"},{"genre":"自然・場所","topic":"太陽"},{"genre":"自然・場所","topic":"星空"},{"genre":"自然・場所","topic":"虹"},{"genre":"自然・場所","topic":"雪"},{"genre":"自然・場所","topic":"雨"},{"genre":"自然・場所","topic":"雷"},{"genre":"自然・場所","topic":"台風"},{"genre":"自然・場所","topic":"桜"},{"genre":"自然・場所","topic":"紅葉"},{"genre":"自然・場所","topic":"花火"},{"genre":"日用品・家電","topic":"スマートフォン"},{"genre":"日用品・家電","topic":"携帯電話"},{"genre":"日用品・家電","topic":"テレビ"},{"genre":"日用品・家電","topic":"冷蔵庫"},{"genre":"日用品・家電","topic":"洗濯機"},{"genre":"日用品・家電","topic":"電子レンジ"},{"genre":"日用品・家電","topic":"炊飯器"},{"genre":"日用品・家電","topic":"掃除機"},{"genre":"日用品・家電","topic":"エアコン"},{"genre":"日用品・家電","topic":"扇風機"},{"genre":"日用品・家電","topic":"ドライヤー"},{"genre":"日用品・家電","topic":"パソコン"},{"genre":"日用品・家電","topic":"タブレット"},{"genre":"日用品・家電","topic":"カメラ"},{"genre":"日用品・家電","topic":"ゲーム機"},{"genre":"日用品・家電","topic":"時計"},{"genre":"日用品・家電","topic":"腕時計"},{"genre":"日用品・家電","topic":"目覚まし時計"},{"genre":"日用品・家電","topic":"眼鏡"},{"genre":"日用品・家電","topic":"サングラス"},{"genre":"日用品・家電","topic":"傘"},{"genre":"日用品・家電","topic":"財布"},{"genre":"日用品・家電","topic":"鍵"},{"genre":"日用品・家電","topic":"かばん"},{"genre":"日用品・家電","topic":"リュック"},{"genre":"日用品・家電","topic":"水筒"},{"genre":"日用品・家電","topic":"ペットボトル"},{"genre":"日用品・家電","topic":"コップ"},{"genre":"日用品・家電","topic":"マグカップ"},{"genre":"日用品・家電","topic":"皿"},{"genre":"日用品・家電","topic":"箸"},{"genre":"日用品・家電","topic":"スプーン"},{"genre":"日用品・家電","topic":"フォーク"},{"genre":"日用品・家電","topic":"包丁"},{"genre":"日用品・家電","topic":"まな板"},{"genre":"日用品・家電","topic":"フライパン"},{"genre":"日用品・家電","topic":"鍋"},{"genre":"日用品・家電","topic":"冷凍庫"},{"genre":"日用品・家電","topic":"トースター"},{"genre":"日用品・家電","topic":"電気ケトル"},{"genre":"日用品・家電","topic":"ティッシュ"},{"genre":"日用品・家電","topic":"トイレットペーパー"},{"genre":"日用品・家電","topic":"歯ブラシ"},{"genre":"日用品・家電","topic":"歯磨き粉"},{"genre":"日用品・家電","topic":"シャンプー"},{"genre":"日用品・家電","topic":"石けん"},{"genre":"日用品・家電","topic":"タオル"},{"genre":"日用品・家電","topic":"バスタオル"},{"genre":"日用品・家電","topic":"枕"},{"genre":"日用品・家電","topic":"布団"},{"genre":"日用品・家電","topic":"ベッド"},{"genre":"日用品・家電","topic":"椅子"},{"genre":"日用品・家電","topic":"机"},{"genre":"日用品・家電","topic":"ソファ"},{"genre":"日用品・家電","topic":"テーブル"},{"genre":"日用品・家電","topic":"カーテン"},{"genre":"日用品・家電","topic":"鏡"},{"genre":"日用品・家電","topic":"ごみ箱"},{"genre":"日用品・家電","topic":"ほうき"},{"genre":"日用品・家電","topic":"モップ"},{"genre":"日用品・家電","topic":"洗濯ばさみ"},{"genre":"日用品・家電","topic":"ハンガー"},{"genre":"日用品・家電","topic":"アイロン"},{"genre":"日用品・家電","topic":"ペン"},{"genre":"日用品・家電","topic":"鉛筆"},{"genre":"日用品・家電","topic":"消しゴム"},{"genre":"日用品・家電","topic":"ノート"},{"genre":"日用品・家電","topic":"はさみ"},{"genre":"日用品・家電","topic":"のり"},{"genre":"日用品・家電","topic":"定規"},{"genre":"日用品・家電","topic":"ホッチキス"},{"genre":"日用品・家電","topic":"電卓"},{"genre":"日用品・家電","topic":"ランドセル"},{"genre":"日用品・家電","topic":"靴"},{"genre":"日用品・家電","topic":"スニーカー"},{"genre":"日用品・家電","topic":"長靴"},{"genre":"日用品・家電","topic":"スリッパ"},{"genre":"日用品・家電","topic":"帽子"},{"genre":"日用品・家電","topic":"マスク"},{"genre":"日用品・家電","topic":"手袋"},{"genre":"日用品・家電","topic":"マフラー"},{"genre":"日用品・家電","topic":"ネクタイ"},{"genre":"日用品・家電","topic":"ベルト"},{"genre":"日用品・家電","topic":"パジャマ"},{"genre":"日用品・家電","topic":"Tシャツ"},{"genre":"日用品・家電","topic":"ジーンズ"},{"genre":"日用品・家電","topic":"傘立て"},{"genre":"日用品・家電","topic":"テレビリモコン"},{"genre":"日用品・家電","topic":"イヤホン"},{"genre":"日用品・家電","topic":"ヘッドホン"},{"genre":"日用品・家電","topic":"スピーカー"},{"genre":"日用品・家電","topic":"充電器"},{"genre":"日用品・家電","topic":"モバイルバッテリー"},{"genre":"乗り物・スポーツ","topic":"自動車"},{"genre":"乗り物・スポーツ","topic":"電車"},{"genre":"乗り物・スポーツ","topic":"新幹線"},{"genre":"乗り物・スポーツ","topic":"バス"},{"genre":"乗り物・スポーツ","topic":"タクシー"},{"genre":"乗り物・スポーツ","topic":"自転車"},{"genre":"乗り物・スポーツ","topic":"バイク"},{"genre":"乗り物・スポーツ","topic":"飛行機"},{"genre":"乗り物・スポーツ","topic":"ヘリコプター"},{"genre":"乗り物・スポーツ","topic":"船"},{"genre":"乗り物・スポーツ","topic":"フェリー"},{"genre":"乗り物・スポーツ","topic":"ヨット"},{"genre":"乗り物・スポーツ","topic":"ロケット"},{"genre":"乗り物・スポーツ","topic":"潜水艦"},{"genre":"乗り物・スポーツ","topic":"救急車"},{"genre":"乗り物・スポーツ","topic":"消防車"},{"genre":"乗り物・スポーツ","topic":"パトカー"},{"genre":"乗り物・スポーツ","topic":"トラック"},{"genre":"乗り物・スポーツ","topic":"ダンプカー"},{"genre":"乗り物・スポーツ","topic":"ブルドーザー"},{"genre":"乗り物・スポーツ","topic":"ショベルカー"},{"genre":"乗り物・スポーツ","topic":"トラクター"},{"genre":"乗り物・スポーツ","topic":"キャンピングカー"},{"genre":"乗り物・スポーツ","topic":"モノレール"},{"genre":"乗り物・スポーツ","topic":"路面電車"},{"genre":"乗り物・スポーツ","topic":"気球"},{"genre":"乗り物・スポーツ","topic":"野球"},{"genre":"乗り物・スポーツ","topic":"サッカー"},{"genre":"乗り物・スポーツ","topic":"バスケットボール"},{"genre":"乗り物・スポーツ","topic":"バレーボール"},{"genre":"乗り物・スポーツ","topic":"テニス"},{"genre":"乗り物・スポーツ","topic":"卓球"},{"genre":"乗り物・スポーツ","topic":"バドミントン"},{"genre":"乗り物・スポーツ","topic":"ゴルフ"},{"genre":"乗り物・スポーツ","topic":"水泳"},{"genre":"乗り物・スポーツ","topic":"陸上競技"},{"genre":"乗り物・スポーツ","topic":"マラソン"},{"genre":"乗り物・スポーツ","topic":"柔道"},{"genre":"乗り物・スポーツ","topic":"剣道"},{"genre":"乗り物・スポーツ","topic":"空手"},{"genre":"乗り物・スポーツ","topic":"相撲"},{"genre":"乗り物・スポーツ","topic":"ボクシング"},{"genre":"乗り物・スポーツ","topic":"レスリング"},{"genre":"乗り物・スポーツ","topic":"ラグビー"},{"genre":"乗り物・スポーツ","topic":"スキー"},{"genre":"乗り物・スポーツ","topic":"スノーボード"},{"genre":"乗り物・スポーツ","topic":"フィギュアスケート"},{"genre":"乗り物・スポーツ","topic":"体操"},{"genre":"乗り物・スポーツ","topic":"サーフィン"},{"genre":"乗り物・スポーツ","topic":"スケートボード"},{"genre":"乗り物・スポーツ","topic":"ボウリング"},{"genre":"乗り物・スポーツ","topic":"ダーツ"},{"genre":"乗り物・スポーツ","topic":"ビリヤード"},{"genre":"乗り物・スポーツ","topic":"縄跳び"},{"genre":"乗り物・スポーツ","topic":"鬼ごっこ"},{"genre":"乗り物・スポーツ","topic":"ドッジボール"},{"genre":"有名人・偉人","topic":"大谷翔平"},{"genre":"有名人・偉人","topic":"イチロー"},{"genre":"有名人・偉人","topic":"ダルビッシュ有"},{"genre":"有名人・偉人","topic":"松井秀喜"},{"genre":"有名人・偉人","topic":"王貞治"},{"genre":"有名人・偉人","topic":"長嶋茂雄"},{"genre":"有名人・偉人","topic":"山本由伸"},{"genre":"有名人・偉人","topic":"羽生結弦"},{"genre":"有名人・偉人","topic":"浅田真央"},{"genre":"有名人・偉人","topic":"大坂なおみ"},{"genre":"有名人・偉人","topic":"錦織圭"},{"genre":"有名人・偉人","topic":"松山英樹"},{"genre":"有名人・偉人","topic":"石川佳純"},{"genre":"有名人・偉人","topic":"福原愛"},{"genre":"有名人・偉人","topic":"吉田沙保里"},{"genre":"有名人・偉人","topic":"北島康介"},{"genre":"有名人・偉人","topic":"八村塁"},{"genre":"有名人・偉人","topic":"三浦知良"},{"genre":"有名人・偉人","topic":"本田圭佑"},{"genre":"有名人・偉人","topic":"中田英寿"},{"genre":"有名人・偉人","topic":"三笘薫"},{"genre":"有名人・偉人","topic":"久保建英"},{"genre":"有名人・偉人","topic":"リオネル・メッシ"},{"genre":"有名人・偉人","topic":"クリスティアーノ・ロナウド"},{"genre":"有名人・偉人","topic":"マイケル・ジョーダン"},{"genre":"有名人・偉人","topic":"明石家さんま"},{"genre":"有名人・偉人","topic":"タモリ"},{"genre":"有名人・偉人","topic":"ビートたけし"},{"genre":"有名人・偉人","topic":"所ジョージ"},{"genre":"有名人・偉人","topic":"有吉弘行"},{"genre":"有名人・偉人","topic":"出川哲朗"},{"genre":"有名人・偉人","topic":"マツコ・デラックス"},{"genre":"有名人・偉人","topic":"サンドウィッチマン"},{"genre":"有名人・偉人","topic":"千鳥"},{"genre":"有名人・偉人","topic":"木村拓哉"},{"genre":"有名人・偉人","topic":"阿部寛"},{"genre":"有名人・偉人","topic":"大泉洋"},{"genre":"有名人・偉人","topic":"菅田将暉"},{"genre":"有名人・偉人","topic":"佐藤健"},{"genre":"有名人・偉人","topic":"福山雅治"},{"genre":"有名人・偉人","topic":"綾瀬はるか"},{"genre":"有名人・偉人","topic":"新垣結衣"},{"genre":"有名人・偉人","topic":"石原さとみ"},{"genre":"有名人・偉人","topic":"長澤まさみ"},{"genre":"有名人・偉人","topic":"北川景子"},{"genre":"有名人・偉人","topic":"有村架純"},{"genre":"有名人・偉人","topic":"橋本環奈"},{"genre":"有名人・偉人","topic":"広瀬すず"},{"genre":"有名人・偉人","topic":"浜辺美波"},{"genre":"有名人・偉人","topic":"芦田愛菜"},{"genre":"有名人・偉人","topic":"黒柳徹子"},{"genre":"有名人・偉人","topic":"HIKAKIN"},{"genre":"有名人・偉人","topic":"宇多田ヒカル"},{"genre":"有名人・偉人","topic":"米津玄師"},{"genre":"有名人・偉人","topic":"藤井風"},{"genre":"有名人・偉人","topic":"あいみょん"},{"genre":"有名人・偉人","topic":"Ado"},{"genre":"有名人・偉人","topic":"織田信長"},{"genre":"有名人・偉人","topic":"豊臣秀吉"},{"genre":"有名人・偉人","topic":"徳川家康"},{"genre":"有名人・偉人","topic":"坂本龍馬"},{"genre":"有名人・偉人","topic":"西郷隆盛"},{"genre":"有名人・偉人","topic":"聖徳太子"},{"genre":"有名人・偉人","topic":"卑弥呼"},{"genre":"有名人・偉人","topic":"紫式部"},{"genre":"有名人・偉人","topic":"源頼朝"},{"genre":"有名人・偉人","topic":"源義経"},{"genre":"有名人・偉人","topic":"武田信玄"},{"genre":"有名人・偉人","topic":"上杉謙信"},{"genre":"有名人・偉人","topic":"伊達政宗"},{"genre":"有名人・偉人","topic":"真田幸村"},{"genre":"有名人・偉人","topic":"宮本武蔵"},{"genre":"有名人・偉人","topic":"福沢諭吉"},{"genre":"有名人・偉人","topic":"野口英世"},{"genre":"有名人・偉人","topic":"夏目漱石"},{"genre":"有名人・偉人","topic":"宮沢賢治"},{"genre":"有名人・偉人","topic":"手塚治虫"},{"genre":"有名人・偉人","topic":"ナポレオン"},{"genre":"有名人・偉人","topic":"クレオパトラ"},{"genre":"有名人・偉人","topic":"リンカーン"},{"genre":"有名人・偉人","topic":"ガンジー"},{"genre":"有名人・偉人","topic":"アインシュタイン"},{"genre":"有名人・偉人","topic":"ニュートン"},{"genre":"有名人・偉人","topic":"エジソン"},{"genre":"有名人・偉人","topic":"ダーウィン"},{"genre":"有名人・偉人","topic":"レオナルド・ダ・ヴィンチ"},{"genre":"有名人・偉人","topic":"ベートーヴェン"},{"genre":"有名人・偉人","topic":"モーツァルト"},{"genre":"ドラえもん","topic":"ドラえもん"},{"genre":"ドラえもん","topic":"野比のび太"},{"genre":"ドラえもん","topic":"源静香"},{"genre":"ドラえもん","topic":"剛田武"},{"genre":"ドラえもん","topic":"骨川スネ夫"},{"genre":"ドラえもん","topic":"ドラミ"},{"genre":"ドラえもん","topic":"出木杉英才"},{"genre":"ドラえもん","topic":"野比玉子"},{"genre":"ドラえもん","topic":"野比のび助"},{"genre":"ドラえもん","topic":"先生"},{"genre":"ドラえもん","topic":"ジャイ子"},{"genre":"ドラえもん","topic":"ミニドラ"},{"genre":"クレヨンしんちゃん","topic":"野原しんのすけ"},{"genre":"クレヨンしんちゃん","topic":"野原みさえ"},{"genre":"クレヨンしんちゃん","topic":"野原ひろし"},{"genre":"クレヨンしんちゃん","topic":"野原ひまわり"},{"genre":"クレヨンしんちゃん","topic":"シロ"},{"genre":"クレヨンしんちゃん","topic":"風間トオル"},{"genre":"クレヨンしんちゃん","topic":"桜田ネネ"},{"genre":"クレヨンしんちゃん","topic":"佐藤マサオ"},{"genre":"クレヨンしんちゃん","topic":"ボーちゃん"},{"genre":"クレヨンしんちゃん","topic":"園長先生"},{"genre":"クレヨンしんちゃん","topic":"アクション仮面"},{"genre":"クレヨンしんちゃん","topic":"ぶりぶりざえもん"},{"genre":"名探偵コナン","topic":"江戸川コナン"},{"genre":"名探偵コナン","topic":"工藤新一"},{"genre":"名探偵コナン","topic":"毛利蘭"},{"genre":"名探偵コナン","topic":"毛利小五郎"},{"genre":"名探偵コナン","topic":"灰原哀"},{"genre":"名探偵コナン","topic":"阿笠博士"},{"genre":"名探偵コナン","topic":"怪盗キッド"},{"genre":"名探偵コナン","topic":"服部平次"},{"genre":"名探偵コナン","topic":"遠山和葉"},{"genre":"名探偵コナン","topic":"鈴木園子"},{"genre":"名探偵コナン","topic":"赤井秀一"},{"genre":"名探偵コナン","topic":"安室透"},{"genre":"名探偵コナン","topic":"ジン"},{"genre":"名探偵コナン","topic":"ウォッカ"},{"genre":"名探偵コナン","topic":"吉田歩美"},{"genre":"名探偵コナン","topic":"小嶋元太"},{"genre":"名探偵コナン","topic":"円谷光彦"},{"genre":"ONE PIECE","topic":"モンキー・D・ルフィ"},{"genre":"ONE PIECE","topic":"ロロノア・ゾロ"},{"genre":"ONE PIECE","topic":"ナミ"},{"genre":"ONE PIECE","topic":"ウソップ"},{"genre":"ONE PIECE","topic":"サンジ"},{"genre":"ONE PIECE","topic":"トニートニー・チョッパー"},{"genre":"ONE PIECE","topic":"ニコ・ロビン"},{"genre":"ONE PIECE","topic":"フランキー"},{"genre":"ONE PIECE","topic":"ブルック"},{"genre":"ONE PIECE","topic":"ジンベエ"},{"genre":"ONE PIECE","topic":"シャンクス"},{"genre":"ONE PIECE","topic":"ポートガス・D・エース"},{"genre":"ONE PIECE","topic":"サボ"},{"genre":"ONE PIECE","topic":"トラファルガー・ロー"},{"genre":"ONE PIECE","topic":"ボア・ハンコック"},{"genre":"ONE PIECE","topic":"バギー"},{"genre":"ONE PIECE","topic":"クロコダイル"},{"genre":"ONE PIECE","topic":"ミホーク"},{"genre":"ONE PIECE","topic":"カイドウ"},{"genre":"ONE PIECE","topic":"ビッグ・マム"},{"genre":"ドラゴンボール","topic":"孫悟空"},{"genre":"ドラゴンボール","topic":"ベジータ"},{"genre":"ドラゴンボール","topic":"孫悟飯"},{"genre":"ドラゴンボール","topic":"ピッコロ"},{"genre":"ドラゴンボール","topic":"クリリン"},{"genre":"ドラゴンボール","topic":"ブルマ"},{"genre":"ドラゴンボール","topic":"トランクス"},{"genre":"ドラゴンボール","topic":"孫悟天"},{"genre":"ドラゴンボール","topic":"フリーザ"},{"genre":"ドラゴンボール","topic":"セル"},{"genre":"ドラゴンボール","topic":"魔人ブウ"},{"genre":"ドラゴンボール","topic":"亀仙人"},{"genre":"ドラゴンボール","topic":"ヤムチャ"},{"genre":"ドラゴンボール","topic":"天津飯"},{"genre":"ドラゴンボール","topic":"チャオズ"},{"genre":"ドラゴンボール","topic":"人造人間18号"},{"genre":"ドラゴンボール","topic":"ビーデル"},{"genre":"ドラゴンボール","topic":"ミスター・サタン"},{"genre":"ドラゴンボール","topic":"神龍"},{"genre":"鬼滅の刃","topic":"竈門炭治郎"},{"genre":"鬼滅の刃","topic":"竈門禰豆子"},{"genre":"鬼滅の刃","topic":"我妻善逸"},{"genre":"鬼滅の刃","topic":"嘴平伊之助"},{"genre":"鬼滅の刃","topic":"冨岡義勇"},{"genre":"鬼滅の刃","topic":"胡蝶しのぶ"},{"genre":"鬼滅の刃","topic":"煉獄杏寿郎"},{"genre":"鬼滅の刃","topic":"宇髄天元"},{"genre":"鬼滅の刃","topic":"甘露寺蜜璃"},{"genre":"鬼滅の刃","topic":"時透無一郎"},{"genre":"鬼滅の刃","topic":"伊黒小芭内"},{"genre":"鬼滅の刃","topic":"不死川実弥"},{"genre":"鬼滅の刃","topic":"悲鳴嶼行冥"},{"genre":"鬼滅の刃","topic":"栗花落カナヲ"},{"genre":"鬼滅の刃","topic":"鬼舞辻無惨"},{"genre":"鬼滅の刃","topic":"猗窩座"},{"genre":"NARUTO","topic":"うずまきナルト"},{"genre":"NARUTO","topic":"うちはサスケ"},{"genre":"NARUTO","topic":"春野サクラ"},{"genre":"NARUTO","topic":"はたけカカシ"},{"genre":"NARUTO","topic":"日向ヒナタ"},{"genre":"NARUTO","topic":"奈良シカマル"},{"genre":"NARUTO","topic":"我愛羅"},{"genre":"NARUTO","topic":"自来也"},{"genre":"NARUTO","topic":"綱手"},{"genre":"NARUTO","topic":"大蛇丸"},{"genre":"NARUTO","topic":"うちはイタチ"},{"genre":"NARUTO","topic":"ロック・リー"},{"genre":"NARUTO","topic":"マイト・ガイ"},{"genre":"NARUTO","topic":"日向ネジ"},{"genre":"NARUTO","topic":"秋道チョウジ"},{"genre":"NARUTO","topic":"山中いの"},{"genre":"ポケットモンスター","topic":"ピカチュウ"},{"genre":"ポケットモンスター","topic":"イーブイ"},{"genre":"ポケットモンスター","topic":"リザードン"},{"genre":"ポケットモンスター","topic":"フシギダネ"},{"genre":"ポケットモンスター","topic":"ヒトカゲ"},{"genre":"ポケットモンスター","topic":"ゼニガメ"},{"genre":"ポケットモンスター","topic":"カビゴン"},{"genre":"ポケットモンスター","topic":"ミュウ"},{"genre":"ポケットモンスター","topic":"ミュウツー"},{"genre":"ポケットモンスター","topic":"ニャース"},{"genre":"ポケットモンスター","topic":"コダック"},{"genre":"ポケットモンスター","topic":"ゲンガー"},{"genre":"ポケットモンスター","topic":"ルカリオ"},{"genre":"ポケットモンスター","topic":"ポッチャマ"},{"genre":"ポケットモンスター","topic":"メタモン"},{"genre":"ポケットモンスター","topic":"トゲピー"},{"genre":"ポケットモンスター","topic":"ラプラス"},{"genre":"ポケットモンスター","topic":"ギャラドス"},{"genre":"ポケットモンスター","topic":"コイキング"},{"genre":"ポケットモンスター","topic":"サトシ"},{"genre":"ポケットモンスター","topic":"カスミ"},{"genre":"ポケットモンスター","topic":"タケシ"},{"genre":"ポケットモンスター","topic":"ロケット団"},{"genre":"アンパンマン","topic":"アンパンマン"},{"genre":"アンパンマン","topic":"ばいきんまん"},{"genre":"アンパンマン","topic":"ドキンちゃん"},{"genre":"アンパンマン","topic":"しょくぱんまん"},{"genre":"アンパンマン","topic":"カレーパンマン"},{"genre":"アンパンマン","topic":"メロンパンナ"},{"genre":"アンパンマン","topic":"ロールパンナ"},{"genre":"アンパンマン","topic":"ジャムおじさん"},{"genre":"アンパンマン","topic":"バタコさん"},{"genre":"アンパンマン","topic":"てんどんまん"},{"genre":"アンパンマン","topic":"カツドンマン"},{"genre":"アンパンマン","topic":"かまめしどん"},{"genre":"アンパンマン","topic":"ホラーマン"},{"genre":"ちびまる子ちゃん","topic":"さくらももこ"},{"genre":"ちびまる子ちゃん","topic":"さくら友蔵"},{"genre":"ちびまる子ちゃん","topic":"さくらひろし"},{"genre":"ちびまる子ちゃん","topic":"さくらすみれ"},{"genre":"ちびまる子ちゃん","topic":"さくらさきこ"},{"genre":"ちびまる子ちゃん","topic":"たまちゃん"},{"genre":"ちびまる子ちゃん","topic":"花輪クン"},{"genre":"ちびまる子ちゃん","topic":"丸尾君"},{"genre":"ちびまる子ちゃん","topic":"野口さん"},{"genre":"ちびまる子ちゃん","topic":"永沢君"},{"genre":"ちびまる子ちゃん","topic":"藤木君"},{"genre":"ちびまる子ちゃん","topic":"山田君"},{"genre":"サザエさん","topic":"フグ田サザエ"},{"genre":"サザエさん","topic":"フグ田マスオ"},{"genre":"サザエさん","topic":"フグ田タラオ"},{"genre":"サザエさん","topic":"磯野カツオ"},{"genre":"サザエさん","topic":"磯野ワカメ"},{"genre":"サザエさん","topic":"磯野波平"},{"genre":"サザエさん","topic":"磯野フネ"},{"genre":"サザエさん","topic":"タマ"},{"genre":"サザエさん","topic":"波野ノリスケ"},{"genre":"サザエさん","topic":"波野イクラ"},{"genre":"サザエさん","topic":"穴子さん"},{"genre":"SLAM DUNK","topic":"桜木花道"},{"genre":"SLAM DUNK","topic":"流川楓"},{"genre":"SLAM DUNK","topic":"赤木剛憲"},{"genre":"SLAM DUNK","topic":"三井寿"},{"genre":"SLAM DUNK","topic":"宮城リョータ"},{"genre":"SLAM DUNK","topic":"赤木晴子"},{"genre":"SLAM DUNK","topic":"安西先生"},{"genre":"SLAM DUNK","topic":"仙道彰"},{"genre":"SLAM DUNK","topic":"魚住純"},{"genre":"SLAM DUNK","topic":"牧紳一"},{"genre":"SLAM DUNK","topic":"藤真健司"},{"genre":"進撃の巨人","topic":"エレン・イェーガー"},{"genre":"進撃の巨人","topic":"ミカサ・アッカーマン"},{"genre":"進撃の巨人","topic":"アルミン・アルレルト"},{"genre":"進撃の巨人","topic":"リヴァイ"},{"genre":"進撃の巨人","topic":"ハンジ・ゾエ"},{"genre":"進撃の巨人","topic":"エルヴィン・スミス"},{"genre":"進撃の巨人","topic":"ジャン・キルシュタイン"},{"genre":"進撃の巨人","topic":"サシャ・ブラウス"},{"genre":"進撃の巨人","topic":"コニー・スプリンガー"},{"genre":"進撃の巨人","topic":"ライナー・ブラウン"},{"genre":"進撃の巨人","topic":"アニ・レオンハート"},{"genre":"呪術廻戦","topic":"虎杖悠仁"},{"genre":"呪術廻戦","topic":"伏黒恵"},{"genre":"呪術廻戦","topic":"釘崎野薔薇"},{"genre":"呪術廻戦","topic":"五条悟"},{"genre":"呪術廻戦","topic":"両面宿儺"},{"genre":"呪術廻戦","topic":"禪院真希"},{"genre":"呪術廻戦","topic":"狗巻棘"},{"genre":"呪術廻戦","topic":"七海建人"},{"genre":"呪術廻戦","topic":"乙骨憂太"},{"genre":"呪術廻戦","topic":"夏油傑"},{"genre":"呪術廻戦","topic":"真人"},{"genre":"僕のヒーローアカデミア","topic":"緑谷出久"},{"genre":"僕のヒーローアカデミア","topic":"爆豪勝己"},{"genre":"僕のヒーローアカデミア","topic":"麗日お茶子"},{"genre":"僕のヒーローアカデミア","topic":"轟焦凍"},{"genre":"僕のヒーローアカデミア","topic":"オールマイト"},{"genre":"僕のヒーローアカデミア","topic":"飯田天哉"},{"genre":"僕のヒーローアカデミア","topic":"蛙吹梅雨"},{"genre":"僕のヒーローアカデミア","topic":"切島鋭児郎"},{"genre":"僕のヒーローアカデミア","topic":"八百万百"},{"genre":"僕のヒーローアカデミア","topic":"相澤消太"},{"genre":"僕のヒーローアカデミア","topic":"エンデヴァー"},{"genre":"僕のヒーローアカデミア","topic":"死柄木弔"},{"genre":"ジブリ","topic":"となりのトトロ"},{"genre":"ジブリ","topic":"トトロ"},{"genre":"ジブリ","topic":"メイ"},{"genre":"ジブリ","topic":"サツキ"},{"genre":"ジブリ","topic":"ネコバス"},{"genre":"ジブリ","topic":"千と千尋の神隠し"},{"genre":"ジブリ","topic":"千尋"},{"genre":"ジブリ","topic":"ハク"},{"genre":"ジブリ","topic":"カオナシ"},{"genre":"ジブリ","topic":"湯婆婆"},{"genre":"ジブリ","topic":"魔女の宅急便"},{"genre":"ジブリ","topic":"キキ"},{"genre":"ジブリ","topic":"ジジ"},{"genre":"ジブリ","topic":"天空の城ラピュタ"},{"genre":"ジブリ","topic":"パズー"},{"genre":"ジブリ","topic":"シータ"},{"genre":"ジブリ","topic":"ムスカ"},{"genre":"ジブリ","topic":"もののけ姫"},{"genre":"ジブリ","topic":"サン"},{"genre":"ジブリ","topic":"アシタカ"},{"genre":"ジブリ","topic":"ハウルの動く城"},{"genre":"ジブリ","topic":"ハウル"},{"genre":"ジブリ","topic":"ソフィー"},{"genre":"ジブリ","topic":"カルシファー"},{"genre":"ジブリ","topic":"崖の上のポニョ"},{"genre":"ジブリ","topic":"ポニョ"},{"genre":"ジブリ","topic":"風の谷のナウシカ"},{"genre":"ジブリ","topic":"ナウシカ"},{"genre":"ジブリ","topic":"王蟲"},{"genre":"ジブリ","topic":"紅の豚"},{"genre":"ジブリ","topic":"ポルコ・ロッソ"},{"genre":"ジブリ","topic":"耳をすませば"},{"genre":"ジブリ","topic":"月島雫"},{"genre":"ジブリ","topic":"バロン"},{"genre":"ディズニー・ピクサー","topic":"ミッキーマウス"},{"genre":"ディズニー・ピクサー","topic":"ミニーマウス"},{"genre":"ディズニー・ピクサー","topic":"ドナルドダック"},{"genre":"ディズニー・ピクサー","topic":"デイジーダック"},{"genre":"ディズニー・ピクサー","topic":"グーフィー"},{"genre":"ディズニー・ピクサー","topic":"プルート"},{"genre":"ディズニー・ピクサー","topic":"くまのプーさん"},{"genre":"ディズニー・ピクサー","topic":"ティガー"},{"genre":"ディズニー・ピクサー","topic":"スティッチ"},{"genre":"ディズニー・ピクサー","topic":"シンデレラ"},{"genre":"ディズニー・ピクサー","topic":"アリエル"},{"genre":"ディズニー・ピクサー","topic":"ベル"},{"genre":"ディズニー・ピクサー","topic":"アラジン"},{"genre":"ディズニー・ピクサー","topic":"ジャスミン"},{"genre":"ディズニー・ピクサー","topic":"ジーニー"},{"genre":"ディズニー・ピクサー","topic":"シンバ"},{"genre":"ディズニー・ピクサー","topic":"ラプンツェル"},{"genre":"ディズニー・ピクサー","topic":"エルサ"},{"genre":"ディズニー・ピクサー","topic":"アナ"},{"genre":"ディズニー・ピクサー","topic":"オラフ"},{"genre":"ディズニー・ピクサー","topic":"ベイマックス"},{"genre":"ディズニー・ピクサー","topic":"モアナ"},{"genre":"ディズニー・ピクサー","topic":"白雪姫"},{"genre":"ディズニー・ピクサー","topic":"ピーターパン"},{"genre":"ディズニー・ピクサー","topic":"ティンカー・ベル"},{"genre":"ディズニー・ピクサー","topic":"アリス"},{"genre":"ディズニー・ピクサー","topic":"トイ・ストーリー"},{"genre":"ディズニー・ピクサー","topic":"ウッディ"},{"genre":"ディズニー・ピクサー","topic":"バズ・ライトイヤー"},{"genre":"ディズニー・ピクサー","topic":"ジェシー"},{"genre":"ディズニー・ピクサー","topic":"モンスターズ・インク"},{"genre":"ディズニー・ピクサー","topic":"サリー"},{"genre":"ディズニー・ピクサー","topic":"マイク"},{"genre":"ディズニー・ピクサー","topic":"ファインディング・ニモ"},{"genre":"ディズニー・ピクサー","topic":"ニモ"},{"genre":"ディズニー・ピクサー","topic":"ドリー"},{"genre":"ディズニー・ピクサー","topic":"カーズ"},{"genre":"ディズニー・ピクサー","topic":"ライトニング・マックィーン"},{"genre":"ディズニー・ピクサー","topic":"リメンバー・ミー"},{"genre":"ディズニー・ピクサー","topic":"ミゲル"},{"genre":"ディズニー・ピクサー","topic":"インサイド・ヘッド"},{"genre":"ディズニー・ピクサー","topic":"ヨロコビ"},{"genre":"ディズニー・ピクサー","topic":"カナシミ"},{"genre":"ゲームキャラクター","topic":"マリオ"},{"genre":"ゲームキャラクター","topic":"ルイージ"},{"genre":"ゲームキャラクター","topic":"ピーチ姫"},{"genre":"ゲームキャラクター","topic":"クッパ"},{"genre":"ゲームキャラクター","topic":"ヨッシー"},{"genre":"ゲームキャラクター","topic":"キノピオ"},{"genre":"ゲームキャラクター","topic":"ドンキーコング"},{"genre":"ゲームキャラクター","topic":"カービィ"},{"genre":"ゲームキャラクター","topic":"リンク"},{"genre":"ゲームキャラクター","topic":"ゼルダ姫"},{"genre":"ゲームキャラクター","topic":"しずえ"},{"genre":"ゲームキャラクター","topic":"たぬきち"},{"genre":"ゲームキャラクター","topic":"スプラトゥーン"},{"genre":"ゲームキャラクター","topic":"スーパーマリオブラザーズ"},{"genre":"ゲームキャラクター","topic":"マリオカート"},{"genre":"ゲームキャラクター","topic":"どうぶつの森"},{"genre":"ゲームキャラクター","topic":"ゼルダの伝説"},{"genre":"ゲームキャラクター","topic":"星のカービィ"},{"genre":"ゲームキャラクター","topic":"マインクラフト"},{"genre":"ゲームキャラクター","topic":"テトリス"},{"genre":"ゲームキャラクター","topic":"ドラゴンクエスト"},{"genre":"ゲームキャラクター","topic":"ファイナルファンタジー"},{"genre":"ゲームキャラクター","topic":"モンスターハンター"},{"genre":"ゲームキャラクター","topic":"桃太郎電鉄"},{"genre":"ゲームキャラクター","topic":"太鼓の達人"},{"genre":"イベント・遊び","topic":"クリスマス"},{"genre":"イベント・遊び","topic":"お正月"},{"genre":"イベント・遊び","topic":"ハロウィン"},{"genre":"イベント・遊び","topic":"バレンタイン"},{"genre":"イベント・遊び","topic":"誕生日"},{"genre":"イベント・遊び","topic":"結婚式"},{"genre":"イベント・遊び","topic":"入学式"},{"genre":"イベント・遊び","topic":"卒業式"},{"genre":"イベント・遊び","topic":"運動会"},{"genre":"イベント・遊び","topic":"文化祭"},{"genre":"イベント・遊び","topic":"夏祭り"},{"genre":"イベント・遊び","topic":"花火大会"},{"genre":"イベント・遊び","topic":"お花見"},{"genre":"イベント・遊び","topic":"初詣"},{"genre":"イベント・遊び","topic":"七夕"},{"genre":"イベント・遊び","topic":"節分"},{"genre":"イベント・遊び","topic":"ひな祭り"},{"genre":"イベント・遊び","topic":"子どもの日"},{"genre":"イベント・遊び","topic":"キャンプ"},{"genre":"イベント・遊び","topic":"バーベキュー"},{"genre":"イベント・遊び","topic":"旅行"},{"genre":"イベント・遊び","topic":"カラオケ"},{"genre":"イベント・遊び","topic":"ボードゲーム"},{"genre":"イベント・遊び","topic":"テレビゲーム"},{"genre":"イベント・遊び","topic":"トランプ"},{"genre":"イベント・遊び","topic":"UNO"},{"genre":"イベント・遊び","topic":"将棋"},{"genre":"イベント・遊び","topic":"囲碁"},{"genre":"イベント・遊び","topic":"オセロ"},{"genre":"イベント・遊び","topic":"麻雀"},{"genre":"イベント・遊び","topic":"カタン"},{"genre":"イベント・遊び","topic":"かくれんぼ"},{"genre":"イベント・遊び","topic":"じゃんけん"},{"genre":"イベント・遊び","topic":"しりとり"},{"genre":"イベント・遊び","topic":"宝探し"}];

const PLAYERS = ["ゆか", "たけ"];
let pair = null;
let viewingPlayer = 0;
let timeLimit = 300;
let timeLeft = 300;
let timerId = null;
let paused = false;
let audioCtx = null;

const $ = (s) => document.querySelector(s);
const screens = [...document.querySelectorAll(".screen")];

function showScreen(id) {
  screens.forEach(s => s.classList.toggle("active", s.id === id));
  window.scrollTo({top:0, behavior:"instant"});
}

function formatTime(sec) {
  sec = Math.max(0, sec);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return String(m).padStart(2,"0") + ":" + String(s).padStart(2,"0");
}

function normalize(text) {
  return (text || "").trim().replace(/[\s　]/g, "").toLowerCase();
}

function randomTopic() {
  return TOPICS[Math.floor(Math.random() * TOPICS.length)];
}

function newPair() {
  const a = randomTopic();
  let b = randomTopic();
  while (b.topic === a.topic) b = randomTopic();
  pair = [a, b];
}


function fitSecretWord() {
  const el = $("#secretWord");
  const text = el.textContent || "";
  let size;
  if (text.length <= 6) size = 58;
  else if (text.length <= 10) size = 48;
  else if (text.length <= 15) size = 39;
  else if (text.length <= 22) size = 32;
  else size = 27;
  el.style.fontSize = `min(${size}px, ${Math.max(7.2, size/5.8)}vw)`;
}

function setPassScreen() {
  const name = PLAYERS[viewingPlayer];
  $("#passStep").textContent = String(viewingPlayer + 1);
  $("#passTitle").textContent = name + "へ";
  $("#passMessage").textContent = name + "だけが画面を見てください。";
  $("#showWordBtn").textContent = "お題を確認する";
}

function unlockAudio() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
  } catch(e) {}
}

function alarm() {
  try {
    unlockAudio();
    const now = audioCtx.currentTime;
    [0, .20, .40, .68].forEach((delay, i) => {
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = "sine";
      o.frequency.value = i === 3 ? 900 : 650;
      o.connect(g); g.connect(audioCtx.destination);
      g.gain.setValueAtTime(.001, now + delay);
      g.gain.exponentialRampToValueAtTime(.22, now + delay + .02);
      g.gain.exponentialRampToValueAtTime(.001, now + delay + .17);
      o.start(now + delay); o.stop(now + delay + .19);
    });
  } catch(e) {}
}

function updateTimerStyle() {
  document.body.classList.toggle("warning", timeLeft <= 60 && timeLeft > 30);
  document.body.classList.toggle("danger", timeLeft <= 30 && timeLeft > 0);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function startTimer() {
  stopTimer();
  paused = false;
  $("#pauseBtn").textContent = "一時停止";
  timeLeft = timeLimit;
  $("#timer").textContent = formatTime(timeLeft);
  updateTimerStyle();

  timerId = setInterval(() => {
    if (paused) return;
    timeLeft -= 1;
    $("#timer").textContent = formatTime(timeLeft);
    updateTimerStyle();

    if (timeLeft <= 0) {
      stopTimer();
      alarm();
      setTimeout(() => {
        alert("時間切れ！ 最終回答へ進みます。");
        showScreen("answer");
      }, 100);
    }
  }, 1000);
}

function openRules() {
  $("#rulesModal").classList.add("open");
  $("#rulesModal").setAttribute("aria-hidden","false");
}

function closeRules() {
  $("#rulesModal").classList.remove("open");
  $("#rulesModal").setAttribute("aria-hidden","true");
}

$("#rulesBtn").addEventListener("click", openRules);
$("#gameRulesBtn").addEventListener("click", openRules);
$("#closeRulesBtn").addEventListener("click", closeRules);
document.querySelector("[data-close-modal]").addEventListener("click", closeRules);

$("#minusTime").addEventListener("click", () => {
  timeLimit = Math.max(60, timeLimit - 30);
  $("#timeSetting").textContent = formatTime(timeLimit);
});

$("#plusTime").addEventListener("click", () => {
  timeLimit = Math.min(3600, timeLimit + 30);
  $("#timeSetting").textContent = formatTime(timeLimit);
});

$("#startBtn").addEventListener("click", () => {
  unlockAudio();
  if (!TOPICS || TOPICS.length < 2) {
    alert("お題データを読み込めません。");
    return;
  }
  newPair();
  viewingPlayer = 0;
  setPassScreen();
  showScreen("pass");
});

$("#showWordBtn").addEventListener("click", () => {
  const item = pair[viewingPlayer];
  $("#wordPlayer").textContent = PLAYERS[viewingPlayer];
  $("#secretWord").textContent = item.topic;
  $("#secretGenre").textContent = "ジャンル：" + item.genre;
  fitSecretWord();
  showScreen("word");
});

$("#hideWordBtn").addEventListener("click", () => {
  $("#secretWord").textContent = "● ● ●";
  $("#secretGenre").textContent = "お題は非表示です";

  if (viewingPlayer === 0) {
    $("#handoffText").textContent = "スマホをたけに渡してください。";
    $("#handoffBtn").textContent = "たけが受け取った";
  } else {
    $("#handoffText").textContent = "スマホを2人で見られる位置に戻してください。";
    $("#handoffBtn").textContent = "推理を始める";
  }
  showScreen("handoff");
});

$("#handoffBtn").addEventListener("click", () => {
  if (viewingPlayer === 0) {
    viewingPlayer = 1;
    setPassScreen();
    showScreen("pass");
  } else {
    showScreen("game");
    startTimer();
  }
});

$("#extendBtn").addEventListener("click", () => {
  timeLeft = Math.min(3600, timeLeft + 60);
  $("#timer").textContent = formatTime(timeLeft);
  updateTimerStyle();
});

$("#pauseBtn").addEventListener("click", () => {
  paused = !paused;
  $("#pauseBtn").textContent = paused ? "再開" : "一時停止";
});

let oralStep = 0;

$("#answerBtn").addEventListener("click", () => {
  stopTimer();
  oralStep = 0;
  $("#oralPrompt").textContent = "ゆかは、たけのお題を口頭で答えてください。";
  $("#oralNextBtn").textContent = "ゆかが回答した";
  showScreen("answer");
});

$("#oralNextBtn").addEventListener("click", () => {
  if (oralStep === 0) {
    oralStep = 1;
    $("#oralPrompt").textContent = "たけは、ゆかのお題を口頭で答えてください。";
    $("#oralNextBtn").textContent = "たけが回答した・正解発表";
    return;
  }

  $("#resultTitle").textContent = "正解発表！";
  $("#resultBody").innerHTML = `
    <div class="answer-box">
      <b>ゆかのお題</b><br>
      <strong>${pair[0].topic}</strong>
    </div>
    <div class="answer-box">
      <b>たけのお題</b><br>
      <strong>${pair[1].topic}</strong>
    </div>`;
  showScreen("result");
});

$("#againBtn").addEventListener("click", () => {
  newPair();
  viewingPlayer = 0;
  setPassScreen();
  document.body.classList.remove("warning","danger");
  showScreen("pass");
});

$("#homeBtn").addEventListener("click", () => {
  stopTimer();
  document.body.classList.remove("warning","danger");
  showScreen("home");
});

// Visible boot confirmation
$("#dataStatus").textContent = `お題 ${TOPICS.length.toLocaleString()}個 準備完了`;
