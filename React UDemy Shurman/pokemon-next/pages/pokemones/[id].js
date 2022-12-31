import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

// para agregar imagenes y recursos desde afuera de next se configura en enxt config

const Pokemon = ({ data }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <p>...Cargando</p>
    }

    return(
        <div>
            <p>{data.name} numero #{data.id}</p>
            <Image src={data.sprites.front_default} width={400} height={400}/>
            <Link href='/'> Volver al inicio</Link>
        </div>
    ) 
}


// export const getServerSideProps = async ({ params }) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
//     const data = await response.json()

//     return { props: { data }}
// }

export const getStaticProps = async ({ params }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json()

    return { props: { data }}
}

export const getStaticPaths = async (props) => {
    const paths = [
        { params: {id : '1'} },
        { params: {id : '2'} },
    ]
    return {
        paths,
        fallback: true, // con true renderiza la pagina de manera lazy no encontrandose nada dentro de data
    }
}

//  con fallback: false se usa para cuando todas las rutas que se conocen ya se sabe cual se va a re renderizar

// cuando se quiera entregar el feedback al usuario se cambia fallback por true y se crea lo necesario

// y si se quiere blockear la interaccion y devolverle el valor al usuario de una vez se usa blocking

//para instalar styled-components correctamente en next ademas del comando
//  se le instala la dependecia y pluggin para controlarlo con el comando npm i -D babel-plugin-styled-components

export default Pokemon

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