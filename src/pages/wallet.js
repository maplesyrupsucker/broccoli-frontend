import React, { Component } from 'react'
import styled from 'styled-components'


const BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;
const BITBOX = new BITBOXCli();


class Wallet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mnemonic: '',
            hdnode: undefined,
            payAddress: '',
            utxo: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.fetchUtxo = this.fetchUtxo.bind(this)
    }

    componentDidMount() {
        const mnemonic = BITBOX.Mnemonic.generate(128)

        const seedBuffer = BITBOX.Mnemonic.toSeed('wheel gaze when donor argue over hidden wasp friend mixture shove chase')
        const hdnode = BITBOX.HDNode.fromSeed(seedBuffer)
        const keyPair = BITBOX.HDNode.toKeyPair(hdnode);
        const payAddress = BITBOX.HDNode.toCashAddress(hdnode);

        this.fetchUtxo(payAddress)


        this.setState({
            mnemonic,
            hdnode,
            keyPair,
            payAddress
        })
    }

    async fetchUtxo(address) {

        try {
            let utxo = await BITBOX.Address.utxo([address]);
            console.log(utxo);
            this.setState({
                utxo: utxo[0]
            })
        } catch (error) {
            console.error(error)
        }
    }



    handleClick() {
        const { utxo, keyPair } = this.state
        const transactionBuilder = new BITBOX.TransactionBuilder('bitcoincash');
        let redeemScript;
        console.log('creating transaction')

        const PAY_ADDRESS = 'bitcoincash:qp26aavql8p22wtgupm5l2eyrxn98prtuuwqvwn6gl'
        let originalAmount = 0

        const byteCount = BITBOX.BitcoinCash.getByteCount({ P2PKH: utxo.length }, { P2PKH: 1 });

        utxo.forEach(element => {
            console.log(element)
            transactionBuilder.addInput(element.txid, element.vout)
            originalAmount += element.satoshis
        });

        let sendAmount = originalAmount - byteCount;
        transactionBuilder.addOutput(PAY_ADDRESS, sendAmount)
        //transactionBuilder.addInput(txid, 0);

        transactionBuilder.sign(0, keyPair, redeemScript, transactionBuilder.hashTypes.SIGHASH_ALL, originalAmount);


        let tx = transactionBuilder.build();
        let hex = tx.toHex();
        BITBOX.RawTransactions.sendRawTransaction(hex)
        .then((result) => {
            console.log('payment sent', result)
        })

    }

    render() {
        const { mnemonic, hdnode, keyPair, payAddress, utxo } = this.state

        return (
            <div>
                Wallet
                <p>{mnemonic}</p>
                <ul>
                    <li>{payAddress}</li>
                </ul>
                <ul>
                    {utxo.map((item, idx) => {
                        return <li key={idx}>{item.txid}</li>
                    })}
                </ul>
                <button onClick={this.handleClick} >send</button>
            </div>
        )
    }
}

export default Wallet