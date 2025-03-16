import style from './SingUp2.module.scss';

export const SingUp2 = () => {
  return (
    <div className={style.SingUp}>
      <h1 className={style.h1}>Flary presale live!</h1>
      <h2 className="relative">Buy $FLFI now</h2>
      <p className="font-bold text-2xl text-gray-200 relative">
        1 <span className="text-[#fe9452]">$FLFI</span> = 0.09$
      </p>
      <div className={style.btn_content}>
        <div >
          <div className={style.chevron}></div>
          <div className={style.chevron}></div>
          <div className={style.chevron}></div>
        </div>
        <div className={style.btn}>
          <a href="https://flary.finance/?utm_source=promopage&utm_medium=cpc&utm_campaign=promo1">Buy Now</a>
        </div>
      </div>

      <div className={style.footer}>
        <div className={style.contentHelper}>
          <span className={style.numSpan}>01</span>
          <h3>
            Get the <span className={style.textSpan}>maximum</span> with Flary finance
          </h3>
        </div>
        <div className={style.contentHelper}>
          <span className={style.numSpan}>02</span>
          <h3>
            We work to <span className={style.textSpan}>make</span> your life easier
          </h3>
        </div>
      </div>
    </div>
  );
};
