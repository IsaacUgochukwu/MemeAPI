import memes from './memes.json';

export default function handler(req, res) {
  // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Sets content to json
  res.setHeader('Content-Type', 'application/json');
  // Returns a 200 HTTP message
  res.status(200).json(memes);
}