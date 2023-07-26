import alchemy from "../settings";
import { useEffect, useState } from 'react';
import BlockTx from "./BlockTx";

const Block = () => {
  const [blocks, setBlocks] = useState([]);
  const [prevBlocks, setPreviousBlocks] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const fetchBlockNumber = async () => {
    setBlocks(await alchemy.core.getBlockNumber());
  };

  const getPrevBlocks = async () => {
    const previousBlock = [];
    try{
      for (let i = 1; i <= 10; i++) {
        previousBlock.push(await alchemy.core.getBlock(blocks - i))
      }
      setPreviousBlocks(previousBlock);
    } 
      catch(err){
        setError(err);
      }
      finally{
        setLoading(false); 
      }
    }

  useEffect(() => {
    fetchBlockNumber();
    getPrevBlocks();
  });

  return (
    <div className="BlockContainer">
      <h1>Most Recent Blocks</h1>
      {loading ? (
          <p className="LoadingMessage">Loading...</p>
        ) : error ? (
          <p className="ErrorMessage">An error occurred: {error.message}</p>
        ) :( <div className="details">
        {prevBlocks.map((block, index) =>
          <BlockTx key={index} block={block} />
        )}
      </div>
      )}
    </div>
  );
}

export default Block;
