import { GetServerSideProps, NextPageContext } from 'next';
import React, {useState, useEffect} from 'react';
import { useRouter } from "next/router"
import Button from '@/components/button';

const Index = () => {
    const router = useRouter()
    const [chiffre, setChiffre] = useState("")

    useEffect(()=>{
        const x = Math.floor(Math.random()*100)
        setChiffre(x.toString())
    },[])
    return (
        <div style={{marginLeft:"10%", marginRight:"10%"}}>
            <h1>kkkk</h1>
            <Button title="Navigation" style={{backgroundColor:"blue", padding:5, borderRadius:5}} onClick={()=>{router.push({pathname: `/toto/${chiffre}`})}}/>
        </div>
    );
};

export default Index;
