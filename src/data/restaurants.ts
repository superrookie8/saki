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

export const restaurants: Restaurant[] = [
	{
		id: "1",
		name: "광장시장",
		nameJP: "クァンジャン市場",
		description: "전통 시장에서 즐기는 다양한 한국 음식",
		descriptionJP: "伝統市場で楽しむ様々な韓国料理",
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
		city: "seoul",
	},
	{
		id: "2",
		name: "부산 국제시장",
		nameJP: "釜山国際市場",
		description: "부산의 대표적인 전통 시장",
		descriptionJP: "釜山を代表する伝統市場",
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
				"生水しゃぶしゃぶ",
				"カントンハルメユブチョンゴル",
				"安惠智選手と一緒なら、ガイドは要らないかも...",
			],
		},
		location: "부산 중구 신창동4가 37-1",
		locationJP: "釜山市 中区 新昌洞4街 37-1",
		link: "https://map.naver.com/p/search/%EA%B5%AD%EC%A0%9C%EC%8B%9C%EC%9E%A5%20%EC%9C%A0%EB%B6%80/place/11717699?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "busan",
	},
	{
		id: "3",
		name: "부산 해운대 암소갈비",
		nameJP: "釜山国際市場",
		description: "생갈비 맛집",
		descriptionJP: "生きたカルビのお店",
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
		city: "busan",
	},
	{
		id: "4",
		name: "수원 삼부자갈비 원천점",
		nameJP: "水原 三浦カルビ ウォンチョン店",
		description: "수원 갈비 맛집",
		descriptionJP: "水原 カルビのお店",
		images: ["/suwon/삼부자갈비.jpeg", "/suwon/삼부자갈비2.png"],
		imageDescriptions: {
			ko: ["삼부자갈비", "삼부자갈비집", "생갈비"],
			jp: ["サンブフーカルビ", "サンブフーカルビ", "生きたカルビ"],
		},
		location: "경기 수원시 영통구 중부대로 335 1층 삼부자갈비",
		locationJP: "京畿道 水原市 永東區 中浦大路 335 1F 三浦カルビ",
		link: "https://sambujagalbi.com/menu/",
		city: "suwon",
	},
	{
		id: "5",
		name: "서울 한미옥",
		nameJP: "서울 한미옥",
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
		city: "seoul",
	},
	{
		id: "6",
		name: "서울 남포면옥",
		// ... existing code ...
		nameJP: "ソウル ナンポムンオク",
		description: "북한식 고기전골을 맛볼수 있음. 명동 가까움",
		descriptionJP: "北朝鮮式の肉チョンゴルが味わえます。明洞に近いです",
		images: ["/seoul/남포면옥.jpeg", "/seoul/어복쟁반.jpeg"],
		imageDescriptions: {
			ko: ["남포면옥 전경", "어복쟁반"],
			jp: ["ナンポムメンヨク外観", "アオバショウカンバン"],
		},
		location: "서울 중구 을지로3길 24",
		locationJP: "ソウル市 中区 乙支路3ギル 24",
		link: "https://map.naver.com/p/search/%EC%96%B4%EB%B3%B5%EC%9F%81%EB%B0%98/place/11664585?c=15.01,0,0,0,dh&placePath=/home",
		city: "seoul",
	},
	{
		id: "7",
		name: "서울 궁투어",
		nameJP: "서울 궁투어",
		description: "서울과 부산의 차이는 궁 입니다.",
		descriptionJP: "ソウルと釜山の違いは宮殿です。",
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
		city: "seoul",
	},
	{
		id: "8",
		name: "서울 토속촌",
		nameJP: "ソウル トソクチョン",
		description: "삼계탕 맛집",
		descriptionJP: "サムゲタン(参鶏湯)の有名店",
		images: ["/seoul/토속촌.jpeg", "/seoul/삼계탕.jpeg"],
		imageDescriptions: {
			ko: ["토속촌 전경", "삼계탕"],
			jp: ["トソクチョン外観", "サンガテン"],
		},
		location: "서울 종로구 자하문로5길 5 토속촌",
		locationJP: "ソウル市 鐘路区 自夏門路5ギル 5 トソクチョン",
		link: "http://www.tosokchon.co.kr/main.php",
		city: "seoul",
	},
	{
		id: "9",
		name: "인천 어딘가",
		nameJP: "ソウル ホンダ",
		description: "인천에는 소희가 있어요",
		descriptionJP: "インチェオンにはソヒがいます",
		images: ["/incheon/소희1.jpg", "/incheon/소희2.jpg"],
		imageDescriptions: {
			ko: ["소희", "소희2"],
			jp: ["ソヒ", "ソヒ2"],
		},
		location: "인천, 소희가 있는 곳",
		locationJP: "インチェオンにはソヒがいます",
		link: "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%EC%9D%B8%EC%B2%9C+%EB%A7%9B%EC%A7%91&oquery=%EC%9D%B8%EC%B2%9C&tqi=jsPvVsqVOsossTDotcZssssstJl-095443&ackey=fok68f4f",
		city: "incheon",
	},
	// 더 많은 맛집 데이터를 추가할 수 있습니다
];
