/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {FaInfoCircle} from "react-icons/fa"
import empty from "../../assets/empty.svg";

function OpenTrades() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="card open-trades">
      <div className="card-header">
        <p>Your Open Trades</p>
        <div className="display-lines">
          <label>Display on chart</label>
          <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        </div>
      </div>
      <div className="card-content">
        <div className="empty-row">
          <img src={empty} alt="no data" className="empty-img" />
          <div className="trade-info">
            <FaInfoCircle />
            <p> Collaterals, profits, losses, are in DAI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenTrades;
