import React, { useEffect } from 'react';
import { useField } from 'formik';
import { CheckboxInputType } from '../../../types';

const CheckboxInput = ({
    name,
    className,
    label,
}: CheckboxInputType) => {
    const [field, meta, helpers] = useField({ name });

    // useEffect to synchronize meta.touched with field.value changes
    useEffect(() => {
        // Check if any checkbox is checked
        const anyCheckboxChecked = field.value.some(
            (val: string) => val !== ''
        );

        // If any checkbox is checked and meta.touched is false, set it to true
        if (anyCheckboxChecked && !meta.touched) {
            helpers.setTouched(true);
        }
    }, [field.value, meta.touched, helpers]);

    // Add and remove items from the array.
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        const updatedValues = field.value.includes(value)
            ? field.value.filter((val: string) => val !== value)
            : [...field.value, value];

        helpers.setValue(updatedValues);
    };

    return (
        <fieldset
            aria-describedby={`${name}Error`}
            className={`${className ?? ''} ${meta.touched && meta.error ? 'error' : ''}`}
        >
            <legend>{label}</legend>
            <div role="group" aria-labelledby="checkbox-group">
                {['Cat', 'Dog', 'Tiger'].map(animal => (
                    <div className="checkbox-content" key={animal}>
                        <input
                            type="checkbox"
                            id={`${name}-${animal}`}
                            name={name}
                            value={animal}
                            checked={field.value.includes(animal)}
                            onChange={handleChange}
                            aria-labelledby={`${name}-${animal}-label`}
                        />
                        <label
                            id={`${name}-${animal}-label`}
                            htmlFor={`${name}-${animal}`}
                        >
                            {animal}
                        </label>
                    </div>
                ))}
            </div>
            {meta.touched && meta.error ? (
                <span id={`${name}Error`}>{meta.error}</span>
            ) : null}
        </fieldset>
    );
};

export default CheckboxInput;
