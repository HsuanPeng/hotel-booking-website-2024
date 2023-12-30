import ImgOne from "assets/pic/home/img01.jpg";
import ImgTwo from "assets/pic/home/img02.jpg";
import ImgThree from "assets/pic/home/img03.jpg";
import ImageItem from "../ImageItem";
import Dot from "assets/pic/home/dot.png";

import {
  NewsContainer,
  NewsContentContainer,
  DotTop,
  DotBottom,
  NewsTitleContainer,
  NewsTitle,
  NewsTitleLine,
  NewsContent,
} from "./News.style";

const News = () => {
  return (
    <NewsContainer>
      <NewsContentContainer>
        <DotTop>
          <img src={Dot} />
        </DotTop>
        <DotBottom>
          <img src={Dot} />
        </DotBottom>
        <NewsTitleContainer>
          <NewsTitle variant="h1">最新消息</NewsTitle>
          <NewsTitleLine />
        </NewsTitleContainer>
        <NewsContent>
          <ImageItem
            src={ImgOne}
            title="秋季旅遊，豪華享受方案"
            content="秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。"
          />
          <ImageItem
            src={ImgTwo}
            title="輕鬆住房專案"
            content="我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。"
          />
          <ImageItem
            src={ImgThree}
            title="耶誕快樂，住房送禮"
            content="聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧們為您準備了特別的禮物！！"
          />
        </NewsContent>
      </NewsContentContainer>
    </NewsContainer>
  );
};

export default News;
