export interface Restaurant {
	id: string;
	name: string;
	nameJP: string;
	description: string;
	descriptionJP: string;
	images: string[];
	imageDescriptions: {
		ko: string[];
		jp: string[];
	};
	location: string;
	locationJP: string;
	link: string;
	city: "seoul" | "busan" | "suwon" | "incheon";
}

// 도시 순서 정의를 먼저 선언
const cityOrder = ["seoul", "suwon", "busan", "incheon"] as const;

// 도시 순서대로 정렬된 레스토랑 배열
export const restaurants: Restaurant[] = [
	{
		id: "1",
		name: "광장시장",
		nameJP: "クァンジャン市場",
		description: "전통 시장에서 즐기는 다양한 한국 음식",
		descriptionJP:
			"伝統市場で楽しむ様々な韓国料理、ビンデトッは肉生地を油で焼いたもので、クァベギはドーナツです。",
		images: [
			"/seoul/광장시장.jpeg",
			"/seoul/순희네빈대떡.jpeg",
			"/seoul/찹쌀꽈배기.jpeg",
		],
		imageDescriptions: {
			ko: ["광장시장 전경", "유명한 순희네 빈대떡", "바삭한 찹쌀꽈배기"],
			jp: [
				"クァンジャン市場の全景",
				"有名なスンヒのビンデトッ",
				"サクサクのもち米のクァベギ",
			],
		},
		location: "서울 종로구 창경궁로 88",
		locationJP: "ソウル市 鐘路区 昌慶宮路 88",
		link: "http://www.kwangjangmarket.co.kr/",
		city: "seoul" as const,
	},
	{
		id: "2",
		name: "부산 국제시장",
		nameJP: "釜山国際市場",
		description: "부산의 대표적인 전통 시장",
		descriptionJP:
			"釜山を代表する伝統市場、様々な食べ物とお店があります。油揚げの中に具材を入れた油揚げ鍋としゃぶしゃぶがおすすめですが、他にも多くの料理があります。",
		images: [
			"/busan/국제시장.jpeg",
			"/busan/생수샤브샤브.jpeg",
			"/busan/깡통할매유부전골.jpeg",
			"/busan/안혜지.jpg",
		],
		imageDescriptions: {
			ko: ["국제시장 전경", "생수샤브샤브", "깡통할매유부전골", "안혜지"],
			jp: [
				"国際市場の全景",
				"生水しゃぶしゃぶ,",
				"カントンハルメユブチョンゴル",
				"安惠智選手と一緒なら、ガイドは要らないかも...",
			],
		},
		location: "부산 중구 신창동4가 37-1",
		locationJP: "釜山市 中区 新昌洞4街 37-1",
		link: "https://map.naver.com/p/search/%EA%B5%AD%EC%A0%9C%EC%8B%9C%EC%9E%A5%20%EC%9C%A0%EB%B6%80/place/11717699?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "busan" as const,
	},
	{
		id: "3",
		name: "부산 해운대 암소갈비",
		nameJP: "釜山 海雲台 アンソカルビ",
		description: "생갈비 맛집",
		descriptionJP:
			"生カルビの名店、味付けしていないカルビを生カルビと言います。味付けの味ではなく、お肉本来の味を楽しめます。",
		images: [
			"/busan/암소갈비.png",
			"/busan/암소갈비집.jpeg",
			"/busan/생갈비.jpeg",
		],
		imageDescriptions: {
			ko: ["암소갈비", "암소갈비집", "생갈비"],
			jp: ["アンソカルビ", "アンソカルビ", "生きたカルビ"],
		},
		location: "부산광역시 해운대구 해운대해변로 333 해운대암소갈비집",
		locationJP:
			"釜山広域市 海雲台区 海雲台海辺路 333 海雲台アンソカルビ、予約必須",
		link: "https://app.catchtable.co.kr/ct/shop/hgh",
		city: "busan" as const,
	},
	{
		id: "4",
		name: "수원 삼부자갈비 원천점",
		nameJP: "水原 三父子カルビ ウォンチョン店",
		description: "수원 갈비 맛집",
		descriptionJP:
			"水原カルビの名店、チェ・ファジョンさんのYouTubeで見たのですが美味しいそうです。40年の伝統があります。",
		images: ["/suwon/삼부자갈비.jpeg", "/suwon/삼부자갈비2.png"],
		imageDescriptions: {
			ko: ["삼부자갈비", "삼부자갈비집"],
			jp: ["三父子カルビ", "三父子カルビ"],
		},
		location: "경기 수원시 영통구 중부대로 335 1층 삼부자갈비",
		locationJP: "京畿道 水原市 永東區 中浦大路 335 1F 三父子カルビ",
		link: "https://sambujagalbi.com/menu/",
		city: "suwon" as const,
	},
	{
		id: "5",
		name: "서울 한미옥",
		nameJP: "ソウル ハンミョク",
		description:
			"어서와 한국은 처음이지 라는 프로그램에서 프랑스 친구들이 먹었던 고기",
		descriptionJP:
			"「ようこそ韓国は初めてでしょう」という番組でフランス人の友達が食べた肉",
		images: ["/seoul/한미옥.jpeg", "/seoul/구절판.jpeg", "/seoul/내부.jpeg"],
		imageDescriptions: {
			ko: ["한미옥 전경", "구절판요리", "조금 비싸요. 예약해야해요"],
			jp: [
				"ハンミョク外観",
				"クジョルパン料理",
				"少し高いです. 予約が必要です",
			],
		},
		location: "서울 강남구 선릉로 822 지하 1층",
		locationJP: "ソウル市 江南区 仙林路 822 地下1階",
		link: "https://app.catchtable.co.kr/ct/shop/hanmiok_cd",
		city: "seoul" as const,
	},
	{
		id: "6",
		name: "서울 남포면옥",
		nameJP: "ソウル ナンポミョンオク",
		description: "북한식 고기전골을 맛볼수 있음. 명동 가까움",
		descriptionJP:
			"北朝鮮式の肉鍋が味わえます。冷麺もあります。明洞に近いです。明洞に用事があれば立ち寄るのがおすすめです。",
		images: ["/seoul/남포면옥.jpeg", "/seoul/어복쟁반.jpeg"],
		imageDescriptions: {
			ko: ["남포면옥 전경", "어복쟁반"],
			jp: ["ナンポミョンオク外観", "アオバショウカンバン"],
		},
		location: "서울 중구 을지로3길 24",
		locationJP: "ソウル市 中区 乙支路3ギル 24",
		link: "https://map.naver.com/p/search/%EC%96%B4%EB%B3%B5%EC%9F%81%EB%B0%98/place/11664585?c=15.01,0,0,0,dh&placePath=/home",
		city: "seoul" as const,
	},
	{
		id: "7",
		name: "서울 궁투어",
		nameJP: "ソウル 宮殿ツアー",
		description:
			"서울과 부산의 차이는 궁 입니다. 경복궁, 창덕궁, 경희궁, 창경궁, 창경궁 주변에 모두 있어요. 경복궁의 남쪽 정문이 광화문입니다.",
		descriptionJP:
			"ソウルと釜山の違いは宮殿です。景福宮、昌徳宮、慶熙宮、昌慶宮がすべて周辺にあります。景福宮の南門が光化門です。",
		images: [
			"/seoul/경복궁.jpeg",
			"/seoul/경복궁2.jpeg",
			"/seoul/북촌.jpeg",
			"/seoul/고궁박물관.jpeg",
		],
		imageDescriptions: {
			ko: [
				"왕이 살았던 곳",
				"건물 전경도 좋지만 건물 천장도 멋져요",
				"근처 북촌 서촌 놀러가기 좋음",
				"박물관들도 모여있음",
			],
			jp: [
				"王様が住んでいた場所",
				"建物の外観も素敵ですが、天井も見事です",
				"近くの北村・西村も観光におすすめ",
				"博物館も集まっています",
			],
		},
		location: "서울 종로구 사직로 161 경복궁",
		locationJP: "ソウル市 鐘路区 司街 161 景福宮",
		link: "https://map.naver.com/p/entry/place/11571707?c=15.00,0,0,0,dh&placePath=/home",
		city: "seoul" as const,
	},
	{
		id: "8",
		name: "서울 토속촌",
		nameJP: "ソウル トソクチョン",
		description: "삼계탕 맛집",
		descriptionJP:
			"サムゲタン（参鶏湯）の有名店、鶏を漢方スープでじっくり煮込んで体に良い薬膳スープです。",
		images: ["/seoul/토속촌.jpeg", "/seoul/삼계탕.jpeg"],
		imageDescriptions: {
			ko: ["토속촌 전경", "삼계탕"],
			jp: ["トソクチョン外観", "サンガテン"],
		},
		location: "서울 종로구 자하문로5길 5 토속촌",
		locationJP: "ソウル市 鐘路区 自夏門路5ギル 5 トソクチョン",
		link: "http://www.tosokchon.co.kr/main.php",
		city: "seoul" as const,
	},
	{
		id: "9",
		name: "수원 화성행궁",
		nameJP: "水原華城行宮",
		description: "수원 화성행궁, 통닭거리, 행리단길, 방화수류정 산책",
		descriptionJP:
			"水原華城行宮、チメッ通り(chicken street)、ヘンリダンギル、放火水流亭の散策",
		images: [
			"/suwon/화성행궁.jpeg",
			"/suwon/통닭거리.jpeg",
			"/suwon/행리단길.jpeg",
			"/suwon/방화수류정.jpeg",
		],
		imageDescriptions: {
			ko: ["화성행궁", "통닭거리", "행리단길", "방화수류정"],
			jp: ["華城行宮", "チメッ通り", "ヘンリダンギル", "放火水流亭"],
		},
		location: "경기 수원시 팔달구 정조로 825",
		locationJP: "京畿道 水原市 八達区 正祖路 825",
		link: "https://map.naver.com/p/search/%EC%88%98%EC%9B%90%20%ED%99%94%EC%84%B1%ED%96%89%EA%B6%81/place/31169145?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "suwon" as const,
	},
	{
		id: "10",
		name: "부산 영진국밥",
		nameJP: "釜山 ヨンジングッパッ",
		description: "DAY6 성진의 추천 맛집",
		descriptionJP:
			"DAY6 ソンジンのおすすめのお店、豚の骨でだしを取り、茹でた肉と一緒に出てくるスープご飯です。",
		images: ["/busan/영진국밥전경.jpeg", "/busan/영진국밥.jpeg"],
		imageDescriptions: {
			ko: ["영진국밥 전경", "누군가의 국밥"],
			jp: ["ヨンジングッパッ外観", "誰かの国チョンゴル"],
		},
		location: "부산 사하구 하신번영로157번길 39",
		locationJP: "釜山市 沙下区 下新文路157番地39",
		link: "https://map.naver.com/p/entry/place/16634562?c=15.00,0,0,0,dh",
		city: "busan" as const,
	},
	{
		id: "11",
		name: "부산 백두산",
		nameJP: "釜山 白頭山",
		description: "다대포해수욕장 근처 해물칼국수집",
		descriptionJP:
			"多大浦海水浴場近くの海鮮カルグクス専門店、小麦粉を練って太く切って麺を作り、海鮮と一緒にだしで煮込んで食べる料理です。",
		images: [
			"/busan/백두산.jpeg",
			"/busan/칼국수.jpeg",
			"/busan/다대포해수욕장.jpeg",
		],
		imageDescriptions: {
			ko: ["백두산", "칼국수", "다대포해수욕장"],
			jp: ["バクドサン", "カルクスウ", "多太浦海水浴場"],
		},
		location: "부산 사하구 몰운대1길 11",
		locationJP: "釜山市 沙下区 茂林大路11番地",
		link: "https://map.naver.com/p/entry/place/16669297?c=15.00,0,0,0,dh&placePath=/home",
		city: "busan" as const,
	},
	{
		id: "12",
		name: "부산 다대포 할매집",
		nameJP: "釜山 多大浦 ハルメジプ",
		description: "다대포 해수욕장 근처 문어삼합집",
		descriptionJP:
			"多大浦海水浴場近くのタコサムハプ専門店、3種類の材料を包んで食べる料理をサムハプと言います。",
		images: ["/busan/할매집.jpeg", "/busan/문어삼합.jpeg"],
		imageDescriptions: {
			ko: ["다대포 할매집", "문어삼합"],
			jp: ["多大浦ハルメジプ", "タコサムハプ"],
		},
		location: "부산광역시 사하구 몰운대1길 55 다대포 할매집",
		locationJP: "釜山広域市 沙下区 茂雲台1ギル 55 多大浦ハルメジプ",
		link: "https://map.naver.com/p/search/%EB%8B%A4%EB%8C%80%ED%8F%AC%20%ED%95%A0%EB%A7%A4%EC%A7%91/place/1935100363?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "busan" as const,
	},
	{
		id: "13",
		name: "서울 우래옥",
		nameJP: "ソウル ウラオク",
		description: "냉면 맛집",
		descriptionJP: "冷麺の名店、平壌式冷麺が人気です。",
		images: ["/seoul/우래옥전경.jpeg", "/seoul/냉면.jpeg"],
		imageDescriptions: {
			ko: ["우래옥 전경", "냉면"],
			jp: ["ウラオク外観", "冷麺"],
		},
		location: "서울 중구 창경궁로 62-29",
		locationJP: "ソウル市 鐘路区 昌慶宮路 62-29",
		link: "https://map.naver.com/p/entry/place/11679381?lng=126.9987029&lat=37.5682697&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh",
		city: "seoul" as const,
	},
	{
		id: "14",
		name: "인천 어딘가",
		nameJP: "インチョン どこか",
		description: "인천에는 소희가 있어요",
		descriptionJP:
			"インチョンにはソヒがいます。ソヒはカニの塩辛、エビの塩辛、サーモンの塩辛など発酵食品が好きです。",
		images: ["/incheon/소희1.jpg", "/incheon/소희2.jpg"],
		imageDescriptions: {
			ko: ["소희", "소희2"],
			jp: ["ソヒ", "ソヒ2"],
		},
		location: "인천, 소희가 있는 곳",
		locationJP: "インチョンにはソヒがいます",
		link: "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%EC%9D%B8%EC%B2%9C+%EB%A7%9B%EC%A7%91&oquery=%EC%9D%B8%EC%B2%9C&tqi=jsPvVsqVOsossTDotcZssssstJl-095443&ackey=fok68f4f",
		city: "incheon" as const,
	},
	// 더 많은 맛집 데이터를 추가할 수 있습니다
].sort((a, b) => {
	return cityOrder.indexOf(a.city) - cityOrder.indexOf(b.city);
});
