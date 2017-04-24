import React from 'react';
import _ from 'lodash';

const CompanyName = ({companyName}) => {
  const name = _.capitalize(companyName);
    return <h1 className="text-white">{name}</h1>
}

export default CompanyName;
