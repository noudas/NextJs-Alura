// import { useEffect, useState } from 'react';
import Link from '../src/components/Link';

// getServerSideProps - Carrega em tempo de execução, toda vez que uma requisição é feita ele recarrega e é executado no servidor
// export async function getServerSideProps(){
//     const url = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
//     const faq = await fetch(url)
//         .then((response) => {
//             return response.json()
//         })
// }

// getStaticProps - Carrega em tempo de build, é executado no servidor somente uma vez.
export async function getStaticProps(){
    const url = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    
    const faq= await fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data;
        })

    return {
        props:{
            faq
        }
    };
}

export default function FAQPage({ faq }) {
    // const [faq, setFaq] = useState([]);
    // useEffect(() => {
    //     const url = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    //     fetch(url)
    //         .then((response) => {
    //             return response.json()
    //         })
    //         .then((data) => {
    //             setTimeout(()=>{
    //                 setFaq(data);
    //             },3 * 1000)
    //         })
    // })
    return (
        <div>
            <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
            <Link href="/">
                Ir para a home
            </Link>

            <ul>
                {faq.map(({answer, question}) => {
                    return (
                        <li key={question}>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}