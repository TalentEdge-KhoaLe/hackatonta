import { useState } from 'react';
import '../app/responsePage.css';

const response = [
    {
      "title": "Create a modal in Nextjs",
      "instruction": "1. Install 'nextjs-modal' using npm or yarn. \n 2. Import the module in your component. \n 3. Create a state for managing the modal visibility. \n 4. Add a function to handle the opening and closing of the modal. \n 5. Use the 'Modal' element in your component's render method, passing the necessary props such as 'isOpen'. \n 6. Style your modal as desired using CSS or a UI library."
    },
    {
      "title": "Add router in Nextjs",
      "instruction": "1. Install 'next/router' using npm or yarn. \n 2. Import the 'useRouter' hook in your component. \n 3. Inside your component function, call the useRouter hook to get the router object. \n 4. Use router.push() for navigating programmatically, or the 'Link' component for declarative navigation. \n 5. Pass the path of the page you want to navigate to as a string to router.push() or as a 'href' prop to 'Link'."
    }
  ]

const ResponsePage = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < response.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full border border-gray-300">
                <h1 className="text-2xl font-bold mb-4 text-center">{response[currentStep].title}</h1>
                <div className="text-gray-700 mb-6 text-center whitespace-pre-line">{response[currentStep].instruction}</div>
                <div className="flex justify-between">
                    <button 
                        onClick={prevStep} 
                        disabled={currentStep === 0} 
                        className={`px-4 py-2 rounded ${currentStep === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                    >
                        Back
                    </button>
                    <button 
                        onClick={nextStep} 
                        disabled={currentStep === response.length - 1} 
                        className={`px-4 py-2 rounded ${currentStep === response.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResponsePage;