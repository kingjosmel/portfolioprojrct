const TechIcon = ({componet} : {componet: React.ElementType}) => {
    const Componet = componet
    return ( 
        <div>
            <Componet className='size-10' />
        </div>
     );
}
 
export default TechIcon;