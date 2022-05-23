import styles from '../../styles/petDetail.module.css'
import React, {useState} from "react";
import callContract from "../../hooks/call-contract";
import Head from "next/head";
import NavBarInstance from "../../component/NavbarInstance";
import Image from "next/image";
import List from "rsuite/List";
import Footer from "../../component/Footer";
import Web3 from "web3";
import Button from "rsuite/Button";
import callMetaMask from "../../hooks/call-MetaMask";

export async function getStaticProps(staticProps) {

    const id = staticProps.params.id;

    const res = await fetch(`${process.env.API_HOST}/api/pets/${id}`);
    const petData = await res.json();
    console.log({petData});

    return {
        props: {
            id,
            petData
        }
    }

}

export async function getStaticPaths() {

    const petIds = [{id: 1}, {id: 2}, {id: 3}];

    const paths = petIds.map((petIds) => {
        return {
            params: {id: petIds.id.toString()}
        }
    });
    // console.log(">>>>>paths", paths);

    return {
        paths,
        fallback: true
    }
}

const petDetail = (props) => {
    console.log('props',props);
    const petData = props.petData;
    const id = props.id;

    const [activeKey, setActiveKey] = useState(null);
    const {handleApply} = callContract();

    const handleSubmit = async (event) => {

        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];

        console.log('account,宠物id',account,id);

        await handleApply(account, id);
    };

    return (
        <div className={styles.layout}>

            <Head>
                <title>宠物信息</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavBarInstance appearance="subtle" activeKey={activeKey} onSelect={setActiveKey}/>

            <main className={styles.container}>
                {props.petData && (
                    <div className={styles.col2}>
                        <Image className={styles.storeImg}
                               src={petData.pictureHash ? petData.pictureHash : "/index_pet.jpeg"}
                               width={600}
                               height={360}
                        />
                    </div>
                )}
                {props.petData && (
                <div className={styles.col1}>
                    <List hover>
                        <List.Item key={petData.name}><p className={styles.listText}>姓名：{petData.name}</p></List.Item>
                        <List.Item key={petData.gendor}><p className={styles.listText}>性别：{petData.gendor}</p></List.Item>
                        <List.Item key={petData.owner}><p className={styles.listText}>主人：{petData.owner}</p></List.Item>
                        <List.Item key={petData.location}><p className={styles.listText}>所在地：四川-成都-青羊区</p></List.Item>
                        <List.Item key={petData.birthday}><p className={styles.listText}>出生日期：{petData.birthday}</p></List.Item>
                        <List.Item key={petData.noseLines}><p className={styles.listText}>鼻纹信息：{petData.noseLines}</p></List.Item>
                        <List.Item key={petData.pictureHash}><p className={styles.listText}>图片哈希：{petData.pictureHash}</p></List.Item>
                        <Button appearance="primary" block onClick={handleSubmit}>
                            <p className={styles.text3}>立即领养</p>
                        </Button>
                    </List>
                </div>
                )}
            </main>

        </div>
    )
};

export default petDetail;