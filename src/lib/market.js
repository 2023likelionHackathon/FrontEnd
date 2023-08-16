export const markets = [
  {
    name: "뚝도청춘시장",
    address: "서울 성동구 성수이로 32-15 2층",
    isParking: true,
    timeline: "매일 09:00 ~ 23:00",
    stores: [
      {
        name: "성수 물고기",
        address: "서울특별시 성동구 성수동 2가 339-122",
        rating: 3,
        times: [
          {
            day: "화 ~ 목",
            time: "오후 4시 ~ 자정 12시",
          },
          {
            day: "휴무일",
            time: "매주 월요일",
          },
        ],
        menu: [
          {
            img: "/",
            name: "크림가자미",
            price: "20,000원",
            description: "버터에 구운 가자미에 크림소스와 감자를 곁들인 안주",
          },
        ],
      },
    ],
  },
];
