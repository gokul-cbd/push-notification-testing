import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import OneSignal from "react-onesignal";

function App() {
  const [count, setCount] = useState(0);

  const connectOneSignal = async () =>
    await OneSignal.init({
      appId: "e8d82f69-8f5b-4fa5-a009-b562150872d6",
    });

  useEffect(() => {
    (async () => {
      console.log("useEffect");
      const response = await connectOneSignal();
      console.log({ response });
      // OneSignal.Slidedown.promptPush()
    })();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
