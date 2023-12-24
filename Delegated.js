<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delegated Transaction</title>
</head>
<body>
    <h1>Delegated Transaction</h1>

    <label for="fromAddress">From Address:</label>
    <input type="text" id="fromAddress" placeholder="Enter sender's address">

    <label for="toAddress">To Address:</label>
    <input type="text" id="toAddress" placeholder="Enter recipient's address">

    <label for="value">Value:</label>
    <input type="number" id="value" placeholder="Enter value">

    <label for="fee">Fee:</label>
    <input type="number" id="fee" placeholder="Enter fee">

    <label for="nonce">Nonce:</label>
    <input type="number" id="nonce" placeholder="Enter nonce">

    <label for="v">V:</label>
    <input type="number" id="v" placeholder="Enter v">

    <label for="r">R:</label>
    <input type="text" id="r" placeholder="Enter r">

    <label for="s">S:</label>
    <input type="text" id="s" placeholder="Enter s">

    <label for="tokenAddress">Token Address:</label>
    <input type="text" id="tokenAddress" placeholder="Enter token address">

    <button onclick="transact()">Transact</button>

    <script>
        async function transact() {
            const fromAddress = document.getElementById('fromAddress').value;
            const toAddress = document.getElementById('toAddress').value;
            const value = document.getElementById('value').value;
            const fee = document.getElementById('fee').value;
            const nonce = document.getElementById('nonce').value;
            const v = document.getElementById('v').value;
            const r = document.getElementById('r').value;
            const s = document.getElementById('s').value;
            const tokenAddress = document.getElementById('tokenAddress').value;

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
    </script>
</body>
</html>
