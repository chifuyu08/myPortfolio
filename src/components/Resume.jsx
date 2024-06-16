const Resume=()=> {
    // Function to handle the download
    const handleDownload = () => {
      // Redirect the user to the Google Drive link
      window.location.href = 'https://drive.google.com/uc?export=download&id=142ZJ_IrhpmCCk7t6wQWvZbLlLNMWosnj';
    };
  
    return (
      <div onClick={handleDownload} className="resume">Download CV</div>
    );
  }
  
  export default Resume;
  