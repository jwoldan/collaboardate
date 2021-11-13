import React from 'react';
import { useHistory } from 'react-router-dom';

import Card from './card';

const CardContainer = props => {
  const history = useHistory();

  return <Card history={history} {...props} />;
};

export default CardContainer;
