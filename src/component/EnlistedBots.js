// import React from 'react';

// const EnlistedBots = ({ enlistedBots, releaseBot }) => {
//   return (
//     <div className="enlisted-bots">
//       <div>
//       {enlistedBots.map((bot) => (
//         <div key={bot.id} onClick={() => releaseBot(bot)}>
//           <img src={bot.avatar_url} alt={bot.name} />
//           <p>{bot.name}</p>
//           <p>Code: {bot.catchphrase}</p>  
//           <p>Class: {bot.bot_class}</p>
//           <p>Armor: {bot.armor}</p>  
//           <p>Health: {bot.health}</p>
//           <p>Damage: {bot.damage}</p>
//           <p>created: {bot.created_at}</p>  
//           <p>last updated: {bot.updated_at}</p>
//         </div>
//       ))}
//       </div>

//     </div>
//   );
// };

// export default EnlistedBots;
import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const EnlistedBots = () => {
  const [botArmy, setBotArmy] = useState([]);
  const [bots, setBots] = useState([]); 
  useEffect(()=>{
            fetch("http://localhost:3000/bots")
            .then((res)=>res.json())
            .then((res) =>{
              setBots(res)
            })
            
        }, []);
        console.log(bots)


  const addToBotArmy = (bot) => {
    if (!botArmy.includes(bot)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const removeFromBotArmy = (bot) => {
    const updatedArmy = botArmy.filter((b) => b.id !== bot.id);
    setBotArmy(updatedArmy);
  };

    const dischargeBot = (bot) => {
    // CRUD-DELETE 
    fetch(`http://localhost:3000/bots${bot.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(() => {
      removeFromBotArmy(bot);
    })

  };

  return (
    <div className="enlisted-bots">
      <div id='botarmylist'>
      <YourBotArmy army={botArmy} removeFromBotArmy={removeFromBotArmy} dischargeBot={dischargeBot} />
      </div>
      <div>
      <BotCollection bots={bots} addToBotArmy={addToBotArmy} />
      </div>
    </div>
  );
};

export default EnlistedBots;

