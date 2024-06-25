// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import axios from 'axios';
// import './App.css';

// const VehiclePolicyDetails: React.FC = () => {
//     const [question, setQuestion] = useState<string>('');
//     const [response, setResponse] = useState<string>('');

//     const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//         setQuestion(event.target.value);
//     };

//     const fetchPolicyDetails = async () => {
//         //const url = `/api/getPolicyDetails`; 
//         try {
//             const res = await axios.get(`/api/getPolicyDetails?question=${question}` );
//             setResponse(JSON.stringify(res.data.answer, null, 2));
//         } catch (error) {
//             console.error('Error fetching policy details:', error);
//             setResponse('Error fetching policy details');
//         }
//     };

//     const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         setResponse(''); // Clear previous response
//         fetchPolicyDetails();
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <textarea
//                     value={question}
//                     onChange={handleInputChange}
//                     placeholder="Ask your question here..."
//                     rows={4}
//                     cols={50}
//                 />
//                 <br />
//                 <button type="submit" className="blue-button">Submit</button>
//             </form>
//             {response && (
//                 <div>
//                     <h3>Response:</h3>
//                     <div>{response}</div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default VehiclePolicyDetails;
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './App.css';

const VehiclePolicyDetails: React.FC = () => {
    const [question, setQuestion] = useState<string>('');
    const [response, setResponse] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setQuestion(event.target.value);
    };

    const fetchPolicyDetails = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`/api/getPolicyDetails?question=${question}`);
            setResponse(JSON.stringify(res.data.answer, null, 2));
        } catch (error) {
            console.error('Error fetching policy details:', error);
            setResponse('Error fetching policy details');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResponse(''); // Clear previous response
        fetchPolicyDetails();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={question}
                    onChange={handleInputChange}
                    placeholder="Ask your question here..."
                    rows={4}
                    cols={50}
                />
                <br />
                <button type="submit" className="blue-button mb-4">Submit</button>
            </form>
            {isLoading && <div>Loading...</div>}
            {!isLoading && response && (
                <div>
                    <h3>Answer:</h3>
                    <div >{response}</div>
                </div>
            )}
        </div>
    );
};

export default VehiclePolicyDetails;

