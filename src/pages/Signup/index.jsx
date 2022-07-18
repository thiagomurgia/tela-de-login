import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { Container } from './styles';
import { MdMailOutline, MdRemoveRedEye } from 'react-icons/md';
import FlashMessage from 'react-flash-message';
import LogoImg from '../../assets/bmw.png';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [sendUser, setSendUser] = useState(false);
  const [err, setErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    api('/users').then((response) => console.log(response.data));
  }, []);

  useEffect(() => {
    if (sendUser) {
      navigate('/');
    }
  }, [handleSubmit]);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit() {
    if (!email || !password || !confirmPass) {
      setErr(true);

      setTimeout(() => {
        setErr(false);
      }, 5000);
      return;
    }
    if (password !== confirmPass) {
      setPassErr(true);
      setTimeout(() => {
        setPassErr(false);
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

    const data = {
      email,
      password,
    };

    api.post('/users', data);

    setEmail('');
    setPassword('');
    setConfirmPass('');
    setSendUser(true);

    return;
  }

  return (
    <>
      <Container>
        <img src={LogoImg} alt="logo" />
        <div className="wrapper">
          <div className="login-form">
            <h1>Cadastre-se</h1>
            {err && (
              <FlashMessage duration={5000} className="flash-message">
                <strong>Preencha todos os campos.</strong>
              </FlashMessage>
            )}

            {passErr && (
              <FlashMessage duration={5000} className="flash-message">
                <strong>Senhas não conferem.</strong>
              </FlashMessage>
            )}

            {emailErr && (
              <FlashMessage duration={5000} className="flash-message">
                <strong>Digite um e-mail válido</strong>
              </FlashMessage>
            )}
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
            <div className="labels">
              <label>Confirme a senha</label>
              {/* {error && <span><ErrComponent name="*Senhas não conferem"/></span>} */}
            </div>
            <div className="login-form-input">
              <input
                type="password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              <span>
                <MdRemoveRedEye />
              </span>
            </div>
            <div className="btn">
              <button onClick={handleSubmit}>Cadastrar</button>
            </div>
          </div>
          <footer>
            <div>
              <Link to="/">Já tem conta? Clique aqui</Link>
            </div>
          </footer>
        </div>
      </Container>
    </>
  );
}

export { SignUp };
