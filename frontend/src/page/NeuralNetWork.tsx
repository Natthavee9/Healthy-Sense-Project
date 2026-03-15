export default function NeuralNetwork() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    NeuralNetwork
                </h1>
                
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
                {/* Problem Overview */}
                <section className="card bg-white shadow-lg border border-green-100">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-green-700 flex items-center gap-2">
                            <span className="text-3xl">🎯</span> Problem Overview
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            ######
                        </p>
                    </div>
                </section>


                {/* Preprocessing */}
                <section className="card bg-white shadow-lg border border-green-100">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-green-700 flex items-center gap-2">
                            <span className="text-3xl">⚙️</span> Data Preprocessing
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            {[
                                {
                                    title: "Label Encoding",
                                    desc: "######",
                                    icon: "🏷️",
                                },
                                {
                                    title: "One-Hot Encoding",
                                    desc: "######",
                                    icon: "🔢",
                                },
                                {
                                    title: "Feature Scaling",
                                    desc: "######",
                                    icon: "📐",
                                },
                                {
                                    title: "Train-Test Split",
                                    desc: "######",
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
                                        ######
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
                                        ######
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
                                        ######
                                    </p>
                                    <div className="badge badge-outline badge-warning mt-2">max_depth = 5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Workflow Diagram */}
                <section className="card bg-white shadow-lg border border-green-100">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-green-700 flex items-center gap-2">
                            <span className="text-3xl">🔄</span> Prediction Workflow
                        </h2>
                        <div className="flex flex-col items-center mt-4 space-y-3">
                            {[
                                { label: "######", color: "bg-blue-100 text-blue-800 border-blue-300" },
                                { label: "↓", color: "" },
                                { label: "######", color: "bg-purple-100 text-purple-800 border-purple-300" },
                                { label: "↓", color: "" },
                                { label: "######", color: "bg-amber-100 text-amber-800 border-amber-300" },
                                { label: "↓", color: "" },
                                { label: "######", color: "bg-green-100 text-green-800 border-green-300" },
                                { label: "↓", color: "" },
                                { label: "######", color: "bg-gradient-to-r from-green-200 to-cyan-200 text-green-900 border-green-400 font-bold" },
                            ].map((step, i) =>
                                step.color ? (
                                    <div
                                        key={i}
                                        className={`px-6 py-3 rounded-xl border text-center text-sm sm:text-base w-full max-w-md ${step.color}`}
                                    >
                                        {step.label}
                                    </div>
                                ) : (
                                    <span key={i} className="text-2xl text-gray-400">
                                        {step.label}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
