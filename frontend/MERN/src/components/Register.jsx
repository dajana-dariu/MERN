import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { password, password2 } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('Passwords are different');
      return;
    }

    const response = await register(formData);

    if (response.error) {
      toast.error(
        response.error.data?.message ||
          response.error.error ||
          'Registration failed',
      );
    } else {
      dispatch(setUser(response.data));
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/');
      toast.success('Registration successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Register'}
      </button>
    </form>
  );
};

export default Register;
