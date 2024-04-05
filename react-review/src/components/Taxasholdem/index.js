import React from "react";
export default function Taxasholdem() {

    const [hasEntry, setHasEntry] = React.useState(false);
    const [socketObj, setSocketObj] = React.useState(undefined);
    const [clientCard, setClientCard] = React.useState();
    const [cardInfo, setCardInfo] = React.useState();
    const [step, setStep] = React.useState();

    const handleConnect = () => {
        const socket = new WebSocket('ws://192.168.31.29:8080');
        setSocketObj(socket);

        socket.onopen = function () {
            console.log('Connected to the WebSocket server');
            setHasEntry(true)
        };

        socket.onclose = () => {
            setHasEntry(false)
        };

        socket.onmessage = (event) => {
            const cardInfo = JSON.parse(event.data)
            setClientCard(cardInfo?.clientCard)
            setCardInfo(cardInfo?.cardTable)
            setStep(cardInfo.step)
        }
    }

    const handleShuffle = () => {
        socketObj.send('start')
    }

    const handleLook = () => {
        socketObj.send('shuffle')
    }

    const handleTurn = () => {
        socketObj.send('turn')
    }

    const handleFin = () => {
        socketObj.send('river')
    }

    const renderCardTable = () => {
        const commonRender = <div>
            <div>洗牌完成!</div>
            <div>场面上的牌为: {cardInfo?.map(item => {
                return `${item} `
            })} </div>
            <div>您手上的牌为: {clientCard?.map(item => {
                return `${item} `
            })} </div>
        </div>

        if (step === 'shuffle') {
            return (<div>
                {commonRender}
                <button onClick={handleTurn}>发送转牌</button>
            </div>)
        } else if (step === 'turn') {
            return (<div>
                {commonRender}
                <button onClick={handleFin}>发送河牌</button>
            </div>)
        } else if (step === 'river') {
            return (<div>
                {commonRender}
                <button onClick={handleShuffle}>重新洗牌</button>
            </div>)
        } else if (step === 'start') {
            return (<div>
                {commonRender}
                <button onClick={handleLook}>看牌</button>
            </div>)
        } else {
            return (
                <button onClick={handleShuffle} > 开始洗牌</button>
            )

        }

    }

    return (
        <div>
            {
                !hasEntry ? <button onClick={handleConnect}>进入房间</button> : renderCardTable()
            }
        </div>
    )
}