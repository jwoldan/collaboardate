import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from './card';

const CardContainer = props => {
  const navigate = useNavigate();

  return <Card navigate={navigate} {...props} />;
};

export default CardContainer;
