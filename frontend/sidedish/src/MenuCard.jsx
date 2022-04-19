import styled from "styled-components";
import Label from "./Label";

const MenuCard = styled.div`
  padding: 0 24px;
  cursor: pointer;
`;

const MenuCardImg = styled.img`
  width: 411px;
  height: 411px;
  margin-bottom: 16px;
`;

const MenuTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #3f3f3f;
  margin-bottom: 8px;
`;

const MenuDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #777777;
  margin-bottom: 8px;
`;

const Price = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const SalePrice = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #1b1b1b;
  padding-right: 8px;
`;

const MenuPrice = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  align-items: center;
  text-decoration-line: line-through;
  color: #bcbcbc;
`;

const ItemCard = ({ image, title, description, n_price, s_price, badge }) => {
  const labelList = badge.map((string, key) => {
    return string === "런칭특가" ? (
      <Label key={key} string={string} color="white" fontSize="12px" backgroundColor="#FF8E14" borderColor="#FF8E14" padding="6px 16px"></Label>
    ) : (
      <Label key={key} string={string} color="white" fontSize="12px" backgroundColor="#6DD028" borderColor="#6DD028" padding="6px 16px"></Label>
    );
  });

  return (
    <MenuCard>
      <MenuCardImg src={image} alt={title} />
      <MenuTitle>{title}</MenuTitle>
      <MenuDescription>{description}</MenuDescription>
      <Price>
        <SalePrice>{s_price}</SalePrice>
        <MenuPrice>{n_price}</MenuPrice>
      </Price>
      {labelList}
    </MenuCard>
  );
};

export default ItemCard;
