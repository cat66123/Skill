import styled from "styled-components";

export const HeaderWrapper = styled.div`
  .header-content {
    background: #6699cc;
    display: flex;
  }
  .logo {
    font-size: 2rem;
    line-height: 64px;
    color: white;
    margin-left: 30px;
    float: left;
  }
`;

export const MenuWrapper = styled.div`
  height: 64px;
  float: left;
  margin-left: 30px;

  .menu-content {
    line-height: 64px;
    background: none;
    font-size: 1.1rem;
    color: #ccffff;
  }
`;

export const SearchWrapper = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .searchInput {
    width: 250px;
  }

  .searchButton {
    margin-left: 10px;
  }

  .slide-enter {
    transition: all 0.2s ease-out;
  }
  .slide-enter-active {
    width: 360px;
  }
  .slide-enter-done {
    width: 360px;
  }
  .slide-exit {
    transition: all 0.2s ease-out;
  }
  .slide-exit-active {
    width: 250px;
  }
  .slide-exit-done {
    width: 250px;
  }

  .slideButton-enter {
    transition: all 0.2s ease-out;
  }
  .slideButton-enter-active {
    opacity: 0;
  }
  .slideButton-enter-done {
    opacity: 0;
  }
  .slideButton-exit {
    transition: all 0.1s ease-out;
  }
  .slideButton-exit-active {
    opacity: 1;
  }
  .slideButton-exit-done {
    opacity: 1;
  }
`;
