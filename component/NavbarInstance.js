import {Navbar, Nav, Dropdown} from 'rsuite';
import {useState} from "react";
import Drawer from "rsuite/Drawer";
import Button from "rsuite/Button";
import ButtonToolbar from "rsuite/ButtonToolbar";
import callMetaMask from "../hooks/call-MetaMask";
import * as React from "react";
import Link from "next/link";

const NavBarInstance = ({onSelect, activeKey, ...props}) => {

    const {account, handleAccountConnect,handleAccountDisconnect} = callMetaMask();
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();

    const handleOpen = key => {
        setOpen(true);
        setPlacement(key);
    };

    const handleConnect = async () => {
        console.log("handleConnect");
        await handleAccountConnect()
    };

    const handleDisConnect = () => {
        console.log("handleDisConnect");
        handleAccountDisconnect();
    };

    const NavLink = React.forwardRef((props, ref) => {
        const { as, href, ...rest } = props;
        return (
            <Link href={href} as={as}>
                <a ref={ref} {...rest} />
            </Link>
        );
    });

    return (
        <Navbar {...props}>

            <Navbar.Brand as={NavLink} href="/">首页</Navbar.Brand>

            <Nav pullRight>
                <Nav onSelect={onSelect} activeKey={activeKey}>
                    <Dropdown title="认证">
                        <Dropdown.Item eventKey="4" as={NavLink} href="/opeator/data/add">组织认证</Dropdown.Item>
                        <Dropdown.Item eventKey="5" as={NavLink} href="/pet/data/add">宠物上链</Dropdown.Item>
                        <Dropdown.Item eventKey="5" as={NavLink} href="/user/data/add">完善信息</Dropdown.Item>
                    </Dropdown>
                    <Nav.Item eventKey="3" as={NavLink} href="/pets">领养</Nav.Item>
                    <Nav.Item eventKey="4" as={NavLink} href="/users/0xc9065454cb82112fde41d5728d096a96053dfa5c">个人</Nav.Item>
                    <Nav.Item eventKey="5" onClick={() => handleOpen('right')}>钱包</Nav.Item>
                </Nav>
            </Nav>

            <Drawer size="full" placement={placement} open={open} onClose={() => setOpen(false)}>
                <Drawer.Header>
                    <Drawer.Title>我的钱包</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <ButtonToolbar>

                    </ButtonToolbar>

                    {account
                        ?
                        (<div>
                            <div>您的账号地址：{account}</div><br/>
                            <Button appearance="default" block onClick={() => {handleDisConnect()}}>退出登录</Button>
                        </div>)
                        :
                        (<div>
                            <div>您还未登录</div><br/>
                            <Button appearance="default" block onClick={() => {handleConnect()}}>连接以太坊钱包</Button>
                        </div>)}

                </Drawer.Body>
            </Drawer>

        </Navbar>
    );
};

export default NavBarInstance;