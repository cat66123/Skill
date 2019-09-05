import styled from "styled-components";

export const ContentWrapper = styled.div`
  .home-content {
    /* height: calc(100vh - 64px); */
    background-color: white;

    .content-box {
      width: 900px;
      margin: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
`;

export const ContentItem = styled.div`
  width: 250px;
  height: 250px;
  background: #99cccc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;

  .item-text {
    font-size: 14rem;
  }
`;
