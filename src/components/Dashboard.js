import React, { useEffect, useState } from "react";
import './Dash.css'
import {
  Chart as ChartJS,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
} from "chart.js";

import {
  CandlestickController,
  CandlestickElement
} from "chartjs-chart-financial";

import { Chart as ReactChart } from "react-chartjs-2";

import "chartjs-adapter-date-fns";

ChartJS.register(
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  CandlestickController,
  CandlestickElement
);

export default function Dashboard() {

  const [candles, setCandles] = useState([
    { x: Date.now() - 4000, o: 100, h: 105, l: 98, c: 103 },
    { x: Date.now() - 3000, o: 103, h: 108, l: 101, c: 106 },
    { x: Date.now() - 2000, o: 106, h: 110, l: 104, c: 105 },
    { x: Date.now() - 1000, o: 105, h: 109, l: 102, c: 107 }
  ]);

  const [balance, setBalance] = useState(100000);

const [quantity, setQuantity] = useState(1);

const [holdings, setHoldings] = useState(0);

const [averagePrice, setAveragePrice] = useState(0);

const [tradeHistory, setTradeHistory] = useState([]);

const [message, setMessage] = useState("");

  useEffect(() => {

    const interval = setInterval(() => {

      setCandles((oldCandles) => {

        const last = oldCandles[oldCandles.length - 1];

        const open = last.c;

        const change = (Math.random() - 0.5) * 6;

        const close = open + change;

        const high =
          Math.max(open, close) + Math.random() * 3;

        const low =
          Math.min(open, close) - Math.random() * 3;

        const newCandle = {
          x: Date.now(),
          o: open,
          h: high,
          l: low,
          c: close
        };

        return [...oldCandles, newCandle].slice(-20);
      });

    }, 2000);

    return () => clearInterval(interval);

  }, []);

  const data = {
    datasets: [
      {
        label: "Trade X",
        data: candles
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "second"
        }
      }
    }
  };

  const currentPrice =
  candles[candles.length - 1]?.c || 100;

  function buyStock() {

  const totalCost = currentPrice * quantity;

  if (quantity <= 0) {
    setMessage("Quantity must be greater than 0");
    return;
  }

  if (totalCost > balance) {
    setMessage("Insufficient wallet balance");
    return;
  }

  const newBalance = balance - totalCost;

  const newHoldings = holdings + quantity;

  let newAveragePrice;

  if (holdings === 0) {

    newAveragePrice = currentPrice;

  } else {

    newAveragePrice =
      ((averagePrice * holdings) +
      (currentPrice * quantity)) /
      newHoldings;
  }

  setBalance(newBalance);

  setHoldings(newHoldings);

  setAveragePrice(newAveragePrice);

  setTradeHistory([
    ...tradeHistory,
    {
      type: "BUY",
      price: currentPrice,
      quantity: quantity,
      total: totalCost,
      time: new Date().toLocaleTimeString()
    }
  ]);

  setMessage(
    `Bought ${quantity} quantity at ₹${currentPrice.toFixed(2)}`
  );
}

function sellStock() {

  if (quantity <= 0) {
    setMessage("Quantity must be greater than 0");
    return;
  }

  if (quantity > holdings) {
    setMessage("You don't have enough holdings");
    return;
  }

  const totalAmount = currentPrice * quantity;

  const newBalance = balance + totalAmount;

  const newHoldings = holdings - quantity;

  setBalance(newBalance);

  setHoldings(newHoldings);

  if (newHoldings === 0) {
    setAveragePrice(0);
  }

  setTradeHistory([
    ...tradeHistory,
    {
      type: "SELL",
      price: currentPrice,
      quantity: quantity,
      total: totalAmount,
      time: new Date().toLocaleTimeString()
    }
  ]);

  setMessage(
    `Sold ${quantity} quantity at ₹${currentPrice.toFixed(2)}`
  );
}

const profitLoss =
  (currentPrice - averagePrice) * holdings;

  const portfolioValue =
  balance + (currentPrice * holdings);

  return (
    <div id="final" >
    <div className="container" id="dashbg">

      <h2 id="dash" className="text-center">Trading Dashboard</h2>
<div className="row mt-4">

      <div className="col-md-4">
        <div className="card p-3" id="card1">
          <h5>Wallet Balance</h5>
          <h3>
            ₹{balance.toFixed(2)}
          </h3>
        </div>
      </div>


      <div className="col-md-4">
        <div className="card p-3" id="card1">
          <h5>Holdings</h5>
          <h3>
            {holdings}
          </h3>
        </div>
      </div>


      <div className="col-md-4">
        <div className="card p-3" id="card1">
          <h5>Current Price</h5>
          <h3>
            ₹{currentPrice.toFixed(2)}
          </h3>
        </div>
      </div>

    </div>

    <div className="card p-3 mt-4" id="card1">

      <h4>Price Chart</h4>

      <ReactChart
        type="candlestick"
        data={data}
        options={options}
      />

    </div>

    <div className="card p-4 mt-4" id="card1">

      <h4>Place Trade</h4>

      <p>
        Current Price:
        <strong> ₹{currentPrice.toFixed(2)}</strong>
      </p>

      <div className="mb-3">

        <label>Quantity</label>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) =>
            setQuantity(Number(e.target.value))
          }
          className="form-control"
        />

      </div>


      <div className="d-flex gap-2" >

        <button
          className="btn btn-success"
          onClick={buyStock}
        >
          BUY
        </button>


        <button
          className="btn btn-danger"
          onClick={sellStock}
        >
          SELL
        </button>

      </div>


      {message && (
        <p className="mt-3">
          {message}
        </p>
      )}

    </div>

    <div className="card p-4 mt-4" id="card1">

      <h4>Portfolio</h4>

      <p>
        Average Buy Price:
        <strong>
          ₹{averagePrice.toFixed(2)}
        </strong>
      </p>

      <p>
        Holdings:
        <strong>
          {holdings}
        </strong>
      </p>

      <p>
        Holdings Value:
        <strong>
          ₹{(currentPrice * holdings).toFixed(2)}
        </strong>
      </p>

      <p>
        P&L:
        <strong>
          ₹{profitLoss.toFixed(2)}
        </strong>
      </p>

      <p>
        Total Portfolio:
        <strong>
          ₹{portfolioValue.toFixed(2)}
        </strong>
      </p>

    </div>

    <div className="card p-4 mt-4" id="card1">

      <h4>Trade History</h4>

      <table className="table">

        <thead>

          <tr>
            <th>Type</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Time</th>
          </tr>

        </thead>


        <tbody>

          {tradeHistory.map((trade, index) => (

            <tr key={index}>

              <td>{trade.type}</td>

              <td>{trade.quantity}</td>

              <td>
                ₹{trade.price.toFixed(2)}
              </td>

              <td>
                ₹{trade.total.toFixed(2)}
              </td>

              <td>
                {trade.time}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>
  </div>
  );
}