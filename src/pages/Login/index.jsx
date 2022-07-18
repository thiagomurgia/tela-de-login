import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { MdMailOutline, MdRemoveRedEye } from 'react-icons/md';
import FlashMessage from 'react-flash-message';
import LogoImg from '../../assets/bmw.png';

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate('/dashboard');
    }
  }, [handleSubmit]);

  const [err, setErr] = useState(false);
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit(event) {
    // event.preventDefault()
    if (!email || !password) {
      setErr(true);

      setTimeout(() => {
        setErr(false);
      }, 5000);
      return;
    }

    if (!isValidEmail(email)) {
      setEmailErr(true);
      setTimeout(() => {
        setEmailErr(false);
      }, 5000);
      return;
    }

    setLogged(true);
  }

  return (
    <>
      <Container>
        <img src={LogoImg} alt="" srcset="" />

        <div className="wrapper">
          {err && (
            <FlashMessage duration={5000} className="flash-message">
              <strong>E-mail ou senha inválidos</strong>
            </FlashMessage>
          )}

          {emailErr && (
            <FlashMessage duration={5000} className="flash-message">
              <strong>Digite um e-mail válido</strong>
            </FlashMessage>
          )}
          <div className="login-form">
            <label>Seu e-mail</label>
            <div className="login-form-input">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <span>
                <MdMailOutline />
              </span>
            </div>

            <label>Senha</label>
            <div className="login-form-input">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>
                <MdRemoveRedEye />
              </span>
            </div>
            <div className="btn">
              <button onClick={handleSubmit}>Entrar</button>
            </div>
          </div>
          <footer>
            <div>
              <Link to="/reset">Esqueceu sua senha?</Link>
            </div>
            <div>
              <Link to="/signup">Cadastre-se</Link>
            </div>
          </footer>
        </div>
      </Container>
    </>
  );
}

export { Login };
