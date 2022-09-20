/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-return-assign */
import { useState } from "react";
import styled from "styled-components";

import {
  ButtonOrange,
  Checkbox,
  FileInput,
  ImgPreview,
  Input,
  SearchAddress,
} from "../../../components";
import { useValidate } from "../../../hooks";
import { notBlank } from "../../../utils";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 380px);
  margin: 100px 0;

  & > h1 {
    font-size: 42px;
    color: #161616;
  }
`;

export const SForm = styled.form`
  display: flex;
  gap: 50px;
  width: 100%;
  margin-top: 50px;
  padding: 100px 100px 50px 50px;
  border: 1px solid #dbdbdb;

  & > section:first-child {
    flex-basis: 30%;
  }

  & > section:last-child {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;
    width: 90%;
    padding: 20px;
  }
`;

export const SCheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  & > span {
    flex-basis: 30%;
    color: #464646;
    font-size: 16px;
    cursor: pointer;
  }

  & > section {
    flex-basis: 70%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;

    & > section > div {
      flex-basis: 40%;
      flex-grow: 1;
    }
  }
`;

export const SButton = styled(ButtonOrange)`
  width: 150px;
  border-radius: 25px;
  margin-left: 130px;
  padding: 0 30px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin: 0 auto;
  }
`;

const RegisterPlace = () => {
  const [
    addressValue,
    addressError,
    handleAddress,
    checkAddress,
    setAddressValue,
    setAddressError,
  ] = useValidate(notBlank);
  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    document
      .querySelectorAll(`input[type=checkbox]`)
      .forEach((el: any) => (el.checked = false));

    const { target } = e;
    target.checked = true;
    console.log(target.value);
  };
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAB1CAMAAABH2l6OAAAAMFBMVEW7u7vz8/PCwsK+vr7V1dX29vbv7+/Gxsa4uLjMzMzh4eH5+fnc3NzJycns7Oy1tbXhfB7JAAABWElEQVRoge2X2Y6EIBBFRSgplsH//9vBNdK2iU6umZd7XrobOzlSVBXQdYQQQgghhBBCCCGEkLfon6EIp0YxT5CI0NpHTlNf0SKsg2R7Fc3TA5tlgFiN8Zcx00o74FFW8ZdSH0tuh96w2mZmGpKIDG9bfSpNtMucP+44hLdqmQqj2yV2qaly/Dvcqm6yiLhRt0cz8d257iUZxuU1cqq/UpNsaOuY9yYl6/JqlmRCk2Fgq/Zt35vTWbv14y3rGD96n9tl6tzeLLBW/fncBGTYYutFSli9WOs4fOn0y/JqkZrZcdnioNalas4bTLaqQdbvU8ixc73YZKUu7xYFGRy2+x+q5uQ9hF5KD7SqTVfSlhSA1lPVXE4cae1vThVrPdUqrbT+0Wq8n05ldwDWaz0Pu7sAO2K298Gd/Z9cr8RArHq3G25ayJ3uf+6vhBBCCCGEEEIIIYSQb/wCIbMP1+B8V50AAAAASUVORK5CYII="
  );

  console.log(imageSrc);

  return (
    <SContainer>
      <h1>매장 등록</h1>
      <SForm>
        <section>
          <ImgPreview
            id="대표사진"
            label="대표사진등록"
            imgUrl={imageSrc as string}
            setImgUrl={setImageSrc}
          />
        </section>
        <section>
          <Input
            label="매장명"
            id="매장명"
            value=""
            isError
            errorMsg="매장명을 입력해주세요."
            placeholder="매장명을 입력해주세요."
            onChange={() => console.log("!")}
          />
          <SCheckboxContainer>
            <span>업주 등록</span>
            <section>
              {["숙소", "미용", "카페", "맛집", "운동장", "동물병원"].map(
                (el, idx) => (
                  <Checkbox
                    key={el}
                    id={el}
                    value={el}
                    labelName={el}
                    defaultChecked={idx === 0}
                    onChange={(e) => handleCheckboxClick(e)}
                  />
                )
              )}
            </section>
          </SCheckboxContainer>
          <Input
            label="사업자 등록증"
            id="사업자 등록증"
            value=""
            isError
            errorMsg="사업자 등록증을 첨부해주세요."
            placeholder="사업자 등록증을 첨부해주세요."
            onChange={() => console.log("!")}
            readOnly
            sideButton={<FileInput id="사업자등록증" label="파일 첨부" />}
          />
          <Input
            label="주소"
            id="주소"
            value={addressValue}
            isError
            errorMsg="주소를 입력해주세요."
            placeholder="주소를 입력해주세요."
            sideButton={
              <SearchAddress
                setValue={setAddressValue}
                setError={setAddressError}
              />
            }
            readOnly
            onChange={() => console.log("!")}
          />
          <Input
            label="전화번호"
            id="전화번호"
            value=""
            isError
            errorMsg="매장 전화번호를 입력해주세요."
            placeholder="매장 전화번호를 입력해주세요."
            onChange={() => console.log("!")}
          />
          <Input
            label="홈페이지 주소"
            id="홈페이지 주소"
            value=""
            isError
            errorMsg="매장 홈페이지 주소를 입력해주세요."
            placeholder="매장 홈페이지 주소를 입력해주세요."
            onChange={() => console.log("!")}
          />
          <STextAreaContainer>
            <label htmlFor="매장 상세설명">매장 상세설명</label>
            <STextArea>
              <textarea
                id="매장 상세설명"
                placeholder="매장에 대한 설명을 입력해주세요."
              />
              <p>상세 설명을 30자 이상 입력해주세요.</p>
            </STextArea>
          </STextAreaContainer>
          <SButton>등록하기</SButton>
        </section>
      </SForm>
    </SContainer>
  );
};

export default RegisterPlace;

export const STextAreaContainer = styled.div`
  display: flex;

  & > label {
    flex-basis: 30%;
    color: #464646;
    font-size: 16px;
    cursor: pointer;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;

    & > section > label {
      flex-basis: 5%;
    }
  }
`;

export const STextArea = styled.section`
  width: 100%;
  height: auto;
  flex-basis: 70%;

  & > textarea {
    position: relative;
    width: 100%;
    height: 300px;
    padding: 10px;
    outline: none;
    border: 1px solid #dbdbdb;
    resize: none;

    &::placeholder {
      color: #767676;
    }
  }

  & > p {
    margin-top: 5px;
    color: red;
    font-size: 10px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    & > textarea {
      flex-basis: 95%;
    }
  }
`;
