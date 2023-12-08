import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Spinner } from 'flowbite-react';
import { IoKey } from "react-icons/io5";
import useAlert from '../hooks/useAlert';
import { FaEye,FaEyeSlash } from "react-icons/fa6";
import axios from 'axios';

const Register = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [postError, setError] = useState(null);
    const [seepass, setSeePass] = useState(true);
    const [keyinput, setKeyInput] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "NOVALUE",
    });

    const resetForm = () => {
        setFormData({
            email: "",
            password: "",
            role: "NOVALUE",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const response = await axios.postForm('/api/register', formData);
          console.log(response);
          if(response && response.data && response.data.redirect){
            sessionStorage.setItem('message','New User Added!');
            history.push(response.data.redirect);
          }
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
        resetForm();
        setKeyInput(false);
    };

    const AlertComponent = useAlert(postError && postError.response.data.messages.message);

    return (
        <>
            <div className="flex items-center justify-center h-screen text-center ml-5 mr-5">
                <Card className="w-96 h-130">
                    <div className="flex justify-end">
                        <IoKey
                            onClick={() => setKeyInput(!keyinput)}
                            className='w-5 h-5 hover:cursor-pointer border-2 border-solid rounded-xl hover:text-gray-500'
                        />
                    </div>
                    <h5 className="text-3xl font-bold text-gray-900 dark:text-white mt-5 mb-5">Create An Account</h5>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="name@flowbite.com"
                                required
                                value={formData.email}
                                autoComplete="true"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password" />
                            </div>
                            <div className="flex">
                                <TextInput
                                    className='grow'
                                    id="password"
                                    type={`${(seepass) ? 'password' : 'text'}`}
                                    required
                                    value={formData.password}
                                    autoComplete="current-password"
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                <div className='hover:cursor-pointer hover:text-blue-600 py-auto w-10 px-auto border-2 border-solid rounded-xl flex justify-center items-center' onClick={() => setSeePass(!seepass)}>
                                    {seepass ? <FaEye className='w-4 h-4' /> : <FaEyeSlash />}
                                </div>
                            </div>
                        </div>
                        <div className={keyinput ? 'block' : 'hidden'}>
                            <div className="mb-2 block">
                                <Label htmlFor="role" value="Enter Secret Key" />
                            </div>
                            <TextInput
                                id="role"
                                type="password"
                                value={formData.role}
                                autoComplete="false"
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            />
                        </div>
                        <Button type="submit">{loading ? <Spinner /> : "Register"}</Button>
                        <Button as={Link} to="/login">Back to login</Button>
                        {   postError && 
                            <AlertComponent />
                        }
                    </form>
                </Card>
            </div>
        </>
    );
};

export default Register;
