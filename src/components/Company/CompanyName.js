import React from 'react';
import _ from 'lodash';
import './CompanyName.css';

const CompanyName = ({companyName}) => {
  const name = _.capitalize(companyName);
    return <h1 className="company-name text-white mb-4">{name}</h1>
}

export default CompanyName;
