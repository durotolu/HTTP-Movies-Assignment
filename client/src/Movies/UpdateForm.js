import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function UpdateForm() {
    return (
        <div>
            <Formik
                render={() => (
                    <Form>
                        <div>
                            <Field name='text' />
                        </div>
                        <div>
                            <Field name='text' />
                        </div>
                        <div>
                            <Field name='text' />
                        </div>
                        <div>
                            <Field name='text' />
                        </div>
                        <input type='submit' />
                    </Form>
                )} />
        </div>
    )
};