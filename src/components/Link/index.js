import Link from "next/link";

export default function Linki({href, children}){
    return(
        <Link href={href}>
            {children}
        </Link>
    );
}