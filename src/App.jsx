import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./App.css"

const percentageToDegree = (percentage) => {
    return percentage * 360 / 100;
};

const calculateEarnings = (tradePrice, commissionPercentage, referralPercentage, miscFeesPercentage, tradeSharePercentage) => {
    const grossEarnings = tradePrice * (commissionPercentage / 100);
    const referralEarnings = (tradePrice * (commissionPercentage / 100)) * (referralPercentage / 100);
    const miscFees = (grossEarnings - referralEarnings) * (miscFeesPercentage / 100);
    const tradeShare = (grossEarnings - referralEarnings - miscFees) * (tradeSharePercentage / 100);
    const tradeEarnings = tradeShare + miscFees;
    const dalalEarnings = grossEarnings - referralEarnings - tradeEarnings;

    return {
        grossEarnings,
        referralEarnings,
        miscFees,
        tradeShare,
        tradeEarnings,
        dalalEarnings,
    };
};

const App = () => {
    const [tradePrice, setTradePrice] = useState(100000);
    const [commissionPercentage, setCommissionPercentage] = useState(2.5);
    const [referralPercentage, setReferralPercentage] = useState(2.5);
    const [miscFeesPercentage, setMiscFeesPercentage] = useState(10);
    const [tradeSharePercentage, setTradeSharePercentage] = useState(40);

    const { grossEarnings, referralEarnings, miscFees, tradeShare, tradeEarnings, dalalEarnings } = calculateEarnings(
        tradePrice,
        commissionPercentage,
        referralPercentage,
        miscFeesPercentage,
        tradeSharePercentage,
    );

    return (
        <div>

            <h1 style={{ textAlign: "center", color: "gray" }}>Circular slider Dashboard Assignment</h1>

            <div className="App">


                <div className='first-box'>
                    <div className="slider-container">
                        <p>Trade Price: ${tradePrice}</p>
                        <Slider
                            min={0}
                            max={100000}
                            value={tradePrice}
                            onChange={setTradePrice}
                            trackStyle={{ backgroundColor: 'red' }}
                            handleStyle={{ borderColor: 'red' }}
                        />
                    </div>
                    <div className="slider-container">
                        <p>Commission Percentage: {commissionPercentage}%</p>
                        <Slider
                            min={0}
                            max={100}
                            value={commissionPercentage}
                            onChange={setCommissionPercentage}
                            trackStyle={{ backgroundColor: '#3f51b5' }}
                            handleStyle={{ borderColor: '#3f51b5' }}
                        />
                    </div>
                    <div className="slider-container">
                        <p>Referral Percentage: {referralPercentage}%</p>
                        <Slider
                            minmin={0}
                            max={100}
                            value={referralPercentage}
                            onChange={setReferralPercentage}
                            trackStyle={{ backgroundColor: '#3f51b5' }}
                            handleStyle={{ borderColor: '#3f51b5' }}
                        />
                    </div>
                    <div className="slider-container">
                        <p>Misc. Fees Percentage: {miscFeesPercentage}%</p>
                        <Slider
                            min={0}
                            max={100}
                            value={miscFeesPercentage}
                            onChange={setMiscFeesPercentage}
                            trackStyle={{ backgroundColor: '#3f51b5' }}
                            handleStyle={{ borderColor: '#3f51b5' }}
                        />
                    </div>
                    <div className="slider-container">
                        <p>Trade Share Percentage: {tradeSharePercentage}%</p>
                        <Slider
                            min={0}
                            max={100}
                            value={tradeSharePercentage}
                            onChange={setTradeSharePercentage}
                            trackStyle={{ backgroundColor: '#3f51b5' }}
                            handleStyle={{ borderColor: '#3f51b5' }}
                        />
                    </div>
                </div>




                <div className="second-box">



                    <div className="earnings-container">
                        <p>Gross Earnings: ${grossEarnings}</p>
                        <p>Referral Earnings: ${referralEarnings}</p>
                        <p>Misc. Fees: ${miscFees}</p>
                        <p>Trade Share: ${tradeShare}</p>
                        <p>Trade Earnings: ${tradeEarnings}</p>
                        <p>Dalal Earnings: ${dalalEarnings}</p>
                    </div>




                    <div className="pie-chart-container">
                        <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="#fff" />
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#3f51b5"
                                strokeWidth="10"
                                strokeDasharray={`${percentageToDegree(commissionPercentage)} ${360 -
                                    percentageToDegree(commissionPercentage)}`}
                                transform="rotate(-90, 50, 50)"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#f50057"
                                strokeWidth="10"
                                strokeDasharray={`${percentageToDegree(referralPercentage)} ${360 -
                                    percentageToDegree(referralPercentage)}`}
                                transform={`rotate(${-90 + percentageToDegree(commissionPercentage)}, 50, 50)`}
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#ffc107"
                                strokeWidth="10"
                                strokeDasharray={`${percentageToDegree(miscFeesPercentage)} ${360 -
                                    percentageToDegree(miscFeesPercentage)}`}
                                transform={`rotate(${-90 + percentageToDegree(commissionPercentage + referralPercentage)}, 50, 50)`}
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#4caf50"
                                strokeWidth="10"
                                strokeDasharray={`${percentageToDegree(tradeSharePercentage)} ${360 -
                                    percentageToDegree(tradeSharePercentage)}`}
                                transform={`rotate(${-90 +
                                    percentageToDegree(commissionPercentage + referralPercentage + miscFeesPercentage)}, 50, 50)`}
                            />
                        </svg>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default App;


