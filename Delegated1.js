$(document).ready(function() {
    async function transact() {
      const fromAddress = $('#fromAddress').val();
      const toAddress = $('#toAddress').val();
      const value = $('#value').val();
      const fee = $('#fee').val();
      const tokenAddress = $('#tokenAddress').val();
  
      // Get the nonce
      const nonce = await web3.eth.getTransactionCount(fromAddress);
  
      // Set the gas price and gas limit
      const gasPrice = await web3.eth.getGasPrice();
      const gasLimit = 21000;
  
      // Calculate the total transaction cost
      const totalCost = gasPrice * gasLimit;
  
      // Calculate the value to send
      const valueToSend = web3.utils.toWei(value, 'ether');
  
      // Calculate the fee to send
      const feeToSend = web3.utils.toWei(fee, 'ether');
  
      // Sign the transaction
      const tx = {
        from: fromAddress,
        to: toAddress,
        value: valueToSend,
        gasPrice: gasPrice,
        gas: gasLimit,
        nonce: nonce,
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
        }, [fromAddress, toAddress, valueToSend, feeToSend, nonce, 0, '0x0', '0x0', tokenAddress]),
      };
  
      const signedTx = await web3.eth.accounts.signTransaction(tx, 'PRIVATE_KEY');
  
      // Send the signed transaction
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  
      console.log(receipt);
    }
  });
  