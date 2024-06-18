import { useField } from 'formik';
import { SelectInputType } from '../../../types';

const SelectInput = ({
    name,
    className,
    id,
    label,
}: SelectInputType) => {
    const [field, meta] = useField({ name });
    return (
        <div
            className={`${className ?? ''} ${meta.touched && meta.error ? 'error' : ''}`}
        >
            <label htmlFor={name}>{label}</label>
            <select
                id={id}
                aria-describedby={`${name}Error`}
                {...field}
            >
                <option value="" label="Select colour" />
                <option value="red" label="Red" />
                <option value="green" label="Green" />
                <option value="blue" label="Blue" />
            </select>
            {meta.touched && meta.error ? (
                <span id={`${name}Error`}>{meta.error}</span>
            ) : null}
        </div>
    );
};

export default SelectInput;
