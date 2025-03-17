import style from './SingUp1.1.module.scss';

export const SingUp1 = () => {
  return (
    <div className={style.SingUp}>
      <h1 className={style.h1}>Join Flary presale now!</h1>
      <h2 className='relative' >The First Cross-Chain Lending & Borrowing platform that really cares about you</h2>
      <p className="font-bold text-2xl text-gray-200 relative">
        1 <span className="text-[#fe9452]">$FLFI</span> = 0.086$
      </p>
      <a className={`${style.btn} ${style['neon-pulse']}`} href="https://flary.finance/?utm_source=promopage&utm_medium=cpc&utm_campaign=promo1" >
        Buy Now
      </a>
    </div>
  );
};
