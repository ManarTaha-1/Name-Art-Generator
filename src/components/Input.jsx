export default function Form({NameValue , AgeValue , JobValue , FriendValue  ,MoodValue , onChangeName , onChangeAge ,onChangeJob , onChangeFriend , onChangeMood , onClick}){
    function handleClick(e){
        e.preventDefault();
        onClick();
    }
    return(
        <form className="input">
            <div className="name">
                <input type="text" value={NameValue} onChange={onChangeName} id="Name" />
                <label htmlFor="Name">Your English Name "Pretend you are international😎"</label>
            </div>
            <div className="name">
                <input type="number" value={AgeValue} onChange={onChangeAge} />
                <label htmlFor="Name">How many levels have you completed in life?! 😉</label>
            </div>
            <div className="name">
                <input type="text" value={JobValue} onChange={onChangeJob}  />
                <label htmlFor="Name">Your Job 🤕</label>
            </div>
            <div className="name">
                <input type="text" value={FriendValue} onChange={onChangeFriend}/>
                <label htmlFor="Name">Best Friend's Name 🥰</label>
            </div>
            <div className="name">
                <select id="mood-select" onChange={onChangeMood}>
                    <option value="">--Mood Today 🤗--</option>
                    <option value="happy">Happy</option>
                    <option value="sleepy">Sleepy</option>
                    <option value="hungry">Hungry</option>
                    <option value="thirsty">Thirsty</option>
                    <option value="sparkly">Sparkly</option>
                    <option value="thinker">Overthinker</option>
                </select>
            </div>
            <div className="button">
            <button className="generate" onClick={handleClick}>🎉Generate🎉</button>
            </div>
            {/* <div className="color">
            <input type="radio"/>
            <label htmlFor="">Pink</label>
            <input type="radio"/>
            <label htmlFor="">Purple</label>
            <input type="radio"/>
            <label htmlFor="">Blue</label>
            <input type="radio"/>
            <label htmlFor="">Red</label>
            <input type="radio"/>
            <label htmlFor="">Green</label>
            </div> */}
        </form>
    );
}