import Navbar from "../src/components/UI/Navbar";
import MainArea from "../src/components/Home/MainArea";
import { FunctionComponent } from "react";

export default function Home(): FunctionComponent {
  return (
    <div>
      <Navbar />
      <MainArea />
    </div>
  );
}
