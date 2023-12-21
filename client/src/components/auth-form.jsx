
import { UserContext } from '../utils/contexts/userContext';
import { googleSignIn } from '../utils/firebase/firebase';
import classes from './auth-form.module.css';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
function AuthForm() {
  const { setCurrentUser, currentUser } = useContext(UserContext);
  const navigate = useNavigate()
  const onClickHandler = async () => {
    const { user } = await googleSignIn();
    console.log(user)

    setCurrentUser(() => {
      return user
    })
    console.log(currentUser);

    if (user) {
      navigate('/')
    }

  }
  return (
    <section className={classes.auth}>
      <h1>Sign up</h1>
      <form className={classes.control}>
        <label htmlFor="email" >Email</label>
        <input type="email" placeholder='Email' />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Password' />
      </form>
      <div className={classes.actions}>
        <button >SignUp</button>
        <br />
        <button type='button' onClick={onClickHandler}><FcGoogle /> Login with Google</button>
      </div>
    </section>
  );
}

export default AuthForm;
