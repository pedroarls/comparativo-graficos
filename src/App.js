import React from "react";
import "./App.css";
import { D3AreaChart } from "./charts/D3AreaChart";
import { VictoryAreaChart } from "./charts/VictoryAreaChart";
import { RechartsAreaChart } from "./charts/RechartsAreaChart";
import { NivoAreaChart } from "./charts/NivoAreaChart";
import { ReactVisArea } from "./charts/ReactVisArea";
import { ViserArea } from "./charts/ViserArea";
import { ChartJSAreaChart} from "./charts/ChartsJsAreaChart";
import { VisXAreaChart } from "./charts/VisXAreaChart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>React Data-viz Libraries Comparison</h3>
      </header>
      <div className="App-main">
        <div className="App-charts">
          <D3AreaChart />
          <br />
          <br />
          <VictoryAreaChart />
          <br />
          <br />
          <RechartsAreaChart />
          <br />
          <br />
          <NivoAreaChart />
          <br />
          <br />
          <ReactVisArea />
          <br />
          <br />
          <ViserArea />
          <br />
          <br />
          <ChartJSAreaChart/>
          <br />
          <br />
          <VisXAreaChart width={500} height={300} />
        </div>
      </div>
    </div>
  );
}

export default App;
