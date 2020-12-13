import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoimg from '../../assets/logo.svg';

import {
  Container,
  ProductsContainer,
  Group4ListContainer,
  Group2ListContainer,
  ListsContainer,
  Header,
} from './styles';
import Table from './Table';

export interface IitemPropProduct {
  code: string;
  description: string;
}

export interface Iproduct {
  sku: string;
  description: string;
  balance: number;
  category: IitemPropProduct;
  color: IitemPropProduct;
  model: IitemPropProduct;
  size: IitemPropProduct;
}

const list: IitemPropProduct[] = [
  { code: '0000', description: 'teste0' },
  { code: '0001', description: 'teste1' },
  { code: '0002', description: 'teste2' },
  { code: '0003', description: 'teste3' },
  { code: '0004', description: 'teste4' },
  { code: '0005', description: 'teste5' },
  { code: '0002', description: 'teste2' },
  { code: '0003', description: 'teste3' },
  { code: '0004', description: 'teste4' },
  { code: '0005', description: 'teste5' },
];

const productsStatic = list.map(item => ({
  sku: '0000-0001-0002-0003',
  description: 'teste 0000-0001-0002-0003',
  balance: 5,
  category: list[0],
  color: list[1],
  model: list[2],
  size: list[3],
})) as Iproduct[];

const Dashboard: React.FC = () => {
  const [categories, setCategories] = useState(list);
  const [colors, setColors] = useState(list);
  const [models, setModels] = useState(list);
  const [sizes, setSizes] = useState(list);
  const [products, setProducts] = useState(productsStatic);

  return (
    <Container>
      <Header>
        <span>
          <Link to="./">
            <img src={logoimg} alt="Desafio Mestres Da Web" />
          </Link>
        </span>
        <nav>
          <ul>
            <li>
              <a href="./">Categorias</a>
            </li>
            <li>
              <a href="./">Cores</a>
            </li>
            <li>
              <a href="./">Modelos</a>
            </li>
            <li>
              <a href="./">Tamanhos</a>
            </li>
            <li>
              <a href="./">Produtos</a>
            </li>
          </ul>
        </nav>
      </Header>
      <Group4ListContainer>
        <Group2ListContainer>
          <ListsContainer>
            <h1>Categorias</h1>
            <Table itemsPropProduct={categories} />
          </ListsContainer>
          <ListsContainer>
            <h1>Cores</h1>
            <Table itemsPropProduct={colors} />
          </ListsContainer>
        </Group2ListContainer>
        <Group2ListContainer>
          <ListsContainer>
            <h1>Modelos</h1>
            <Table itemsPropProduct={models} />
          </ListsContainer>
          <ListsContainer>
            <h1>Tamanhos</h1>
            <Table itemsPropProduct={sizes} />
          </ListsContainer>
        </Group2ListContainer>
      </Group4ListContainer>
      <ProductsContainer>
        <h1>Produtos</h1>
        <Table products={products} />
      </ProductsContainer>
    </Container>
  );
};

export default Dashboard;
