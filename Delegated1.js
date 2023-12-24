$(document).ready(function() {
    async function transact() {
      const fromAddress = $('#fromAddress').val();
      const toAddress = $('#toAddress').val();
      const value = $('#value').val();
      const fee = $('#fee').val();
      const nonce = $('#nonce').val();
      const v = $('#v').val();
      const r = $('#r').val();
      const s = $('#s').val();
      const tokenAddress = $('#tokenAddress').val();
  
      await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          to: 'YOUR_CONTRACT_ADDRESS',
          from: fromAddress,
          value: '0x0',
          gas: '0x5208', // Adjust gas value accordingly
          data: web3.eth.abi.encodeFunctionCall({
            name: 'delegatedTransfer',
            type: 'function',
            inputs: [
              { type: 'address', name: '_from' },
              { type: 'address', name: '_to' },
              { type: 'uint256', name: '_value' },
              { type: 'uint256', name: '_fee' },
              { type: 'uint256', name: '_nonce' },
              { type: 'uint8', name: '_v' },
              { type: 'bytes32', name: '_r' },
              { type: 'bytes32', name: '_s' },
              { type: 'address', name: '_tokenAddress' },
            ],
          }, [fromAddress, toAddress, value, fee, nonce, v, r, s, tokenAddress]),
        }],
      });
    }
  });
  