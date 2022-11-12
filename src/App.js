import './App.css';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const SignupSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required()
});

function App() {
    const {
        register,
        handleSubmit,
        formState: {errors}, reset
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    
    const onSubmit = () => {
        alert('Successfully Submitted!')
        reset();
    };


  return (
     <div className="App">
      <form className='form-box' onSubmit={handleSubmit(onSubmit)}>
              <input {...register('firstName')} placeholder='First Name'/>
              <p>{errors.firstName?.message}</p>

              <input {...register('lastName')} placeholder='Last Name'/>
              <p>{errors.lastName?.message}</p>

              <input {...register('email')} placeholder='Email' type='email'/>
              <p>{errors.email?.message}</p>

            <input  className='button' type='submit'/>
      </form>
     </div>
  );
}

export default App;
