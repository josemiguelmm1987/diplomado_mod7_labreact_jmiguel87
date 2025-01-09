const OpenLink = ({ redirectUrl, logoImage }) => {
  return (
    <div>
      <a href={redirectUrl} target="_blank">
        <img src={logoImage} className="logo" alt="logo" />
      </a>
    </div>
  );
};

export default OpenLink;
