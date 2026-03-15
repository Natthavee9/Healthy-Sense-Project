export default function MachineLearning() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Machine Learning Model
                </h1>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
                
                <section className="card bg-white shadow-lg border border-green-100">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-green-700 flex items-center gap-2">
                            <span className="text-3xl">🎯</span> Dataset
                        </h2>
                        <span className='indent-3 text-left text-l'>
                            นำมาจาก{" "}
                            <a
                                href="https://www.kaggle.com/code/aryanshah26/hypertension#Model-Dump"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
                            >
                                Hypertension
                            </a>{" "}
                            เป็นชุดข้อมูลผู้ป่วยเกี่ยวกับโรคความดัน ในรูปแบบไฟล์ .csv ประกอบด้วยข้อมูลผู้ป่วยที่สำคัญ เช่น: Age,
                            {" "}Salt_Intake{" "},{" "}Stress_Score{" "},{" "}BMI{" "}เป้าหมายต้องการให้โมเดลทำนาย ว่าบุคคลนั้นมีภาวะความดันโลหิตสูงหรือไม่ 
                        </span>
                       
                    </div>
                </section>



                {/* Preprocessing */}
                <section className="card bg-white shadow-lg border border-green-100">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-green-700 flex items-center gap-2">
                            <span className="text-3xl">⚙️</span> Data Cleaning
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            {[
                                {
                                    title: "Label Encoding",
                                    desc: "Family_History & Smoking_Status → 0/1, Exercise_Level → 0/1/2, BP_History → 0/1/2",
                                    icon: "🏷️",
                                },
                                {
                                    title: "One-Hot Encoding",
                                    desc: "Medication column expanded with drop_first (drops ACE Inhibitor as baseline)",
                                    icon: "🔢",
                                },
                                {
                                    title: "Feature Scaling",
                                    desc: "StandardScaler applied to normalize all features to zero mean and unit variance",
                                    icon: "📐",
                                },
                                {
                                    title: "Train-Test Split",
                                    desc: "80% training / 20% testing with random_state=42 for reproducibility",
                                    icon: "✂️",
                                },
                            ].map((step, i) => (
                                <div
                                    key={i}
                                    className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-cyan-50 border border-green-100"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-2xl">{step.icon}</span>
                                        <h3 className="font-bold text-gray-800">{step.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3 Models */}
                <section className="card bg-white shadow-lg border border-green-100">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-green-700 flex items-center gap-2">
                            <span className="text-3xl">🤖</span> The 3 Models
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                            {/* Logistic Regression */}
                            <div className="card bg-gradient-to-b from-blue-50 to-blue-100 border border-blue-200 shadow-md hover:shadow-xl transition-shadow">
                                <div className="card-body items-center text-center">
                                    <div className="text-5xl mb-2">📈</div>
                                    <h3 className="card-title text-blue-700">Logistic Regression</h3>
                                    <p className="text-sm text-gray-600">
                                        A linear model that estimates the probability of hypertension using the sigmoid function.
                                        Simple, interpretable, and efficient for binary classification.
                                    </p>
                                    <div className="badge badge-outline badge-primary mt-2">Linear Classifier</div>
                                </div>
                            </div>

                            {/* KNN */}
                            <div className="card bg-gradient-to-b from-purple-50 to-purple-100 border border-purple-200 shadow-md hover:shadow-xl transition-shadow">
                                <div className="card-body items-center text-center">
                                    <div className="text-5xl mb-2">📍</div>
                                    <h3 className="card-title text-purple-700">K-Nearest Neighbors</h3>
                                    <p className="text-sm text-gray-600">
                                        Classifies a patient based on the k=5 most similar patients in the training set.
                                        Uses distance metrics to find neighbors.
                                    </p>
                                    <div className="badge badge-outline badge-secondary mt-2">k = 5</div>
                                </div>
                            </div>

                            {/* Decision Tree */}
                            <div className="card bg-gradient-to-b from-amber-50 to-amber-100 border border-amber-200 shadow-md hover:shadow-xl transition-shadow">
                                <div className="card-body items-center text-center">
                                    <div className="text-5xl mb-2">🌳</div>
                                    <h3 className="card-title text-amber-700">Decision Tree</h3>
                                    <p className="text-sm text-gray-600">
                                        Builds a tree of if-else rules from the data features.
                                        Capped at max_depth=5 for generalization and to avoid overfitting.
                                    </p>
                                    <div className="badge badge-outline badge-warning mt-2">max_depth = 5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
