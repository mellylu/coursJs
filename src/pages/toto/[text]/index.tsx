import TitlePage from '@/components/titlepage';
import Success from '@/components/success';
import { NextPageContext } from 'next';
import React from 'react';

const Index = (props:any) => {
    console.log(props)
    return (
        <div style={{marginLeft:"10%", marginRight:"10%"}}>
            <TitlePage title="Infos"/>
            <Success title={props.data.text} />
        </div>
    );
};

export default Index;

export async function getServerSideProps(context: NextPageContext) { //va récupérer toutes les infos de la page
    // Fetch data from external API
    const data = context.query //va chercher dans l'url
    // const res = await fetch(`https://.../data`)
    // const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data } }
  }