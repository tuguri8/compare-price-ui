import {action, observable} from 'mobx';
import {asyncAction} from 'mobx-utils';
import {api} from "../api";

export default class ParkingInfoStore {
    @observable parkingData = this.dummyParkingData();
    @observable email = null;
    @observable loading = false;
    @observable imgList = ['https://t1.daumcdn.net/cfile/tistory/2322044857EFBB1713','http://img.asiatoday.co.kr/file/2019y/06m/30d/2019063001003093900180291.jpg',
  'http://www.ulsanpress.net/news/photo/201810/317629_117491_3056.jpg','http://imgnews.naver.net/image/5038/2015/12/24/459538_113430_300_99_20151224203208.JPG','http://m.nowonsc.kr/images/group02/resident_gallery_1.jpg',
'http://www.sijung.co.kr/news/photo/201903/227899_62958_94.jpg','http://www.yangsanilbo.com/news/photo/201702/61394_26794_5319.jpg','http://www.brnews.co.kr/news/photo/201808/918_1531_5436.jpg','http://www.nyjnews.net/imgdata/nyjnews_net/201909/2019090648293600.jpg'];

    constructor(root) {
        this.root = root;
    }

    @action handleparkingData = (parkingData) => {
        this.parkingData = parkingData;
    };

    @action handleEmail = (email) => {
        this.email = email;
    };

    @asyncAction
    async* getParkingData(code) {
      this.loading = true;
      yield api.getCompare(code).then(res => {
        this.parkingData = res.data;
      }).catch(err => console.log("Error"));
      // this.parkingData = result;
      this.loading = yield false;
    };

    dummyParkingData = () => {
      return [
    {
        "lprice": "25500",
        "original_price": "30900",
        "category": "fashion",
        "image": "https://shopping-phinf.pstatic.net/main_2117096/21170964897.20191027143959.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=21170964897",
        "title": "엠블러 AMBLER 19FW 자수 오버핏 맨투맨 아이보리 AMM718",
        "original_name": "AMBLER 자수 오버핏 맨투맨"
    },
    {
        "lprice": "8490",
        "original_price": "8890",
        "category": "cosmetic",
        "image": "https://shopping-phinf.pstatic.net/main_1609518/16095185509.20181113102214.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=16095185509",
        "title": "롬앤 제로 벨벳 틴트 5.5g",
        "original_name": "롬앤 제로벨벳 틴트"
    },
    {
        "lprice": "5400",
        "original_price": "5500",
        "category": "food",
        "image": "https://shopping-phinf.pstatic.net/main_1217284/12172845030.6.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=12172845030",
        "title": "비다미아/몽베스트 생수 1리터/2리터/330ml/500ml 무료배송",
        "original_name": "몽베스트 생수"
    },
    {
        "lprice": "6550",
        "original_price": "3490",
        "category": "food",
        "image": "https://shopping-phinf.pstatic.net/main_8110412/81104120655.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=81104120655",
        "title": "미닛메이드 175ml x 30캔",
        "original_name": "미닛메이드 오렌지주스 "
    },
    {
        "lprice": "21000",
        "original_price": "6300",
        "category": "food",
        "image": "https://shopping-phinf.pstatic.net/main_8204135/82041355195.1.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=82041355195",
        "title": "[커먼팩] 대만 스타벅스 허니자몽소스와 천인명차 블랙티(루비홍차) 세트",
        "original_name": "스타벅스 자몽허니블랙티"
    },
    {
        "lprice": "17940",
        "original_price": "18550",
        "category": "cosmetic",
        "image": "https://shopping-phinf.pstatic.net/main_1228307/12283077555.20170918140300.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=12283077555",
        "title": "이니스프리 올리브 리얼 Ex 2종 세트",
        "original_name": "이니스프리 올리브 스킨케어 세트"
    },
    {
        "lprice": "10400",
        "original_price": "10400",
        "category": "culture",
        "image": "https://shopping-phinf.pstatic.net/main_2002404/20024045305.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=20024045305",
        "title": "광동/직배송- -제주 삼다수 2L x 12병",
        "original_name": "제주 삼다수 2L x 12병"
    },
    {
        "lprice": "25550",
        "original_price": "3500",
        "category": "food",
        "image": "https://shopping-phinf.pstatic.net/main_8085984/8085984510.1.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=8085984510",
        "title": "동원 EPA 프리미엄 참치 3kg 대용량/ 다랑어 통조림 캔/업소용/덕용/김밥/코스트코",
        "original_name": "참치김밥"
    },
    {
        "lprice": "1870",
        "original_price": "2800",
        "category": "food",
        "image": "https://shopping-phinf.pstatic.net/main_5674134/5674134008.20151124182253.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=5674134008",
        "title": "코카콜라 제로 1.5L",
        "original_name": "코카콜라 1.5L"
    },
    {
        "lprice": "15700",
        "original_price": "16110",
        "category": "food",
        "image": "https://shopping-phinf.pstatic.net/main_8144304/81443048895.1.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=81443048895",
        "title": "코카콜라 300ml x 24pet 500ml",
        "original_name": "코카콜라 500ml x 24"
    },
    {
        "lprice": "3600",
        "original_price": "4690",
        "category": "interior",
        "image": "https://shopping-phinf.pstatic.net/main_1922834/19228342210.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=19228342210",
        "title": "삶 탐사 핸드북:하나님이 당신에게 주실 수 있는 최고의 선물은 무엇일까요?",
        "original_name": "쿠팡 브랜드 - 탐사수"
    },
    {
        "lprice": "4830",
        "original_price": "6000",
        "category": "cosmetic",
        "image": "https://shopping-phinf.pstatic.net/main_1783047/17830478782.20190304105101.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=17830478782",
        "title": "페리페라 잉크 더 에어리 벨벳 4g",
        "original_name": "페리페라 립틴트"
    },
    {
        "lprice": "460",
        "original_price": "13000",
        "category": "food",
        "image": "https://shopping-phinf.pstatic.net/main_5711154/5711154939.20130220120814.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=5711154939",
        "title": "동아오츠카 포카리스웨트 245ml",
        "original_name": "포카리스웨트"
    },
    {
        "lprice": "9900",
        "original_price": "2370",
        "category": "food",
        "image": "https://shopping-phinf.pstatic.net/main_1063700/10637004460.10.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=10637004460",
        "title": "하리보 골드베렌 980g 트롤리 젤리 오레오 담라 수입과자",
        "original_name": "하리보 골드베렌 츄잉젤리"
    },
    {
        "lprice": "730",
        "original_price": "2000",
        "category": "food",
        "image": "https://shopping-phinf.pstatic.net/main_6743199/6743199157.20150625181338.jpg",
        "link": "https://search.shopping.naver.com/gate.nhn?id=6743199157",
        "title": "하리보 골드베렌 100g",
        "original_name": "하리보 젤리"
    }
];
    }
}
