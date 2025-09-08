// npm install express axios dotenv cors
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/ask', async (req,res)=>{
  const question = req.body.question;
  if(!question) return res.status(400).json({error:'No question provided'});

  try{
    const response = await axios.post('https://api.openai.com/v1/chat/completions',{
      model:'gpt-4',
      messages:[{role:'user', content:question}],
    },{
      headers:{
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    const answer = response.data.choices[0].message.content;
    res.json({answer});
  }catch(err){
    console.error(err);
    res.status(500).json({error:'Failed to get response from AI'});
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
