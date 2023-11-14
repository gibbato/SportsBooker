import React from 'react';

const BetSlip = () => {
  return (
    <div className="bg-neutral-950 col-span-2 p-4">
      <h2 className="text-xl font-semibold mb-4">Bet Slip</h2>
      <div className="flex flex-col space-y-4">
        {/* Sample Bet Item */}
        <div className="flex justify-between items-center bg-white rounded-lg p-2">
          <span>Team A vs Team B</span>
          <span>$50</span>
        </div>
        {/* Additional Bet Items Go Here */}
      </div>
      <div className="mt-4">
        <p>Total Amount: $50</p>
      </div>
    </div>
  );
};

export default BetSlip;
