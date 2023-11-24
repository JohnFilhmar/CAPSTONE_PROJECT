import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const topnavigationbar = () => {
    const userName = 'Elizabeth Geronaga';
    const userEmail = 'elizabethgeronaga@gmail.com';

    return (
        <>
        <Navbar fluid rounded>
            <Navbar.Toggle />
            <Navbar.Brand>
                <img src='jms.png' className="mr-2 w-20 h-20 md:w-15 md:h-15" alt="JMS Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E-Shop</span>
            </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img='bebe.png' rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{userName}</span>
                            <span className="block truncate text-sm font-medium">{userEmail}</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Profile</Dropdown.Item>
                        <Dropdown.Item>Order History</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                Home
                </Navbar.Link>
                <Navbar.Link as={Link} to="#">Browse</Navbar.Link>
                <Navbar.Link as={Link} to="#">Services</Navbar.Link>
                <Navbar.Link as={Link} to="#">About</Navbar.Link>
                <Navbar.Link as={Link} to="#">Contacts</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
}
 
export default topnavigationbar;