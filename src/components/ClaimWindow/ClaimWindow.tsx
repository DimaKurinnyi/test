import { ClaimBlock } from "./ClaimBlock";
import style from "./ClaimWindow.module.scss";

export const ClaimWindow = () => {
  return <div className={style.window}>

<h2 className={style.title_1}>Claim Tokens</h2>
<p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, deserunt modi neque nesciunt eius nisi obcaecati culpa assumenda ipsa autem minus reiciendis at, quas vel.</p>

<ClaimBlock/>
  </div>;
};
