// BotCollection.js
import React, { useState, useEffect } from 'react';
import EnlistedBot from './EnlistedBot';

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    // Fetch the list of bots from the backend
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
  }, []);

  const addToYourBotArmy = (bot) => {
    // Check if the bot is already enlisted
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseFromYourBotArmy = (bot) => {
    // Remove the bot from YourBotArmy
    const updatedEnlistedBots = enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id);
    setEnlistedBots(updatedEnlistedBots);
  };

  const dischargeBot = (botId) => {
    // Delete the bot from the backend
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Remove the bot from YourBotArmy
        const updatedEnlistedBots = enlistedBots.filter((enlistedBot) => enlistedBot.id !== botId);
        setEnlistedBots(updatedEnlistedBots);
      })
  };

  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <EnlistedBot
          key={bot.id}
          bot={bot}
          addToYourBotArmy={addToYourBotArmy}
          releaseFromYourBotArmy={releaseFromYourBotArmy}
          dischargeBot={dischargeBot}
        />
      ))}
    </div>
  );
};

export default BotCollection;
