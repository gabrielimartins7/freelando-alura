import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialUser = {
    profile: '',
    interests: '',
    fullName: '',
    uf: '',
    city: '',
    email: '',
    password: '',
    confirmPassword: '',
    submitUser: ''
}

export const SignUpUserContext = createContext({
    user: initialUser,
    setProfile: () => null,
    setInterests: () => null,
    setFullName: () => null,
    setUf: () => null,
    setCity: () => null,
    setEmail: () => null,
    setPassword: () => null,
    setConfirmPassword: () => null,
    submitUser: () => null
})

export const useSignUpUserContext = () => {
    return useContext(SignUpUserContext);
}

export const SignUpUserProvider = ({ children }) => {
    const [user, setUser] = useState(initialUser);

    const navigate = useNavigate();

    const setProfile = (profile) => {
        setUser(previousStatus => {
            return {...previousStatus, profile}
        })
    };
    const setInterests = (interests) => {
        setUser(previousStatus => {
            return {...previousStatus, interests}
        })
    };
    const setFullName = (fullName) => {
        setUser(previousStatus => {
            return {...previousStatus, fullName}
        })
    };
    const setUf = (uf) => {
        setUser(previousStatus => {
            return {...previousStatus, uf}
        })
    };
    const setCity = (city) => {
        setUser(previousStatus => {
            return {...previousStatus, city}
        })
    };
    const setEmail = (email) => {
        setUser(previousStatus => {
            return {...previousStatus, email}
        })
    };
    const setPassword = (password) => {
        setUser(previousStatus => {
            return {...previousStatus, password}
        })
    };
    const setConfirmPassword = (confirmPassword) => {
        setUser(previousStatus => {
            return {...previousStatus, confirmPassword}
        })
    };
    const submitUser = () => {
        console.log(user);
        navigate('/completed')
    }

    const context = {
        user,
        setProfile,
        setInterests,
        setFullName,
        setUf,
        setCity,
        setEmail,
        setPassword,
        setConfirmPassword,
        submitUser
    }

    return(
        <SignUpUserContext.Provider value={context}>
            {children}
        </SignUpUserContext.Provider>
    )
}