import React from 'react';
// Components
import CompanyName from './CompanyName';
import CompanyDefinition from './CompanyDefinition';

const CompanyProfile = ({company}) => {
  if (!company) {
    return <h2 className="company-profile">Press Start App</h2>
  }
  return (
    <div className='company-profile'>
      <CompanyName companyName={company.word} />
      <CompanyDefinition company={company} />
    </div>
  );
}

export default CompanyProfile;
