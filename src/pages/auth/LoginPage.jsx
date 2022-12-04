import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { customAuthAxios } from '../../api/customAuthAxios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await customAuthAxios.post('/auth/signin', inputs);
      console.log('res:', res);
      localStorage.clear();
      const accessToken = res.data.access_token;
      if (accessToken) {
        localStorage.setItem('token', accessToken);
      }
      navigate('/todo');
    } catch (err) {
      console.log('err:', err.response);
      alert('잘못된 로그인 정보입니다.');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/todo');
    }
  }, []);

  return (
    <section>
      <form onSubmit={onSubmit}>
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
      <div>
        계정이 없으신가요? <Link to="/join">회원가입</Link>
      </div>
    </section>
  );
};

export default LoginPage;
