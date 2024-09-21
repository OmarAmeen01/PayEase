'use client';
import { useSelector } from "react-redux";

export default function Home() {
  const balance = useSelector(state=>state.payment.balance)
  console.log(balance)
  return (
    <div>
      Hello your balance is {balance}
    </div>
  );
}
