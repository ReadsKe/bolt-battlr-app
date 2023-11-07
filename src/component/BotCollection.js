
import React from 'react';

const BotCollection = ({ bots, addToBotArmy, dischargeBot }) => {
  return (
    <div className="container mt-3">
      <div className="row">
        {bots.map((bot) => (
          <div key={bot.id} onClick={() => addToBotArmy(bot)} className="col-md-2 mb-3">
            <div className="card">
              <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
              <div className='card-body'>
                <h3 className='card-title'>{bot.name}</h3>
                <p className='card-text'>Code: <br/> {bot.catchphrase}</p>
                <p className='card-text'>Class: {bot.bot_class}</p>
                <p className='card-text'>Armor: {bot.armor}</p>
                <p className='card-text'>Health: {bot.health}</p>
                <p className='card-text'>Damage: {bot.damage}</p>
                <p className='card-text'>Created:<br/>  {bot.created_at}</p>
                <p className='card-text'>Last Updated:<br/> {bot.updated_at}</p>
                <button onClick={() => dischargeBot(bot)} className='btn btn-danger text-center'>X</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;

