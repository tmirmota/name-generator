import React from 'react';

// Material UI Components
import { List, ListItem } from 'material-ui/List';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';

export const SavedList = ({ savedCompanies, removeCompany }) => {
  return (
    <section className="container">
      <List>
        {savedCompanies.map(company => {
          return (
            <ListItem
              key={company}
              primaryText={company}
              rightIcon={<DeleteForever onClick={() => removeCompany(company)} />} />
            );
        })}
      </List>
    </section>
  );
}
