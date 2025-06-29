const formatTimeStampForDate = (timeStamp) => {
  const date = new Date(timeStamp);

  const formattedDay = String(date.getDate()).padStart(2, "0");
  const formattedMonth = String(date.getMonth() + 1).padStart(2, "0");
  const formattedYear = date.getFullYear();

  return `${formattedDay}-${formattedMonth}-${formattedYear}`;
};

const formatTimeStampForTime = (timeStamp) => {
  const date = new Date(timeStamp);

  const formattedHours = String(date.getHours()).padStart(2, "0");
  const formattedMinutes = String(date.getMinutes()).padStart(2, "0");
  const formattedSeconds = String(date.getSeconds()).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export { formatTimeStampForDate, formatTimeStampForTime };
