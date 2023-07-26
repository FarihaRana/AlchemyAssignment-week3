import { useState } from "react";
import TxInfo from "./TxInfo";
import { Utils } from "alchemy-sdk";

function BlockTx({ block }) {
  const [showTx, setShowTX] = useState(false);

  const getInfo = async (evt) => {
    evt.preventDefault();
    setShowTX(!showTx);
  };
  return (
    <div className="App">
      <div>
        <h2>Block Number: {block.number}</h2>
        <p>
          <b>TimeStamp: </b>
          {block.timestamp}
        </p>
        <p>
          <b>Hash</b> {block.hash}
        </p>
        <p>
          <b>Parent Hash:</b> {block.parentHash}
        </p>
        <p>
          <b>Miner:</b> {block.miner}
        </p>
        <p>
          <b>Block Number:</b> {block.number}
        </p>
        <p>
          <b>Timestamp:</b> {block.timestamp}
        </p>
        <p>
          <b>Nonce:</b> {block.nonce}
        </p>
        <p>
          <b>Difficulty:</b> {block.difficulty}
        </p>
        <p>
          <b>asLimit: {Utils.formatEther(block.gasLimit, "ether")}</b>
        </p>
        <p>
          <b>gasUsed: {Utils.formatEther(block.gasUsed, "ether")}</b>
        </p>
      </div>

      <div>
        <h3>All Transactions within this Block:</h3>
        <a className="ShowDetailsLink" href="/" onClick={getInfo}>
          show/hide details
        </a>
        {showTx && (
          <div className="TransactionsContainer">
            <ul>
              {block.transactions.map((tx, index) => (
                <li key={index}>
                  <TxInfo tx={tx} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlockTx;
