import './input.scss'
import StateSelection from './StateComponent.tsx'

const input = () => {
    return (
        <div className="input-group flex flex-row">
            <div className='basis-1/5 min-w-[200px]'>
                <StateSelection/>
            </div>
            <div className="relative w-full basis-4/5" style={{height: "3.438rem"}}>
                <span className="separator"></span>
                <i className='input-search bi bi-search'></i>
                <input className="w-full h-full backdrop-opacity-10 backdrop-invert bg-white/30"
                placeholder="What do you want eat today" />
            </div>
        </div>  
    );
};

export default input;