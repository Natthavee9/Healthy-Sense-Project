import React, { useState } from 'react';
import { SquareActivity ,TriangleAlert } from 'lucide-react';
import axios from 'axios';

type PredictionRequest = {
    age: number;
    salt_intake: number;
    stress_score: number;
    bp_history: 'Normal' | 'Prehypertension' | 'Hypertension';
    sleep_duration: number;
    bmi: number;
    medication: 'None' | 'ACE Inhibitor' | 'Beta Blocker' | 'Diuretic' | 'Other';
    family_history: 'Yes' | 'No';
    exercise_level: 'Low' | 'Moderate' | 'High';
    smoking_status: 'Smoker' | 'Non-Smoker';
};

type PredictionResponse = {
    prediction: number;
    label: string;
    probability: number;
};

export default function DemoML() {
    const [formData, setFormData] = useState<PredictionRequest>({
        age: 30,
        salt_intake: 5.0,
        stress_score: 5,
        bp_history: 'Normal',
        sleep_duration: 7.0,
        bmi: 22.0,
        medication: 'None',
        family_history: 'No',
        exercise_level: 'Moderate',
        smoking_status: 'Non-Smoker',
    });

    const [result, setResult] = useState<PredictionResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: e.target.type === 'number' ? parseFloat(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await axios.post<PredictionResponse>(`${import.meta.env.VITE_API_URL}/predict`, formData);
            setResult(response.data);
        } catch (err: any) {
            setError(err.response?.data?.detail || err.message || 'An error occurred. Make sure backend is running.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Hypertension Risk Prediction
                </h1>
                <p className="text-gray-600 text-lg">Enter patient details below to get an AI-powered prediction on hypertension risk.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Age</label>
                                <input type="number" name="age" min="0" max="120" value={formData.age} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">BMI</label>
                                <input type="number" name="bmi" min="10" max="60" step="0.1" value={formData.bmi} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Salt Intake (g)</label>
                                <input type="number" name="salt_intake" min="0" step="0.1" value={formData.salt_intake} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Stress Score (0-10)</label>
                                <input type="number" name="stress_score" min="0" max="10" value={formData.stress_score} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Sleep Duration (hrs)</label>
                                <input type="number" name="sleep_duration" min="0" max="24" step="0.5" value={formData.sleep_duration} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Blood Pressure History</label>
                                <select name="bp_history" value={formData.bp_history} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                    <option value="Normal">Normal</option>
                                    <option value="Prehypertension">Prehypertension</option>
                                    <option value="Hypertension">Hypertension</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Medication</label>
                                <select name="medication" value={formData.medication} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                    <option value="None">None</option>
                                    <option value="ACE Inhibitor">ACE Inhibitor</option>
                                    <option value="Beta Blocker">Beta Blocker</option>
                                    <option value="Diuretic">Diuretic</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Family History</label>
                                <select name="family_history" value={formData.family_history} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Exercise Level</label>
                                <select name="exercise_level" value={formData.exercise_level} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                    <option value="Low">Low</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Smoking Status</label>
                                <select name="smoking_status" value={formData.smoking_status} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                    <option value="Non-Smoker">Non-Smoker</option>
                                    <option value="Smoker">Smoker</option>
                                </select>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center font-medium border border-red-200">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 px-4 rounded-xl text-white font-bold text-lg transition-all duration-300 ${
                                loading
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg'
                            }`}
                        >
                            {loading ? 'Analyzing...' : 'Predict Hypertension Risk'}
                        </button>
                    </form>
                </div>

                <div className="flex flex-col justify-center">
                    {result ? (
                        <div className={`p-8 rounded-2xl shadow-xl border text-center animate-fade-in-up ${
                            result.prediction === 1 ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
                        }`}>
                            <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Prediction Result</h2>
                            <div className={`text-4xl my-4 py-4 px-8 inline-block bg-white rounded-xl shadow-sm font-bold ${
                                result.prediction === 1 ? 'text-red-600' : 'text-green-600'
                            }`}>
                                {result.label}
                            </div>
                            <div className="mt-6 flex justify-center items-center gap-4">
                                <div className="text-gray-500 font-semibold">Model Confidence</div>
                                <div className="w-full bg-gray-200 rounded-full h-4 max-w-[200px]">
                                    <div
                                        className={`h-4 rounded-full ${result.prediction === 1 ? 'bg-red-500' : 'bg-green-500'}`}
                                        style={{ width: `${(result.probability * 100).toFixed(0)}%` }}
                                    ></div>
                                </div>
                                <span className="font-bold text-gray-800">{(result.probability * 100).toFixed(1)}%</span>
                            </div>
                            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-xl flex items-start gap-3">
                                <span className="text-yellow-500 text-xl mt-0.5"><TriangleAlert /></span>
                                <p className="text-sm text-yellow-800">
                                    <span className="font-semibold">คำเตือน:</span> ผลลัพธ์นี้เป็นเพียงการทำนายของ AI เท่านั้น ไม่สามารถใช้แทนการวินิจฉัยทางการแพทย์ได้ กรุณาปรึกษาแพทย์ผู้เชี่ยวชาญเพื่อการวินิจฉัยและการรักษาที่ถูกต้อง
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="p-8 rounded-2xl border-2 border-dashed border-gray-300 text-center text-gray-400 bg-gray-50 h-full flex flex-col items-center justify-center">
                            <span className="text-6xl mb-4"><SquareActivity size={"70px"}/></span>
                            <p className="text-xl font-medium">Results will appear here</p>
                            <p className="text-sm">Fill out the form and submit to see risk predictions.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
