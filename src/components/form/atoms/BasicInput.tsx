import { useField } from 'formik';
import { BasicInputType } from '../../../types';

const BasicInput = ({
    name,
    className,
    id,
    label,
    type,
}: BasicInputType) => {
    const [field, meta] = useField({ name });
    return (
        <div
            className={`${className ?? ''} ${meta.touched && meta.error ? 'error' : ''}`}
        >
            <label htmlFor={name}>{label}</label>
            <input
                id={id}
                aria-describedby={`${name}Error`}
                {...field}
                type={type}
            />
            {meta.touched && meta.error ? (
                <span id={`${name}Error`}>{meta.error}</span>
            ) : null}
        </div>
    );
};

export default BasicInput;
