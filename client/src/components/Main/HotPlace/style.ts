import styled from "styled-components";

import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

export const Container = styled.div`
  & > header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    padding: 50px 10px;
    background-color: #f8f8fa;

    & > h3 {
      color: ${({ theme }) => theme.colors.black500};
      font-size: 38px;
    }

    & > p {
      color: ${({ theme }) => theme.colors.black100};
      font-size: 20px;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      & > h3 {
        font-size: 24px;
      }

      & > p {
        font-size: 14px;
      }
    }
  }
`;

export const SSection = styled.section`
  display: flex;
  height: 500px;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    height: 700px;
  }
`;

export const SImgContainer = styled.div`
  flex-basis: 50%;
  height: 500px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: fadein 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media screen and (max-width: 1000px) {
    height: 350px;
  }
`;

export const SMainContainer = styled.main`
  flex-basis: 50%;
  padding: 20px;

  @media screen and (max-width: 1200px) {
    padding: 20px 0 0 0;
  }
`;

export const SButtonContainer = styled.div`
  display: flex;
  align-items: center;

  .active {
    color: ${({ theme }) => theme.colors.black500};
  }

  & > button {
    flex-grow: 1;
    padding: 0;
    border: none;
    color: ${({ theme }) => theme.colors.black200};
    background-color: inherit;
    font-size: 14px;
  }

  & > div {
    width: 1px;
    height: 13px;
    margin: 0 10px 3px 10px;
    background-color: ${({ theme }) => theme.colors.black200};
  }

  & > div:last-child {
    display: none;
  }
`;

export const SListContainer = styled.ul`
  position: relative;
  height: 445px;
  margin-top: 20px;
  padding: 5px;
  overflow-y: scroll;

  & > li:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1000px) {
    height: 350px;
  }
`;

export const SLoading = styled(LoadingSpinner)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
