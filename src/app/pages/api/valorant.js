// pages/api/valorant.js
export default async function handler(req, res) {
    const apiKey = process.env.RGAPI_KEY; // 從環境變數讀取 API key
    const endpoint = 'https://valorant-api.com/v1/contents'; // 示例 API 端點
  
    try {
      const response = await fetch(endpoint, {
        headers: {
          'X-Riot-Token': apiKey,
        },
      });
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: '取得資料時發生錯誤' });
    }
  }
  