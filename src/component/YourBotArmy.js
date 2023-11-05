import React from 'react';
import EnlistedBot from './EnlistedBot';

const YourBotArmy = ({ enlistedBots }) => {
    return (
      <div>
        {enlistedBots && enlistedBots.map((bot) => (
          <EnlistedBot key={bot.id} bot={bot} />
        ))}
      </div>
    );
  };
export default YourBotArmy;
