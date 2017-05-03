import React from 'react';

export const TipInfo = ({ showTip, toggleTip }) => {
  return (
    <section className="container mb-5">
      { showTip ?
        <div>
          <p className="lead text-white mt-2">5 - 10 RULE:</p>
          <p className="text-white">Great companies throughout history have had 5 to 10 letters in their name, had at least one hard consonant, and many had a repeating letter.</p>
          <p className="text-muted text-white"><strong>For Example:</strong> Mattel, Hasbro, Google, Yahoo, CitiBank, Starbucks, Honda, Apple, Exxon, Mobil, Cisco and Verizon.</p>
        </div> :
        null
      }
    </section>
  );
}
