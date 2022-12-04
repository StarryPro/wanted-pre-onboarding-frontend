import React, { useState } from 'react';

const LoginPage = () => {
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

  return (
    <section>
      <form>
        <label htmlFor="email">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="이메일을 입력해주세요."
            onChange={handleInputChange}
            value={email}
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={handleInputChange}
            value={password}
            autoComplete="off"
          />
        </label>
        <input type="submit" value="로그인" />
      </form>
    </section>
  );
};

export default LoginPage;
