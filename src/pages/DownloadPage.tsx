import React, { useState } from 'react';

const DownloadPage = () => {
  const [ftpStatus, setFtpStatus] = useState<string>("");

  const handleFtpConnect = async () => {
    const status = await window.electron.connectFtp();
    setFtpStatus(status);
  };

  return (
    <div className="download-page">
      <h1>Download Page</h1>
      <button onClick={handleFtpConnect}>Connect to FTP</button>
      {ftpStatus && <p>Status: {ftpStatus}</p>}
    </div>
  );
};

export default DownloadPage;
