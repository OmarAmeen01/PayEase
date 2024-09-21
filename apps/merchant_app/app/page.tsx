
import { useSelector } from "react-redux";

const balance = useSelector(state=>state.payment.balance)
console.log(balance)
export default function Home() {
  return (
    <div>hello</div>
  );
}
