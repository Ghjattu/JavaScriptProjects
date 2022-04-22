const valueSpan = document.querySelector('.value');
const incButton = document.querySelector('.btn-inc');
const rstButton = document.querySelector('.btn-rst');
const decButton = document.querySelector('.btn-dec');

const Counter = (() => {
    let value = 0;
    const changeBy = (val) => {
        value += val
    };
    return {
        increment: () => {
            changeBy(1);
        },
        decrement: () => {
            changeBy(-1);
        },
        reset: () => {
            value = 0;
        },
        showValue: () => value
    }
})();

const setValue = () => {
    valueSpan.textContent = Counter.showValue();
    const currentValue = parseInt(valueSpan.textContent);
    if (currentValue > 0)
        valueSpan.style.color = 'green';
    else if (currentValue < 0)
        valueSpan.style.color = 'red';
    else
        valueSpan.style.color = 'black';
}

incButton.addEventListener('click', () => {
    Counter.increment();
    setValue();
});

rstButton.addEventListener('click', () => {
    Counter.reset();
    setValue();
});

decButton.addEventListener('click', () => {
    Counter.decrement();
    setValue();
});
