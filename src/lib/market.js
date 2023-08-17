export const markets = [
  {
    name: "뚝도청춘시장",
    address: "서울 성동구 성수이로 32-15 2층",
    isParking: true,
    timeline: "매일 09:00 ~ 23:00",
    stores: [
      {
        name: "성수 물고기",
        category: "횟집",
        image: "/pics/marketTitle/seongSuTitle.png",
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
            img: "/pics/cream_gazami.png",
            name: "크림가자미",
            price: "20,000원",
            description: "버터에 구운 가자미에 크림소스와 감자를 곁들인 안주",
          },
        ],
        submenu: [
          {
            name: "젓갈 플래터",
            price: "29,000",
          },
          {
            name: "똠얌부대전골",
            price: "26,000",
          },
          {
            name: "메론프로슈토",
            price: "17,000",
          },
        ],
      },
      {
        name: "2002횟집",
        category: "횟집",
        image: "/pics/marketTitle/2002Title.jpg",
        address: "서울특별시 성동구 성수동 2가 339-122",
        rating: 4,
        times: [],
        menu: [
          {
            img: "/pics/marketMenu/2002Menu.jpg",
            name: "생선회",
            price: "30,000원",
            description: "매번 사장님 직접 추천",
          },
        ],
        submenu: [
          {
            name: "주인장 추천",
            price: "30,000",
          },
          {
            name: "가을전어",
            price: "10,000",
          },
          {
            name: "광어/우럭/숭어",
            price: "20,000",
          },
        ],
      },
      {
        name: "대성정",
        category: "한식",
        image: "/pics/marketTitle/bigTitle.jpg",
        address: "서울특별시 성동구 성수동 2가 339-122",
        rating: 3,
        times: [],
        menu: [
          {
            img: "/pics/marketMenu/bigSeungMenu.jpg",
            name: "닭볶음탕",
            price: "55,000원",
            description: "",
          },
        ],
        submenu: [
          {
            name: "닭백숙",
            price: "55,000",
          },
          {
            name: "과매기(대)",
            price: "35,000",
          },
          {
            name: "청국장",
            price: "7,000",
          },
        ],
      },
      {
        name: "떡마을",
        category: "떡",
        image: "/pics/marketTitle/ddeokTitle.jpg",
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
            img: "/pics/marketMenu/riceCountryMenu.jpg",
            name: "국말이떡",
            price: "2,000원",
            description: "",
          },
        ],
        submenu: [
          {
            name: "국말이떡",
            price: "2,000",
          },
          {
            name: "떡케잌",
            price: "변동",
          },
          {
            name: "백일떡",
            price: "변동",
          },
        ],
      },
      {
        name: "뚝도지기",
        category: "횟집",
        image: "/pics/marketTitle/ddukdoJigiTitle.jpg",
        address: "서울특별시 성동구 성수동 2가 339-122",
        rating: 3,
        times: [
          {
            day: "월 ~ 토",
            time: "오후 5시 ~ 오후 11시",
          },
          {
            day: "휴무일",
            time: "매주 일요일",
          },
        ],
        menu: [
          {
            img: "/pics/marketMenu/ddukdoMenu.jpg",
            name: "생선회",
            price: "싯가",
            description: "",
          },
        ],
        submenu: [
          {
            name: "해신탕",
            price: "100,000",
          },
          {
            name: "광어",
            price: "20,000",
          },
          {
            name: "해산물 모둠",
            price: "30,000",
          },
        ],
      },
      {
        name: "뚱이네포차",
        category: "포차",
        image: "/pics/marketTitle/ddungTitle.jpg",
        address: "서울특별시 성동구 성수동 2가 339-122",
        rating: 3,
        times: [],
        menu: [
          {
            img: "/pics/marketMenu/ddungMenu.jpg",
            name: "돼지고기 두루치기",
            price: "",
            description: "",
          },
        ],
        submenu: [],
      },
      {
        name: "락지",
        category: "낙지 요리 전문점",
        image: "/pics/marketTitle/rakjiTitle.png",
        address: "서울특별시 성동구 성수동 2가 339-122",
        rating: 3,
        times: [
          {
            day: "월 ~ 금",
            time: "오후 3시 ~ 오후 11시",
          },
          {
            day: "토 ~ 일",
            time: "오전 11시 ~ 오후 11시",
          },
        ],
        menu: [
          {
            img: "/pics/marketMenu/rakjiMenu.jpg",
            name: "낙지볶음",
            price: "20,000원",
            description: "",
          },
        ],
        submenu: [
          {
            name: "낙지볶음(1인)",
            price: "13,000",
          },
          {
            name: "수제 오징어 튀김",
            price: "15,000",
          },
          {
            name: "낙지해물전",
            price: "15,000",
          },
        ],
      },
      {
        name: "미정이네 코다리찜",
        category: "코다리 요리 전문점",
        image: "/pics/marketTitle/mijeongTitle.jpg",
        address: "서울특별시 성동구 성수동 2가 339-122",
        rating: 3,
        times: [],
        menu: [
          {
            img: "/pics/marketMenu/mijeongMenu.jpg",
            name: "코다리찜",
            price: "",
            description: "",
          },
        ],
        submenu: [
          {
            name: "코다리찜(2인분)",
            price: "24,000",
          },
          {
            name: "닭볶음탕(3,4인분)",
            price: "30,000",
          },
          {
            name: "제육볶음",
            price: "",
          },
        ],
      },
      {
        name: "서울 맛집",
        category: "한식",
        image: "/pics/marketTitle/matTitle.jpg",
        address: "서울특별시 성동구 성수동 2가 339-122",
        rating: 3,
        times: [
          {
            day: "매일",
            time: "오전 11시 반 ~ 오후 10시",
          },
        ],
        menu: [
          {
            img: "/pics/marketMenu/seoulMatMenu.jpg",
            name: "감자탕",
            price: "",
            description: "",
          },
        ],
        submenu: [
          {
            name: "초벌 숯 돼지고기",
            price: "10,000",
          },
          {
            name: "초벌 숯 바다장어",
            price: "10,000",
          },
          {
            name: "꼬막비빔",
            price: "7,000",
          },
        ],
      },
      {
        name: "연탄 생고기",
        category: "생고기",
        image: "/pics/marketTitle/yeontanTitle.jpg",
        address: "서울특별시 성동구 성수동 2가 339-122",
        rating: 3,
        times: [],
        menu: [],
        submenu: [],
      },
      {
        name: "연탄 요리집",
        image: "/pics/marketTitle/yeontanTitle.jpg",
        address: "서울특별시 성동구 성수동 2가 339-122",
        rating: 3,
        times: [
          {
            day: "매일",
            time: "오후 4시 ~ 새벽 5시",
          },
        ],
        menu: [
          {
            img: "/pics/marketMenu/yeontanMenu.jpg",
            name: "막창 연탄구이",
            price: "",
            description: "",
          },
        ],
        submenu: [
          {
            name: "홍가리비찜",
            price: "23,000",
          },
          {
            name: "병어+무",
            price: "29,000",
          },
          {
            name: "명란구",
            price: "16,000",
          },
        ],
      },
      {
        name: "영수 분식",
        category: "분식",
        image: "/pics/marketTitle/seongSuTitle.png",
        address: "서울특별시 성동구 성수동 2가 339-122",
        rating: 3,
        times: [
          {
            day: "화 ~ 토",
            time: "오전 11시 반 ~ 오후 10시",
          },
          {
            day: "휴무일",
            time: "매주 일요일",
          },
          {
            day: "브레이크 타임",
            time: "오후 1시 20 ~ 오후 2시",
          },
        ],
        menu: [
          {
            img: "/pics/marketMenu/yeongsuMenu.jpg",
            name: "치즈곱창",
            price: "20,000원",
            description: "",
          },
        ],
        submenu: [
          {
            name: "곱창 볶음",
            price: "11,000",
          },
          {
            name: "오징어 볶음",
            price: "13,000",
          },
          {
            name: "돼지 머리 수육",
            price: "13,000",
          },
        ],
      },
      {
        name: "우리동네 칼국수",
        category: "",
        image: "/pics/marketTitle/seongSuTitle.png",
        address: "서울특별시 성동구 성수동 2가 339-122",
        rating: 3,
        times: [],
        menu: [
          {
            img: "/pics/marketMenu/rakjiMenu.jpg",
            name: "보리밥",
            price: "",
            description: "",
          },
        ],
        submenu: [
          {
            name: "멸치 칼국수",
            price: "5,000",
          },
          {
            name: "장칼국수",
            price: "6,000",
          },
          {
            name: "만두 수제비",
            price: "6,000",
          },
        ],
      },
      {
        name: "은식당",
        category: "",
        image: "/pics/marketTitle/seongSuTitle.png",
        address: "서울특별시 성동구 성수동 2가 339-122",
        rating: 3,
        times: [
          {
            day: "월 ~ 금",
            time: "오전 11시 ~ 오후 10시",
          },
          {
            day: "토요일",
            time: "오전 11시 ~ 오후 3시",
          },
          {
            day: "브레이크타임",
            time: "오후 3시 ~ 오후 5시",
          },
          {
            day: "휴무일",
            time: "매주 일요일",
          },
        ],
        menu: [],
        submenu: [
          {
            name: "나혼자 갈비찜",
            price: "15,000",
          },
          {
            name: "매운 갈비찜",
            price: "28,000",
          },
          {
            name: "콩비지 찌개",
            price: "8,000",
          },
        ],
      },
      {
        name: "지수 언니",
        category: "",
        image: "/pics/marketTitle/jisuTitle.png",
        address: "서울특별시 성동구 성수동 2가 339-122",
        rating: 3,
        times: [
          {
            day: "매일",
            time: "오전 12시 ~ 오후 8시",
          },
        ],
        menu: [
          {
            img: "/pics/marketMenu/jisuMenu.jpg",
            name: "컵케이크",
            price: "변동",
            description: "버터에 구운 가자미에 크림소스와 감자를 곁들인 안주",
          },
        ],
        submenu: [
          {
            name: "젓갈 플래터",
            price: "29,000",
          },
          {
            name: "똠얌부대전골",
            price: "26,000",
          },
          {
            name: "메론프로슈토",
            price: "17,000",
          },
        ],
      },
      {
        name: "성수 물고기",
        category: "",
        image: "/pics/marketTitle/seongSuTitle.png",
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
            img: "/pics/cream_gazami.png",
            name: "크림가자미",
            price: "20,000원",
            description: "버터에 구운 가자미에 크림소스와 감자를 곁들인 안주",
          },
        ],
        submenu: [
          {
            name: "젓갈 플래터",
            price: "29,000",
          },
          {
            name: "똠얌부대전골",
            price: "26,000",
          },
          {
            name: "메론프로슈토",
            price: "17,000",
          },
        ],
      },
      {
        name: "성수 물고기",
        category: "",
        image: "/pics/marketTitle/seongSuTitle.png",
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
            img: "/pics/cream_gazami.png",
            name: "크림가자미",
            price: "20,000원",
            description: "버터에 구운 가자미에 크림소스와 감자를 곁들인 안주",
          },
        ],
        submenu: [
          {
            name: "젓갈 플래터",
            price: "29,000",
          },
          {
            name: "똠얌부대전골",
            price: "26,000",
          },
          {
            name: "메론프로슈토",
            price: "17,000",
          },
        ],
      },
    ],
  },
];
