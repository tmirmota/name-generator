import React from 'react';
import _ from 'lodash';

// Material UI Components
import { List, ListItem } from 'material-ui/List';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';

// Inline Styling
const style = {
  color: 'white'
}

export const SavedList = ({ savedCompanies, removeCompany }) => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <List>
            {savedCompanies.map(company => {
              const name = _.capitalize(company)
              return (
                <ListItem
                  key={company}
                  primaryText={name}
                  style={style}
                  rightIcon={<DeleteForever onClick={() => removeCompany(company)} hoverColor='red' />} />
                );
            })}
          </List>
        </div>
      </div>
    </section>
  );
}
