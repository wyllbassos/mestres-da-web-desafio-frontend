import React, { TableHTMLAttributes } from 'react';
import { IitemPropProduct, Iproduct } from '..';

import { Container } from './styles';

interface InputProps extends TableHTMLAttributes<HTMLTableElement> {
  products?: Iproduct[];
  itemsPropProduct?: IitemPropProduct[];
}

const Table: React.FC<InputProps> = props => {
  const { products, itemsPropProduct, ...rest } = props;

  if (!products && itemsPropProduct) {
    return (
      <Container {...rest}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {itemsPropProduct.map(itemPropProduct => (
            <tr key={itemPropProduct.code}>
              <th>{itemPropProduct.code}</th>
              <th>{itemPropProduct.description}</th>
            </tr>
          ))}
        </tbody>
      </Container>
    );
  }
  if (products && !itemsPropProduct) {
    return (
      <Container {...rest}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Cor</th>
            <th>Modelo</th>
            <th>Tamanho</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.sku}>
              <th>{product.sku}</th>
              <th>{product.description}</th>
              <th>{product.category.description}</th>
              <th>{product.color.description}</th>
              <th>{product.model.description}</th>
              <th>{product.size.description}</th>
            </tr>
          ))}
        </tbody>
      </Container>
    );
  }
  return <Container {...rest} />;
};

export default Table;
