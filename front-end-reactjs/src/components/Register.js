import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
        <div className="flex items-center justify-center h-screen text-center ml-5 mr-5">
            <Card className="w-96 h-130">
            <h5 className="text-3xl font-bold text-gray-900 dark:text-white mt-5 mb-5">Create An Account</h5>
            <form className="flex flex-col gap-4" action='/'>
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
                    autoComplete=""
                    onChange={ (e) => setEmail(e.target.value) }
                />
                </div>
                <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput 
                    id="password1" 
                    type="password" 
                    required 
                    value={password}
                    autoComplete=""
                    onChange={ (e) => setPassword(e.target.value) }
                />
                </div>
                <Button type="submit">Register</Button>
                <Button as={Link} to="/">Back to login</Button>
            </form>
            </Card>
        </div>
        </>
    );
}
 
export default Register;