import { useState, useEffect } from 'react';
import axios from 'axios';
import Content from './content';
import BackButton from '@/components/backButton';

function AnalyserApp() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [uploaded, setUploaded] = useState(false);
  const [keywords, setKeywords] = useState(''); // new state for keywords
  const [content, setContent] = useState({}); // new state for content
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.type !== 'application/pdf') {
      alert('Only PDF files are allowed');
      return;
    }
    setFile(file);
  };

  const handleUpload = () => {
    if (!file) {
      alert('Please select a file first');
      return;
    }
    setUploading(true);
    const formData = new FormData();
    formData.append('pdf_file', file);
    axios.post(`https://resume-screening-chr8.onrender.com/upload_pdf?keywords=${keywords}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log(response);
        setContent(response.data);
        setResponseData(response.data);
        console.log(typeof(response.data));
        console.log(content);
        setUploaded(true);
        setUploading(false);
      })
      .catch((error) => {
        console.error(error);
        setUploading(false);
      });
  };
  const requirements = responseData.requirements;

  return (
    <>
    <Hero/>
    <BackButton/>
      <div className='p-4 mt-20'>
        <button
          type="button"
          className="relative block w-full bg-black rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={handleUpload}
        >
          <img src="/analyzerHand.jpg" alt="Upload" className="inline-block h-40 w-40" />
          <span className="mt-2 block text-3xl font-semibold text-[#06D001] font-vt323 ">
            {uploading ? 'Uploading...' : 'Upload Resume'}
          </span>
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
            accept="application/pdf"
          />
        </button>
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Enter Job Role"
          className="mt-4 p-2 pl-5 bg-black text-[#06D001] font-vt323 text-2xl rounded-lg"
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
          onClick={handleUpload}
        >
          Upload
        </button>
        {uploading && (
          <p className="text-sm font-semibold text-gray-900">
            Uploading...
          </p>
        )}
        {uploaded && (
          <p className="text-sm font-semibold text-gray-900">
            Parsed.. 
            <Content data={requirements} />
          </p>
        
                    
        )}
        
      </div>
    </>
  );
}

export default AnalyserApp;