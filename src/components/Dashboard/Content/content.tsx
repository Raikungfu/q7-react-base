import Payment from "./payment";
import Product from "./product";
import './content.scss'


const Content = () => {
    return (
        <div className="flex flex-row w-full">
            <div className="basis-1/2"><Product/></div>
            <div className="basis-1/2"><Payment/></div>
        </div>
    );
}

export default Content;