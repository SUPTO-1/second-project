const getTime = async()=>{
    const res = await fetch('http://localhost:3000/time',{cache:'no-store'});
    const data = await res.json();
    //console.log(data);
    return data.currentTime;
}
const page = async() => {
    const currentTime = await getTime();
    return (
        <div>
            <h1>This is About Page</h1>
            <h2 className="text-3xl text-stone-600">Time: {currentTime} </h2>
        </div>
    );
};

export default page;