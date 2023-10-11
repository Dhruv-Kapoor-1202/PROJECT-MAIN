import { Calendar } from 'antd';
const Cal2 = () => {
  const onPanelChange = (value, mode) => {
    // console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <div className="">
      <Calendar onPanelChange={onPanelChange} />
    </div>
  )
};
export default Cal2;  