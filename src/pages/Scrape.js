import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const Scrape = () => {
const test = false
    const paramsSchema = Yup.object({
        // pageName: Yup.string().required('required'),
        pageName: test == true ? Yup.string().required('required') : Yup.string().required('Proxy is required') ,
        postCount: Yup.number().required('required'),
        loggedIn: Yup.boolean().oneOf([false, true]),
        username: Yup.string().when('loggedIn', {
            is:(val)=>val===true,
            then: Yup.string().required('This field is required to login.')
        }),
        password: Yup.string().when('loggedIn', {
            is:(val)=>val===true,
            then: Yup.string().required('This field is required to login.')
        })
    })

    const formStyle = {
        marginTop: '100px'
    }


    return ( 
        <div className="main">
            <h1>Scraper</h1>
            <hr />
            <Formik
                style={formStyle}
                initialValues={{
                    pageName: '',
                    postCount:10,
                    loggedIn:false,
                    username:'',
                    password:'',
                    }}
                validationSchema={paramsSchema}
                // onSubmit send params to backend
                onSubmit={(values)=>alert(JSON.stringify(values))}
                

            >
                {({values, errors, touched})=>{
                    return(
                        <Form className="form-center">
                            <label className="" for="pageName">Page Name</label>
                            {errors.pageName && touched.pageName ? <div className="error-message">{errors.pageName}</div> : null}
                            <Field className="form-control mt-1" placeholder="Page Name" name="pageName" label="Page Name" />
                            <label className="" for="postCount">Post Count</label>
                            {errors.postCount && touched.postCount ? <div className="error-message"s>{errors.postCount}</div> : null}
                            <Field className="form-control mt-1" placeholder="Number Of Post" name="postCount"/>
                            <label className="chk-label" for="loggedIn">Logged In:</label>
                            <Field type="checkbox" name="loggedIn"/>
                            {values.loggedIn ? (
                                <>
                                {errors.username && touched.username ? <div className="error-message"s>{errors.username}</div> : null}
                                <Field className="form-control mt-1" placeholder="User Name" name="username" label="Username" />
                                {errors.password && touched.password ? <div className="error-message"s>{errors.password}</div> : null}
                                <Field className="form-control mt-1" placeholder="Password" name="password" label="Password" />
                                </>
                            ):''}
                            <button className="btn btn-primary" type="submit">Collect Posts</button>
                        </Form>)
                }

                }

            </Formik>

        </div>
     );
}
 
export default Scrape;