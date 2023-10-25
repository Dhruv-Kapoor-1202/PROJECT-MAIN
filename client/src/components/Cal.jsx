import { Calendar, theme } from 'antd';
const onPanelChange = (value, mode) => {
  // console.log(value.format('YYYY-MM-DD'), mode);
};
const Cal = () => {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    // borderRadius: token.borderRadiusLG,
  };
  return (
    <div style={wrapperStyle} className='box'>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};
export default Cal;
