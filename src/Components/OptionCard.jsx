import { BiSolidDonateBlood } from "react-icons/bi";

const OptionCard = ({card}) => {
    return (
        <div className="">
            <div className="text-center bg-[#03ab9c] pt-2 rounded-lg">
                <div className="mx-1 bg-white rounded-lg">
                    <div className="flex justify-center items-center text-red-500 text-2xl">
                        <BiSolidDonateBlood className="my-2"/>
                    </div>
                    <p className=" pb-2 text-sm">{card.name}</p>
                </div>
            </div>
        </div>
    );
};

export default OptionCard;