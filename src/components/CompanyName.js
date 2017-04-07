import React from 'react';
import _ from 'lodash';

const CompanyName = ({companyName}) => {
  const name = _.capitalize(companyName);
    return <h2>{name}</h2>
}

export default CompanyName;
