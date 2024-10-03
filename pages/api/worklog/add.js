if (req.method === 'POST') {
  const { pic, week, date, opportunity, type, account, activity } = req.body;
  
  try {
    const newWorklog = await prisma.worklog.create({
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
    res.status(201).json(newWorklog);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create new work log' });
  }
}
