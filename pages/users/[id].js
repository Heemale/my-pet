import {Table, Row, Col, Tooltip, User, Text} from "@nextui-org/react";
import {StyledBadge} from "../../component/table/StyledBadge";
import {IconButton} from "../../component/table/IconButton";
import {EditIcon} from "../../component/table/EditIcon";
import {DeleteIcon} from "../../component/table/DeleteIcon";
import React, {useState} from "react";
import NavBarInstance from '../../component/NavbarInstance'
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import callContract from "../../hooks/call-contract";

export async function getStaticProps(staticProps) {

    const address = staticProps.params.id;
    console.log({address});

    const res3 = await fetch(`${process.env.API_HOST}/api/applications/to/${address}`);
    const applicationsTo = await res3.json();

    console.log({address, applicationsTo});

    return {
        props: {
            address,
            applicationsTo
        }
    }

}

export async function getStaticPaths() {

    const paths = [];
    return {
        paths,
        fallback: true
    }
}

// const ActionCell = ({rowData, dataKey, ...props}) => {
//     function handleAction() {
//         alert(`id:${rowData[dataKey]}`);
//     }
//
//     return (
//         <Cell {...props} className="link-group">
//             <IconButton appearance="subtle" onClick={handleAction} icon={<Edit2/>}/>
//         </Cell>
//     );
// };

const UserDetail = (props) => {
    console.log({props});
    const [activeKey, setActiveKey] = useState(null);

    const {handleRatificate} = callContract();

    const handleAgress = async (id) => {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];
        console.log('account,申请表id,1',account,id,1);
        await handleRatificate(account, id ,1);
    };

    const handleDisagress = async (id) => {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];
        console.log('account,申请表id,0',account,id,-1);
        await handleRatificate(account, id ,-1);
    };

    const columns = [
        {name: "申请人", uid: "applicant"},
        {name: "宠物编号", uid: "petId"},
        {name: "申请时间", uid: "timestamp"},
        {name: "审批状态", uid: "opinion"},
        {name: "动作", uid: "actions"},
    ];
    const users = props.applicationsTo;
    const renderCell = (user, columnKey) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "applicant":
                return (
                    <Col>
                        <Row>
                            <Text b size={14} css={{tt: "capitalize"}}>
                                {cellValue}
                            </Text>
                        </Row>
                    </Col>
                );
            case "petId":
                return (
                    <Col>
                        <Row>
                            <Text b size={14} css={{tt: "capitalize"}}>
                                {cellValue}
                            </Text>
                        </Row>
                    </Col>
                );
            case "timestamp":
                return (
                    <Col>
                        <Row>
                            <Text b size={14} css={{tt: "capitalize"}}>
                                {cellValue}
                            </Text>
                        </Row>
                    </Col>
                );
            case "opinion":
                return <StyledBadge type={user.opinion}>{cellValue}</StyledBadge>;
            case "actions":
                return (
                    <Row justify="center" align="center">
                        <Col css={{d: "flex"}}>
                            <Tooltip content="通过申请">
                                <IconButton onClick={() => handleAgress(user.id)}>
                                    <EditIcon size={20} fill="#979797"/>
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{d: "flex"}}>
                            <Tooltip
                                content="拒绝申请"
                                color="error"
                                onClick={() => handleDisagress(user.id)}
                            >
                                <IconButton>
                                    <DeleteIcon size={20} fill="#FF0080"/>
                                </IconButton>
                            </Tooltip>
                        </Col>
                    </Row>
                );
            default:
                return cellValue;
        }
    };
    return (
        <div className={styles.layout}>
            <Head>
                <title>账户页面</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavBarInstance appearance="subtle" activeKey={activeKey} onSelect={setActiveKey}/>

            {props.applicationsTo && (
                <Table
                    aria-label="Example table with custom cells"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                    selectionMode="none"
                >
                    <Table.Header columns={columns}>
                        {(column) => (
                            <Table.Column
                                key={column.uid}
                                hideHeader={column.uid === "actions"}
                                align={column.uid === "actions" ? "center" : "start"}
                            >
                                {column.name}
                            </Table.Column>
                        )}
                    </Table.Header>
                    <Table.Body items={users}>
                        {(item) => (
                            <Table.Row>
                                {(columnKey) => (
                                    <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                                )}
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            )}


        </div>

    );
};

export default UserDetail;