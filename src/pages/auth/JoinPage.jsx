import React, { useEffect, useState } from 'react';

const JoinPage = () => {
  const [invaliedEmail, setInvaliedEmail] = useState(false);
  const [invaliedPassword, setInvaliedPassword] = useState(false);
  const [invaliedTotal, setInvaliedTotal] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 유효성 검사 로직
  const checkInputInvalied = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case 'email':
        if (value.includes('@')) {
          setErrorMessage('');
          setInvaliedEmail(true);
        } else {
          setErrorMessage('@를 포함해서 작성해주세요.');
          setInvaliedEmail(false);
        }
        break;
      case 'password':
        if (value.length > 8) {
          setErrorMessage('');
          setInvaliedPassword(true);
        } else {
          setErrorMessage('8자 이상 비밀번호를 작성해주세요.');
          setInvaliedPassword(false);
        }
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    if (invaliedEmail && invaliedPassword) {
      setInvaliedTotal(false);
    } else {
      setInvaliedTotal(true);
    }
  }, [invaliedEmail, invaliedPassword]);

  return (
    <section>
      <form>
        <label htmlFor="email">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="@를 포함해서 작성해주세요."
            onChange={handleInputChange}
            onBlur={checkInputInvalied}
            value={email}
          />
        </label>

        <label htmlFor="password">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="8자 이상 비밀번호를 작성해주세요."
            onChange={handleInputChange}
            onBlur={checkInputInvalied}
            value={password}
            autoComplete="off"
          />
        </label>
        <p>{errorMessage}</p>
        <input type="submit" value="회원가입" disabled={invaliedTotal} />
      </form>
    </section>
  );
};

export default JoinPage;
