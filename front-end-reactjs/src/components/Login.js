import { Alert, Button, Card, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { HiInformationCircle } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import useLoginUser from '../hooks/useUserLogin';

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [error, setError] = useState("");
    const { loginUser, message } = useLoginUser();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setError(null);
        }, 5000);

        return  () => {
            clearTimeout(timeoutId);
        };
    },[error])

    const HandleLogin = (e) => {
        e.preventDefault();
        if(password === verifyPassword){
            loginUser(email,password);
            setError(message);
        } else {
            setError("Password must match!")
        }
    }

    return (
        <>
        <div className="flex items-center justify-center h-screen text-center ml-5 mr-5">
            <Card className="w-96 h-130 static">
            <h5 className="text-3xl font-bold text-gray-900 dark:text-white mt-5 mb-5">Login</h5>
            <form className="flex flex-col gap-4" onSubmit={HandleLogin}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput 
                        id="email1"
                        type="email"
                        placeholder="name@flowbite.com"
                        required
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                        autoComplete=""
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput 
                        id="password" 
                        type="password" 
                        required 
                        value={password}
                        onChange={ (e) => setPassword(e.target.value) }
                        autoComplete=""
                        minLength={8}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="verifyPassword" value="Confirm password" />
                    </div>
                    <TextInput 
                        id="verifyPassword" 
                        type="password" 
                        required 
                        value={verifyPassword}
                        onChange={ (e) => setVerifyPassword(e.target.value) }
                        autoComplete=""
                        minLength={8}
                    />
                </div>
                <Button type="submit">Submit</Button>
                <Button as={Link} to="/register">Register</Button>
            </form>
            {error && <p style={{ color: 'red' }}>{error} Try Again.</p>}
            </Card>
        </div>
        </>
    );
}
 
export default Login;