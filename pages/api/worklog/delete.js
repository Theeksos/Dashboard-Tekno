if (req.method === 'DELETE') {
  try {
    const deletedWorklog = await prisma.worklog.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json(deletedWorklog);
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete work log' });
  }
}
