const formatDate = (serverDate: string): string => {
  const date = new Date(serverDate);
  return date.toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
};

export default formatDate;
