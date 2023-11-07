// import React from 'react';

// const YourBotArmy = ({ enlistedBots, dischargeBot }) => {
//   return (
//     <div className="your-bot-army">
//       {enlistedBots.map((bot) => (
//         <div key={bot.id} onClick={() => dischargeBot(bot)}>
//           <img src={bot.avatar_url} alt={bot.name} />
//           <p>{bot.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YourBotArmy;
import React from 'react';

const YourBotArmy = ({ army, removeFromBotArmy}) => {
  return (

    // <div className="your-bot-army">
    //   <div>
    //   {army.map((bot) => (
    //     <div key={bot.id} onClick={() => removeFromBotArmy(bot)}>
    //       <img src={bot.avatar_url} alt={bot.name} />
    //       <p>{bot.name}</p>
    //       <p>Code: {bot.catchphrase}</p>  
    //       <p>Class: {bot.bot_class}</p>
    //       <p>Armor: {bot.armor}</p>  
    //       <p>Health: {bot.health}</p>
    //       <p>Damage: {bot.damage}</p>
    //       <p>created: {bot.created_at}</p>  
    //       <p>last updated: {bot.updated_at}</p>
    //     </div>
    //   ))}
    //   </div>

    // </div>
        <div className='container mt-3'>
        <div className="row">
          {army.map((bot) => (
           <div key={bot.id} onClick={() => removeFromBotArmy(bot)} className='col-md-3 mb-3'>
              <div className="card">
                <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
                <div className='card-body'>
                  <h3 className='card-title'>{bot.name}</h3>
                  <p className='card-text'>Code: {bot.catchphrase}</p>
                  <p className='card-text'>Class: {bot.bot_class}</p>
                  <p className='card-text'>Armor: {bot.armor}</p>
                  <p className='card-text'>Health: {bot.health}</p>
                  <p className='card-text'>Damage: {bot.damage}</p>
                  <p className='card-text'>Created: {bot.created_at}</p>
                  <p className='card-text'>Last Updated: {bot.updated_at}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};



export default YourBotArmy;

