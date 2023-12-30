import { useEffect, useState } from "react";
import OptionCard from "../../Components/OptionCard";


const Home = () => {
    const [allCard, setAllCard] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setAllCard(data))
    },[])
    return (
        <div className=" mt-5 text-center ">
            <div className="pb-10 bg-[#03ab9c]">

            </div>
            <div className="pb-20 rounded-b-full bg-[#03ab9c]">
                <h1 className="text-3xl font-bold pb-2 border-b-2 border-slate-700 inline-block">আমাদের হবিগঞ্জ </h1>
                
                <h3 className=" my-5">হবিগঞ্জ জেলার প্রয়োযনীয় সব সার্ভিস এবং <br /> লোকেশন পেতে আমাদের এপ এর সাথেই থাকুন 
                </h3>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 container mx-auto">
                {
                    allCard.map(card => <OptionCard key={card.id} card={card}></OptionCard>)
                }
            </div>
        </div>
    );
};

export default Home;