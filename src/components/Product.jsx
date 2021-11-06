import styled from 'styled-components';
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from '@mui/icons-material';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 350px;
  min-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.4);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />

      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
