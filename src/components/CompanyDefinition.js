import React from 'react';

const CompanyDefinition = ({company}) => {
  if (!company.results) {
    return null
  }
  // What would this return several times?
  console.log(company.results.length);
  const definition = company.results[0].definition;
  return (
    <div>
      <h4><em>Definition: {definition}</em></h4>
    </div>
  );
}

export default CompanyDefinition;
