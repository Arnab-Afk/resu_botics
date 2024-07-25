import axios from 'axios';
import ContentCard from './ContentCard';
import { useState } from 'react';

export default function Card() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [uploaded, setUploaded] = useState(false);
  const [keywords, setKeywords] = useState('');
  const [content, setContent] = useState({});
  const [data , setData] =useState ();
  const [improvement , setImprovement] = useState([]);
  const [overallview , setOverallview] = useState([]);
  const [requirements , setRequirements] = useState([]);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.type !== 'application/pdf') {
      alert('Only PDF files are allowed');
      return;
    }
    setFile(file);
  };

  const handleUpload = (event) => {
    event.preventDefault();
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
        setUploaded(true);
        setUploading(false);
        setImprovement(response.data.improvement)
        setRequirements(response.data.requirements)
        setOverallview(response.data.overallview)
        setData(response.data)
      })
      .catch((error) => {
        console.error(error);
        setUploading(false);
      });
  };
  // setRequirements(content.data.requirements); 
  return (
    <div>
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Drag or Click to Upload your Resume
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
              The resume data is automatically deleted after processing, resulting in no storage of data.
            </p>
            <div className="flex justify-center mt-4">
              <button
                type="button"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={() => document.getElementById('file-input').click()}
              >
                {uploading ? "Uploading" : "Upload resume"}
              </button>
            </div>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4" onSubmit={handleUpload}>
              <label htmlFor="email-address" className="sr-only">
                Job Role applying for?
              </label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Job Role applying for?"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Analyse Resume
              </button>
              <input
                id="file-input"
                type="file"
                hidden
                onChange={handleFileChange}
              />
            </form>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      {uploaded && (
        <ContentCard data={data} />
      )}
    </div>
  );
}
