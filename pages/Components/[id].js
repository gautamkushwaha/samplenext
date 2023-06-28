export const getStaticPaths = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    const paths = data.map(gautam=>{
        return{
            params:{ id: gautam.id.toString()}
        }
    })
return{
    paths, 
    fallback: false
}}

export const getStaticProps = async(context)=>{
    const id = context.params.id;
    const res= await fetch("https://jsonplaceholder.typicode.com/users/" + id)
    const  data = await res.json();

    return{
        props:{gautam: data}
    }
}

const Details = ({gautam}) => {
    return ( 
        <div>
            <h1>{gautam.name}</h1>
            <p>{gautam.email}</p>
            <p>{gautam.website}</p>
            <p>{gautam.address.city}</p>
        </div>
     );
}
 
export default Details;
