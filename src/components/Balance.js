import { useState } from "react"
import { Utils } from "alchemy-sdk"

import alchemy from "../settings"
const Balance = () => {
    const [balance, setBalance] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    function onChange(evt) {
        setAddress(evt.target.value)
    }

    async function getBalance() {
        setIsLoading(true); 
        setError(null);
        try {
            const response = await alchemy.core.getBalance(address)
            const formatEther = Utils.formatEther(response, "ether")
            setBalance(formatEther)
        }
        catch (err) {
            setError(err);
            setBalance(null);
        }
        finally{
            setIsLoading(false)
        }
    }
    function resetBalance() {
        setAddress('');
        setBalance(null);
        setError(null);
    }
    
    return <div className="App">
        <div>
            <label htmlFor="addressInput">Address:</label>
            <input placeholder="Enter an ethereum wallet address" id="addressInput" value={address} onChange={onChange} />
        </div>
        <div>
            <button type="submit" className="button" onClick={getBalance}>Submit</button>
            <button type="reset" className="button" onClick={resetBalance}>Reset</button>
        </div>
        <div className="balance">
        {isLoading ? (
          <p className="LoadingMessage">Loading...</p>
        ) : error ? (
          <p className="ErrorMessage">An error occurred: {error.message}</p>
        ) : (
          <div>
            Address Balance in ETH: <b>{balance}</b>
          </div>
        )}
        </div>
    </div>;
}

export default Balance