import { useEffect, useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import styled from 'styled-components';

const dataDefinition = {
  bannerEvent: String,
  bannerImageUrl: String,
  brandAction: String,
  brandDescription: String,
  brandImageUrl: String,
  brandMaximumDownload: Number,
  brandType: String,
  buyActions: Array,
  category: Array,
  color: Array,
  createdAt: String,
  creator: String,
  designStoryContent: String,
  designStoryTitle: String,
  downloadKey: String,
  downloads: Number,
  figure: [{ keyword: String, text: String, imageUrl: String }],
  hashtag: Array,
  hide: Boolean,
  imageUrl: String,
  images: Array,
  isBuy: Boolean,
  isFreeUse: Boolean,
  isLiveTheme: Boolean,
  isNew: Boolean,
  isNewTheme: Boolean,
  isOnlyBuy: Boolean,
  isOnlyStore: Boolean,
  lang: String,
  localDownloadBuffer: Number,
  localDownloads: Number,
  localFreeUseCount: Number,
  localFreeUseCountBuffer: Number,
  maximumIOSVersion: Number,
  maximumVersion: Number,
  minimulIOSVersion: Number,
  minimulVersion: Number,
  mood: Array,
  name: String,
  officialRecommendPriorities: null,
  officialRecommendPriority: Number,
  paymentType: String,
  platform: Array,
  price: Number,
  priority: Number,
  randomPriority: Number,
  recommend: Boolean,
  recommendPriority: Number,
  relatedKeyword: Array,
  requireVersion: Number,
  reviewNoticeContent: String,
  reviewNoticeTitle: String,
  reviewPlaceholder: String,
  sale: Number,
  specialImageUrl1: String,
  specialImageUrl2: String,
  testImageUrls: Array,
  testcase: Array,
  themeId: String,
  updatedAt: String,
  usedPaymentBuffer: Number,
  versionBranches: Array,
  __v: Number,
  _id: String,
};

const PreferenceData = [
  { emoji: '😊', coment: '맘에들어요', count: 0 },
  { emoji: '😍', coment: '심쿵했어요', count: 0 },
  { emoji: '😉', coment: '응원해요', count: 0 },
  { emoji: '🤣', coment: '갖고싶어요', count: 0 },
];

function Detail() {
  const [data, setData] = useState(dataDefinition);

  const request = async () => {
    try {
      const res = await fetch(`${API.THEME_DETAIL}`);
      const result = await res.json();
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    request();
  }, []);

  console.log(data.hashtag);

  return (
    <Wrapper>
      <Header>
        <BsArrowLeftShort className="prev" />
      </Header>

      <ThemeContainer>
        <ThemePreview>
          <img
            // src="https://s3.plkey.app/OWN_H0-L-39/OWN_H0-L-39_preview.gif"
            src={data.imageUrl}
            alt="theme_preview"
          />
        </ThemePreview>
        <ThemeTitle>
          <ThemeName>
            <h1>{data.name}</h1>
            {/* <h1>앙무</h1> */}
            <h2>{data.creator}</h2>
            {/* <h2>코핀</h2> */}
          </ThemeName>
          <ThemeShare>
            <div />
          </ThemeShare>
        </ThemeTitle>
        <ThemeHashtag>
          {data.hashtag.map((tag, index) => {
            return <p key={index}>{tag}</p>;
          })}
          {/* <p>이벤트</p>
          <p>캐릭터</p>
          <p>새</p>
          <p>동물</p>
          <p>앙증맞은</p>
          <p>동글동글</p> */}
        </ThemeHashtag>
        <ThemeAd>
          <p>AD</p>
        </ThemeAd>
        <ThemeFigure />
      </ThemeContainer>
    </Wrapper>
  );
}
export default Detail;

const Wrapper = styled.main`
  width: 375px;
  height: fit-content;

  background: #ffffff;
`;

const Header = styled.header`
  position: sticky;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  top: 0;
  background: #ffffff;

  .prev {
    font-size: 40px;
    margin: 10px;
  }
`;

const ThemeContainer = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 0 16px;
  gap: 24px;

  border-bottom: 1px solid #aeaeae;
`;

const ThemePreview = styled.div`
  width: 100%;
  height: fit-content;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 2px 2px 10px silver;
  }
`;

const ThemeTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ThemeName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h1 {
    font-family: 'Noto Sans CJK KR';
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #42444c;
  }

  h2 {
    font-family: 'Noto Sans KR';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #919299;
  }
`;
const ThemeShare = styled.div``;

const ThemeHashtag = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 5px;

  p {
    padding: 5px 10px;
    border-radius: 18px;

    font-family: 'Noto Sans KR';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #4b4e57;

    background: #ebedf5;
  }
`;

const ThemeAd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 338px;
  height: 50px;
  margin: 0 3px;

  background: #d9d9d9;
`;

const ThemeFigure = styled.div``;

const BASE_URL = 'https://api.plkey.app/theme';
const API = {
  THEME: `${BASE_URL}/category`,
  THEME_CATEGORY: `${BASE_URL}?category=Illustration`,
  THEME_DETAIL: `${BASE_URL}/OWN_H0-L-39`,
};
