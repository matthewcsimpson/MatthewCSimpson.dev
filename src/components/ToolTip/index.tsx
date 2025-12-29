import "@/components/ToolTip/ToolTip.scss";

interface TooltTipProps {
  title: string;
  text?: string;
  show: boolean;
}

const ToolTip = ({ title, text, show }: TooltTipProps) => {
  return (
    <div className={`tooltip ${show && `tooltip__show`}`}>
      <p className="tooltip__title">{title}</p>
      {text && <p className="tooltip__text">{text}</p>}
    </div>
  );
};

export default ToolTip;
