import "./App.css";

import Header from "./components/Header/Header";

import ResponsiveBarChart from "./components/ResponsiveBarChart/ResponsiveBarChart";

function App() {
  return (
    <div className="App">
      <Header />
      <ResponsiveBarChart
        data={[
          {
            Name: "Lahore",
            Value: "30",
          },
          {
            Name: "Karachi",
            Value: "55",
          },
          {
            Name: "Multan",
            Value: "25",
          },
          {
            Name: "Islamabad",
            Value: "75",
          },
          {
            Name: "Faislabad",
            Value: "10",
          },
          {
            Name: "Sialkot",
            Value: "40",
          },
        ]}
      />

      <ResponsiveBarChart
        data={[
          {
            Name: "India",
            Value: "50",
          },
          {
            Name: "Pakistan",
            Value: "66",
          },
          {
            Name: "America",
            Value: "80",
          },
          {
            Name: "BanglaDesh",
            Value: "25",
          },
          {
            Name: "Austrelia",
            Value: "87",
          },
        ]}
      />

      <ResponsiveBarChart
        data={[
          {
            Name: "Ali",
            Value: "40",
          },
          {
            Name: "Ahmad",
            Value: "36",
          },
          {
            Name: "Mubeen",
            Value: "70",
          },
          {
            Name: "Adeel",
            Value: "95",
          },
          {
            Name: "Mukhtar",
            Value: "100",
          },
          {
            Name: "Hassan",
            Value: "25",
          },
          {
            Name: "Adeel",
            Value: "74",
          },
        ]}
      />
    </div>
  );
}
export default App;
