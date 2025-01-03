import axios from 'axios';

export const registerFormAuth = async (dataForm) => {
    const { fullname, username, email, password } = dataForm;
    try {
        const res = await axios.post(
            'http://localhost:3131/register',
            {
                name: fullname,
                username: username,
                email: email,
                password: password,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        alert('Register berhasil!');
        return res.data;
    } catch (err) {
        console.log(err.message);
        alert('Terdapat Kesalahan');
    }
};

export const loginFormAuth = async (dataForm) => {
    try {
        const res = await axios.post('http://localhost:3131/login', dataForm, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        alert('Login berhasil!');
        return res.data;
    } catch (err) {
        console.log(err.message);
        alert('Terdapat Kesalahan');
    }
};
