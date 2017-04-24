import React from 'react';

// Components
import CompanyName from './CompanyName';

const CompanyProfile = ({company}) => {
  if (!company) {
    return (
      <div className="company-profile">
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <div className='company-profile'>
      <CompanyName companyName={company.word} />
    </div>
  );
}

export default CompanyProfile;
