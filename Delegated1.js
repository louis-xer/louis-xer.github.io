async function transact() {
    const fromAddress = `${document.getElementById('fromAddress')}.value;
    const toAddress = `${document.getElementById('toAddress')}.value;
    const value = `${document.getElementById('value')}.value;
    const fee = `${document.getElementById('fee')}.value;
    const nonce = `${document.getElementById('nonce')}.value;
    const v = `${document.getElementById('v')}.value;
    const r = `${document.getElementById('r')}.value;
    const s = `${document.getElementById('s')}.value;
    const tokenAddress = `${document.getElementById('tokenAddress')}.value;
  
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
  