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
          <h3>Early access - more opportunities</h3>
          <p>Get ahead before the next phas</p>
        </div>
        <div className={style.section}>
          <h3>A space for leaders</h3>
          <p>Connect, grow, and take control</p>
        </div>
        <div className={style.section}>
          <h3>Unique in-game mechanics</h3>
          <p>Level up and unlock powerful new benefits</p>
        </div>
      </div>
    </div>
  );
};
