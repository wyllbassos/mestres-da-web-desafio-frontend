import styled from 'styled-components';

const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
`;

export const Container = styled.div`
  ${flexCenter}
  height: 100vh;
  width: 100vw;
  padding: 24px;
  flex-direction: column;
  background-color: #000000;
`;

export const Header = styled.header`
  z-index: 9000;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 77px;
  padding: 10px 70px 0;
  /* background-color: #261f35; */
  background-color: rgb(14, 14, 14);

  span {
    float: left;
    width: 125px;
    height: auto;
    transition: all 0.5s ease;

    a {
      text-decoration: none;

      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }

  nav {
    float: right;
    width: auto;
    height: 30px;
    margin: 20px 0px 0px;

    ul {
      display: inline-block;
      margin-right: 8px;
      vertical-align: middle;
      transition: all 0.5s ease;

      li {
        float: left;
        width: auto;
        margin: 0px 12px;
        font-size: 12px;
        text-transform: uppercase;

        a {
          text-decoration: none;
          position: relative;
          display: block;
          font-weight: bold;
          color: #fff;
        }
      }
    }
  }
`;

export const Group4ListContainer = styled.div`
  ${flexCenter}
  div:first-child {
    margin-right: 24px;
  }
  margin-bottom: 12px;
`;

export const Group2ListContainer = styled.div`
  ${flexCenter}
`;

export const ListsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 8px;
  height: 250px;
  overflow-y: auto;

  table {
    width: 100%;
    margin-top: 8px;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 8px;
  margin-top: 10px;
  height: 250px;
  overflow-y: auto;

  table {
    width: 100%;
    margin-top: 8px;
  }
`;
