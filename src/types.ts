export type FormInputTypes = {
    email: string;
    password: string;
    colour: string;
    animals: string[];
    tigerType: string;
};

export type BasicInputType = {
    id: string;
    name: string;
    label: string;
    className?: string;
    type: string;
};

export type SelectInputType = {
    id: string;
    name: string;
    label: string;
    className?: string;
};

export type CheckboxInputType = {
    name: string;
    label: string;
    className?: string;
};

export type FormInputsProps = {
    values: FormInputTypes;
};
