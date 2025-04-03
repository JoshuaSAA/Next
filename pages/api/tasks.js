export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json([
        { id: 1, text: "Tarea desde API", completed: false },
      ]);
    } else {
      res.status(405).end(); // Método no permitido
    }
  }