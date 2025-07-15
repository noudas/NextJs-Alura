import Linki from "../src/components/Link";


export default function HomePage() {
  return (
    <div>
      <h1>Alura Cases - Home</h1>
        <Linki href={'./faq'}>
          FAQ
        </Linki>
    </div>
  );
}