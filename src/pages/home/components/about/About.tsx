import {
  AboutContainer,
  AboutBackground,
  AboutContentContainer,
  AboutTitleContainer,
  AboutTitleBox,
  AboutTitleLine,
  AboutTextContainer,
  AboutTitle,
  AboutText,
} from "./About.style";

const About = () => {
  return (
    <AboutContainer>
      <AboutContentContainer>
        <AboutTitleContainer>
          <AboutTitleBox>
            <AboutTitle variant="h1">關於我們</AboutTitle>
          </AboutTitleBox>
          <AboutTitleLine />
        </AboutTitleContainer>
        <AboutTextContainer>
          <AboutText>
            享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
            我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
          </AboutText>
          <AboutText>
            我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
            我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
          </AboutText>
          <AboutText>
            在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
          </AboutText>
          <AboutText>
            享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
          </AboutText>
        </AboutTextContainer>
      </AboutContentContainer>
      <AboutBackground />
    </AboutContainer>
  );
};

export default About;
