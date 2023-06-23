import Image from "next/image";
import logoPic from "../images/gym_meme.png";

export default function Logo() {
  return <Image src={logoPic} width={500} height={500} alt="Jim" />;
}
