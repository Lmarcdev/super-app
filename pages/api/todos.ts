export default function handler(req, res) {
    if(req.method !== 'GET'){
        res.status(405).send('Method Not Allowed');
    }

    if (req.method === 'GET') {
        
    }
}