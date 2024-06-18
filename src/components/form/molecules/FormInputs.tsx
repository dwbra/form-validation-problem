import SelectInput from '../atoms/SelectInput';
import CheckboxInput from '../atoms/CheckboxInput';
import { FormInputsProps } from '../../../types';
import BasicInput from '../atoms/BasicInput';

const FormInputs = ({ values }: FormInputsProps) => {
    return (
        <>
            <BasicInput
                id="email"
                name="email"
                label="Email Field"
                type="email"
                className="email-input"
            />
            <BasicInput
                id="password"
                name="password"
                label="Password Field"
                type="password"
                className="password-input"
            />
            <SelectInput
                id="colour"
                name="colour"
                label="Colour Field"
                className="select-input"
            />
            <CheckboxInput
                name="animals"
                label="Animals Field"
                className="checkbox-input"
            />
            {values.animals.includes('Tiger') && (
                <BasicInput
                    id="tigerType"
                    name="tigerType"
                    label="Tiger Type Field"
                    type="text"
                    className="text-input"
                />
            )}
        </>
    );
};

export default FormInputs;
