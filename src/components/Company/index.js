import React from 'react';

// Components
import CompanyName from './CompanyName';

const CompanyProfile = ({company}) => {
  if (!company) {
    return (
      <div className="company-profile">
        <i className="fa fa-spinner fa-spin fa-3x fa-fw text-white" aria-hidden="true"></i>
      </div>
    );
  }
  return (
    <div className='company-profile'>
      <CompanyName companyName={company} />
    </div>
  );
}

export default CompanyProfile;
