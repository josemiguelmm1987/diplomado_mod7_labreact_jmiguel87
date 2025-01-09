const OpenLink = ({ redirectUrl, logoImage }) => {
  return (
    <span>
      <a href={redirectUrl} target="_blank">
        <img src={logoImage} className="logo" alt="logo" />
      </a>
    </span>
  );
};

export default OpenLink;
