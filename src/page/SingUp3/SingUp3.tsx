import LOGO_COIN from '../../assets/flary_coin.png';

import style from './SingUp3.module.scss';
export const SingUp3 = () => {
  return (
    <div className={style.SingUp}>
      <h2 className="text-[40px] text-[#fe9452] pt-20 sm:text-[76px]">PRESALE LIVE</h2>
      <div className={style.top}>
        <h1>FLARY </h1>
        <img src={LOGO_COIN} alt="" />
      </div>
      <div className={style.btn_content}>
        <div className={style.arrow_left}>
          <div className={style.chevron}></div>
          <div className={style.chevron}></div>
          <div className={style.chevron}></div>
        </div>
        <div className={style.btn}>
          <a href="https://flary.finance/?utm_source=promopage&utm_medium=cpc&utm_campaign=promo1">Buy Now</a>
        </div>

        <div className={style.arrow_right}>
          <div className={style.chevron}></div>
          <div className={style.chevron}></div>
          <div className={style.chevron}></div>
        </div>
      </div>
      <div className={style.sections}>
        <div className={style.section}>
          <h3>EARLY ACCESS - MORE OPPORTUNITIES</h3>
          <p>Get ahead before the next phase</p>
        </div>
        <div className={style.section}>
          <h3>UNIFYING DeFI</h3>
          <p>The whole space at single place</p>
        </div>
        <div className={style.section}>
          <h3>FUSE TRADFI WITH WEB3</h3>
          <p>Redefine wealth with DeFI technologies</p>
        </div>
      </div>
    </div>
  );
};
