import React, { useState } from 'react';

const FormComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Form</h2>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Nhập email" />
          </label>
        </div>
        <div>
          <label>
            Mật khẩu:
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Nhập mật khẩu" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <h3>Thông tin đã nhập:</h3>
          <p>Email: {email}</p>
          <p>Mật khẩu: {password}</p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
