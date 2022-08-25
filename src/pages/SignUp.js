import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignUp = () => {

    const signUpSchema = Yup.object({
        username: Yup.string().required('required'),
        password: Yup.string().required('required'),
    })

    const formStyle = {
        marginTop: '100px'
    }

    return ( 
        <div style={{
            marginTop: '100px'
        }}>
            <Formik
                
                initialValues={{
                    username:'',
                    password:'',
                    }}
                validationSchema={signUpSchema}
                // onSubmit send params to backend
                onSubmit={(values)=>alert(JSON.stringify(values))}
                

            >
                {({values, errors, touched})=>{
                    return(
                        <Form className="form-center">
                            <label className="" for="username">Username</label>
                            {errors.username && touched.username ? <div className="error-message">{errors.username}</div> : null}
                            <Field className="form-control mt-1" placeholder="Username" name="usrename" label="Username" />
                            <label className="" for="password">Post Count</label>
                            {errors.password && touched.password ? <div className="error-message"s>{errors.password}</div> : null}
                            <Field className="form-control mt-1" placeholder="Password" name="password"/>
                            <button className="btn btn-primary" type="submit">Sign Up</button>
                        </Form>)
                }

                }

            </Formik>
        </div>
     );
}
 
export default SignUp;