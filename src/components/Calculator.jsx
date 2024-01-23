import clsx from 'clsx';
import { useEffect, useState } from 'react';

function Calculator() {
    const inputStyle = clsx('mt-2 h-9 w-full rounded-md border px-3 focus:outline-indigo-600');
    const [result, setResult] = useState({});
    const [cof, setCof] = useState({});
    const handleInputA = (e) => {
        setCof({
            ...cof,
            a: e.target.value,
        });
    };
    const handleInputB = (e) => {
        setCof({
            ...cof,
            b: e.target.value,
        });
    };
    const handleInputC = (e) => {
        setCof({
            ...cof,
            c: e.target.value,
        });
    };
    const handleCalculate = () => {
        setResult({});
        let { a, b, c } = cof;
        a = Number(a);
        b = Number(b);
        c = Number(c);
        if (a + b + c == 0) {
            console.log('1');
            setResult({ x1: 1, x2: cof.c / cof.a });
            return;
        } else if (a + b - c == 0) {
            setResult({ x1: -1, x2: -cof.c / cof.a });
            return;
        }

        if (a + b + c == 0) {
            setResult({ x1: NaN, x2: NaN });
            return;
        }

        const delta = Math.pow(b, 2) - 4 * a * c;
        if (delta < 0) {
            setResult({ x1: NaN, x2: NaN });
        } else if (delta == 0) {
            setResult({ ...result, x1: (-b / 2) * a, x2: NaN });
        } else {
            const a2 = 2 * a;
            let x1 = (-b - Math.sqrt(delta)) / a2;
            let x2 = (-b + Math.sqrt(delta)) / a2;
            setResult({ x1, x2 });
        }
    };
    useEffect(() => {
        console.log(cof);
    }, [cof]);
    return (
        <div className="calculator-container mx-auto flex w-80 flex-col content-center justify-center p-4 text-center">
            <label className="select-none text-2xl uppercase">The quadratic equation 2</label>
            <div>
                <input
                    className={inputStyle}
                    onInput={handleInputA}
                    name="a"
                    placeholder="a"
                    type="number"
                    value={cof?.a}
                />
            </div>
            <div>
                <input
                    value={cof?.b}
                    onInput={handleInputB}
                    className={inputStyle}
                    name="b"
                    placeholder="b"
                    type="number"
                />
            </div>
            <div>
                <input
                    value={cof?.c}
                    onInput={handleInputC}
                    className={inputStyle}
                    name="c"
                    placeholder="c"
                    type="number"
                />
            </div>
            <button onClick={handleCalculate} className="mt-5 h-9 cursor-pointer rounded-md bg-indigo-600 text-white">
                Calculate
            </button>
            <h1 className="mt-4">
                The answer is: {result?.x1} & {result?.x2}
            </h1>
        </div>
    );
}

export default Calculator;
