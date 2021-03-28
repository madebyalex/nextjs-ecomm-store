import styles from './InputNumber.module.css';

const InputNumber = ({ className, value, min, max }) => {
  let inputNumberClassName = styles.quantity__input;

  if (className) {
    inputNumberClassName = `${inputNumberClassName} ${className}`;
  }

  return (
    <>
      <div className={styles.quantity}>
        <input
          type='number'
          name='quantity'
          min={min}
          max={max}
          // className='quantity__input'
          defaultValue={value}
        />
        {/* <div class='quantity__nav'>
          <button class='quantity__button quantity__up'>&#xf106;</button>
          <button class='quantity__button quantity__down'>&#xf107;</button>
        </div> */}
      </div>
    </>
  );
};

export default InputNumber;
