import { useState, useEffect } from "react";
import Heading from "./Heading.jsx";
import Button from "./Button.jsx";
import Paragraph from "./Paragraph.jsx";
export default function App() {
  // State for advice
  const [advice, setAdvice] = useState("");

  // State for number of clicks/advices received
  const [count, setCount] = useState(0);
  async function getData() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  useEffect(function () {
    getData();
  }, []);

  return (
    <>
      <Heading content={advice} />
      <Button onClickHandle={getData} />
      <Paragraph count={count} />
    </>
  );
}
