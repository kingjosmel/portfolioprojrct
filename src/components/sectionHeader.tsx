const sectionHeader = ({
    title,
    eyebrow,
    description
}: {
    title: string;
    eyebrow: string;
    description: string; 
}
) => {
    return ( 
        <>
                <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                {title}
            </p>
            </div>

            <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
            {eyebrow}
            </h2>

            <p className="text-center md:text-lg lg:text-xl mx-auto max-w-md text-white/60 mt-4 ">
            {description}
            </p>

        </>
     );
}
 
export default sectionHeader;