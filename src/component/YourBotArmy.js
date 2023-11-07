import React from 'react';

const YourBotArmy = ({ army, removeFromBotArmy}) => {
  return (
        <div className='container mt-3'>
        <div className="row">
          {army.map((bot) => (
           <div key={bot.id} onClick={() => removeFromBotArmy(bot)} className='col-md-2 mb-3'>
              <div className="card">
                <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
                <div className='card-body'>
                  <h3 className='card-title'>{bot.name}</h3>
                  <p className='card-text'>Code: <br/> {bot.catchphrase}</p>
                  <p className='card-text'>Class: {bot.bot_class}</p>
                  <p className='card-text'>Armor: {bot.armor}</p>
                  <p className='card-text'>Health: {bot.health}</p>
                  <p className='card-text'>Damage: {bot.damage}</p>
                  <p className='card-text'>Created:<br/> {bot.created_at}</p>
                  <p className='card-text'>Last Updated: <br/> {bot.updated_at}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};



export default YourBotArmy;

