import "../pages/choose-state.css"
import { useNavigate } from "react-router-dom";

const ChooseState = () => {
    const navigate = useNavigate();

    return (
        <div className="page-bg">
            <h1 className="choose-title">Choose Your State</h1>
            
            <div className="horror-scroll-wrapper">
                <div className="horror-scroll-container">
                    
                    <div className="horror-card">
                        <h2 className="state-name">Uttar Pradesh</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/up')}>Select</button>
                    </div>

                    <div className="horror-card">
                        <h2 className="state-name">Punjab</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/punjab')}>Select</button>
                    </div>

                    <div className="horror-card">
                        <h2 className="state-name">Bihar</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/bihar')}>Select</button>
                    </div>

                    <div className="horror-card">
                        <h2 className="state-name">West Bengal</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/west-bengal')}>Select</button>
                    </div>

                    <div className="horror-card">
                        <h2 className="state-name">Odisha</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/odisha')}>Select</button>
                    </div>

                    <div className="horror-card">
                        <h2 className="state-name">Rajasthan</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/rajasthan')}>Select</button>
                    </div>

                     <div className="horror-card">
                        <h2 className="state-name">Madhya Pradesh</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/madhya-pradesh')}>Select</button>
                    </div>

                      <div className="horror-card">
                        <h2 className="state-name">Himachal Pradesh</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/himachal')}>Select</button>
                    </div>

                     <div className="horror-card">
                        <h2 className="state-name">Uttarakhand</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/uttarakhand')}>Select</button>
                    </div>

                     <div className="horror-card">
                        <h2 className="state-name">Karnataka</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/karnataka')}>Select</button>
                    </div>

                     <div className="horror-card">
                        <h2 className="state-name">Kerala</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/kerala')}>Select</button>
                    </div>

                     <div className="horror-card">
                        <h2 className="state-name">Assam</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/assam')}>Select</button>
                    </div>

                     <div className="horror-card">
                        <h2 className="state-name">Arunachal Pradesh</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/arunachal')}>Select</button>
                     </div>

                      <div className="horror-card">
                        <h2 className="state-name">Meghalaya</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/meghalaya')}>Select</button>
                    </div>

                     <div className="horror-card">
                        <h2 className="state-name">Manipur</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/manipur')}>Select</button>
                    </div>
                     <div className="horror-card">
                        <h2 className="state-name">Goa</h2>
                        <button className="select-btn" onClick={() => navigate('/legends/goa')}>Select</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseState;