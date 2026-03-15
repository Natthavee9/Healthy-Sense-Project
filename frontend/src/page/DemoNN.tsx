
import React, { useState } from 'react';
import axios from 'axios';
import cancerImage from '../assets/cancer.jpg';
import cancer2Image from '../assets/cancer2.jpg';
import nvNormalImage from '../assets/nvNormal.jpg';


type SkinCancerResponse = {
    prediction: number;
    label: string;
    probability: number;
    all_probabilities: number[];
};

export default function DemoML() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [result, setResult] = useState<SkinCancerResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
            setResult(null);
            setError(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) return;

        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post<SkinCancerResponse>(`${import.meta.env.VITE_API_URL}/predict/skin-cancer`, formData);
            setResult(response.data);
        } catch (err: any) {
            setError(err.response?.data?.detail || err.message || 'An error occurred during prediction');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Skin Cancer Prediction
                </h1>
                <p className="text-gray-600">Upload an image of a skin lesion for an AI prediction.</p>
            </div>
           
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-green-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col items-center justify-center w-full">
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-green-300 border-dashed rounded-xl cursor-pointer bg-green-50 hover:bg-green-100 transition duration-300"
                        >
                            {preview ? (
                                <img src={preview} alt="Preview" className="h-full object-contain p-2 rounded-xl" />
                            ) : (
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg
                                        className="w-10 h-10 mb-3 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        ></path>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500">PNG, JPG or JPEG (5MB)</p>
                                </div>
                            )}
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>
                    
                    {/* sample image */}
                    <div className="w-full mt-6">
                        <p className="text-sm font-semibold text-gray-600 mb-3 text-center">Or use these sample images:</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            {[
                                { src: cancerImage, name: 'cancer.jpg' },
                                { src: cancer2Image, name: 'cancer2.jpg' },
                                { src: nvNormalImage, name: 'nvNormal.jpg' }
                            ].map((sample) => (
                                <button
                                    key={sample.name}
                                    type="button"
                                    onClick={async () => {
                                        try {
                                            setLoading(true);
                                            const response = await axios.get(sample.src, { responseType: 'blob' });
                                            const blob = response.data;
                                            const fileObj = new File([blob], sample.name, { type: blob.type });
                                            setFile(fileObj);
                                            setPreview(sample.src);
                                            setResult(null);
                                            setError(null);
                                        } catch (err) {
                                            setError(`Failed to load ${sample.name}.`);
                                        } finally {
                                            setLoading(false);
                                        }
                                    }}
                                    className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-transparent hover:border-green-500 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 group shrink-0"
                                >
                                    <img src={sample.src} alt={sample.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                    <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-xs py-1.5 text-center font-medium">
                                        {sample.name}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center font-medium border border-red-200">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={!file || loading}
                        className={`w-full py-3 px-4 rounded-xl text-white font-bold text-lg transition-all duration-300 ${
                            !file || loading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 shadow-md hover:shadow-xl'
                        }`}
                    >
                        {loading ? 'Analyzing...' : 'Predict Skin Cancer'}
                    </button>
                </form>

                {result && (
                    <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-cyan-50 rounded-xl border border-green-200 text-center animate-fade-in-up">
                        <h2 className="text-2xl font-extrabold text-gray-800 mb-2">Prediction Result</h2>
                        <div className="text-4xl my-4 py-2 px-6 inline-block bg-white rounded-lg shadow-sm font-bold text-green-700">
                            {result.label}
                        </div>
                        <p className="text-gray-600 text-lg">
                            Confidence:{' '}
                            <span className="font-semibold text-gray-900">
                                {(result.probability * 100).toFixed(2)}%
                            </span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}