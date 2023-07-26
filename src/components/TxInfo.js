import { Utils }  from "alchemy-sdk";
import { useState } from 'react';
import alchemy from "../settings"

function TxInfo({tx}){
    const [txInfo, setTxInfo] = useState('');
    const [showInfo, setShowInfo] = useState(false);

 const getInfo = async (evt) => {
  evt.preventDefault()
    if(!showInfo){
     setTxInfo(await alchemy.core.getTransactionReceipt(tx));
     setShowInfo(!showInfo)
    }
    else{
        setShowInfo(!showInfo);
    }
 }   
 return(
    <div className="App BlockContainer">
           <input className="Link" type="submit" value={tx} onClick={getInfo} />
           {showInfo ? <div>
      <h1>Transaction Details</h1>
      {txInfo && (
        <div className="TxInfo">
          <p><b>From:</b> {txInfo.from}</p>
          <p><b>To:</b> {txInfo.to}</p>
          <p><b>Confirmation:</b> {txInfo.confirmations}</p>
          <p><b>Gas used:</b> {Utils.formatUnits(txInfo.gasUsed, "ether")} ETH</p>
        </div>
      )}
    </div> : null}
    </div>
 )

}

export default TxInfo