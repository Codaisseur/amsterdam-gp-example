export const OpenClose = () => {
  const currentHour = new Date().getHours();
  const isOpen = 8 < currentHour && currentHour < 17;
  return (
    <div>
      <p>We are: {isOpen ? <b>Open</b> : <b>Close</b>}</p>
      <p>To make an appointment</p>
      <p>call: 020 555 5555</p>
    </div>
  );
};
