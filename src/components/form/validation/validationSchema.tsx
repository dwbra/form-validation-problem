import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
    colour: Yup.string().required('Colour must be selected'),
    animals: Yup.array()
        .min(2, 'At least two animals must be chosen')
        .of(Yup.string()),
    tigerType: Yup.string()
        .test(
            'tiger-type-required',
            'Type of Tiger required.',
            function (value) {
                const { animals } = this.parent;
                if (animals && animals.includes('Tiger')) {
                    return !!value;
                }
                return true;
            }
        )
        .trim(),
});

export default validationSchema;
