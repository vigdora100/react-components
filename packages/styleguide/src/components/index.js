import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import gardenBackgroundImage from './garden-background.png';
import { zdFontWeightLight, zdFontSizeGiga, zdColorDarkGray,
  zdFontSizeDelta, zdFontWeightThin, zdColorPelorous, zdColorAlgae,
  zdColorSnow } from '@zendesk/garden-css-variables';

const isComponentPage = pathname => {
  return pathname.indexOf('components') !== -1 && pathname !== '/components';
};

export const PageWrapper = styled.div`
  height: calc(100% - 50px);
  overflow-y: auto;


`;

export const Page = styled.main`
  color: ${zdColorDarkGray};
  ${props => !isComponentPage(props.location.pathname) ? 'max-width: 950px;' : ''}

  width: calc(100% - 64px);
  margin-right: auto;
  margin-left: auto;
  margin-top: 24px;
  margin-bottom: 24px;
  padding: ${props => isComponentPage(props.location.pathname) ? 0 : 32}px;

  ${props => isComponentPage(props.location.pathname) ? 'height: calc(100% - 50px);' : ''}

  border-radius: .3rem;
  box-shadow: 0 1.2rem 3.6rem rgba(0,0,0,.2);

  background-color: white;

  overflow: hidden;
`;

export const Title = styled.div`
  font-weight: ${zdFontWeightLight};
  font-size: ${zdFontSizeGiga};
  margin-top: 12px;
`;

export const PublishDate = styled.div`
  font-size: ${zdFontSizeDelta};
  font-weight: ${zdFontWeightThin};
`;

export const HomeHeader = styled.div`
  margin-top: -32px;
  margin-left: -32px;
  margin-right: -32px;
  height: 200px;

  background-image: url(${gardenBackgroundImage});
  background-size: contain;
  background-color: ${zdColorAlgae};

  color: ${zdColorSnow};
`;

export const Link = styled(GatsbyLink)`
  color: ${zdColorPelorous};
`;
