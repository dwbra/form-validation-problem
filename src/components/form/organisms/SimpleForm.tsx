import { Formik, Form } from 'formik';
import { FormInputTypes } from '../../../types';
import validationSchema from '../validation/validationSchema';
import FormInputs from '../molecules/FormInputs';

const SimpleForm = () => {
    const initialValues: FormInputTypes = {
        email: '',
        password: '',
        colour: '',
        animals: [],
        tigerType: '',
    };

    return (
        <section className="simple-form">
            <h1>Form validation problem</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(false);
                }}
            >
                {({ isValid, dirty, values }) => {
                    return (
                        <Form>
                            <FormInputs values={values} />
                            <button
                                disabled={!dirty || !isValid}
                                type="submit"
                            >
                                Submit
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </section>
    );
};

export default SimpleForm;
