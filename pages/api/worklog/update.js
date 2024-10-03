import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { pic, week, date, opportunity, type, account, activity } = req.body;
    
    try {
      const updatedWorklog = await prisma.worklog.update({
        where: { id: parseInt(id) },
        data: {
          pic,
          week: parseInt(week),
          date: new Date(date),
          opportunity,
          type,
          account,
          activity,
        },
      });
      res.status(200).json(updatedWorklog);
    } catch (error) {
      res.status(400).json({ error: 'Failed to update work log' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
