import { ClaimBlock } from "./ClaimBlock";
import style from "./ClaimWindow.module.scss";

export const ClaimWindow = () => {
  return <div className={style.window}>

<h2 className={style.title_1}>Claim Tokens</h2>


<ClaimBlock/>
  </div>;
};
