import Linki from "../src/components/Link";

function GlobalStyle(){
  return(
    <style jsx global>
      {`
      body{
        font-family: sans-serif;
      }
      `}
    </style>
  )
}

function Title({children, as}){
  const Tag = as;
  return(
    <>
    <Tag>
      {children}
    </Tag>
    <style jsx>
      {`
      ${Tag} {
      color: red;
          }
      `}
    </style>
    </>

  )
}

export default function HomePage() {
  return (
    <div>
      <GlobalStyle/>
      <Title as="h1">Alura Cases - Home</Title>
        <Linki href={'./faq'}>
          FAQ
        </Linki>
    </div>
  );
}