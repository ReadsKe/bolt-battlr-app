import React from 'react';

const EnlistedBot = ({ bot, addToYourBotArmy, releaseFromYourBotArmy, dischargeBot }) => {
  return (
    <div className="enlisted-bot" >

        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>catchphrase: {bot.catchphrase}</p>  
        <p>bot_class: {bot.bot_class}</p>  
        <p>Class: {bot.bot_class}</p>
        <p>Armor: {bot.armor}</p>  
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>created_at: {bot.created_at}</p>  
        <p>updated_at: {bot.updated_at}</p>  
        <button onClick={() => addToYourBotArmy(bot)}>Add to Your Bot Army</button>
        <button onClick={() => releaseFromYourBotArmy(bot)}>Release from Your Bot Army</button>
        <button onClick={() => dischargeBot(bot.id)} className="discharge-button">
        Discharge Forever
      </button>
    </div>
  );
};

export default EnlistedBot;
