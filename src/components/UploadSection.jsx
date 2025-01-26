import React from "react";
import { ArrowUpToLineIcon } from "lucide-react";
import styled from "styled-components";

const UploadContainer = styled.div`
  width: 684px;
  height: 844px;
  margin-left: 24px;
  background: var(--Background-Primary, #ffffff);
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%2364748BFF' stroke-width='3' stroke-dasharray='8%2c 15' stroke-dashoffset='39' stroke-linecap='square'/%3e%3c/svg%3e");
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #68696a;
  margin-bottom: 24px;
`;

const ImageContainer = styled.div`
  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 24px;
  }
`;

const UploadButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  gap: 8px;
  color: #68696a;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid grey;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  min-width: 120px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px;
  }

  &:active {
    transform: translateY(0);
  }
`;

const UploadText = styled.p`
  font-size: 12px;
  color: #757575;
  margin-top: 16px;

  span {
    color: #1787e0;
  }
`;

const UploadSection = () => {
  return (
    <UploadContainer>
      <Content>
        <Title>Upload Your Invoice</Title>
        <Description>To auto-populate fields and save time</Description>
        <ImageContainer>
          <img src="/image.png" alt="Upload Invoice" />
        </ImageContainer>
        <UploadButton>
          Upload File
          <span>
            <ArrowUpToLineIcon />
          </span>
        </UploadButton>
        <UploadText>
          <span>Click to upload</span> or Drag and drop
        </UploadText>
      </Content>
    </UploadContainer>
  );
};

export default UploadSection;
