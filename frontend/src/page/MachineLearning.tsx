import { 
    BrushCleaning, FileSpreadsheet, 
    Tags ,Binary, 
    Scaling, ScissorsLineDashed, 
    BrainCircuit, ChartLine,
    ChartScatter, Trees,
    Workflow
} from 'lucide-react';
export default function MachineLearning() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Machine Learning Model
                </h1>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
                
                <section className="card bg-white shadow-lg border border-blue-100">
                    <div className="card-body">
                        <h2 className="card-title text-3xl text-blue-700 flex items-center gap-2">
                            <span className="text-3xl"><FileSpreadsheet size={"35px"}/></span> Dataset
                        </h2>
                        <span className='indent-3 text-left text-xl'>
                            นำมาจาก{" "}
                            <a
                                href="https://www.kaggle.com/datasets/miadul/hypertension-risk-prediction-dataset"
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
                <section className="card bg-white shadow-lg border border-blue-100">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-blue-700 flex items-center gap-2">
                            <span className="text-3xl"><BrushCleaning size={"35px"} /></span> Data Cleaning
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 text-left text-xl">
                            {[
                                {
                                    title: "Label Encoding",
                                    desc: (
                                        <>
                                            แปลงข้อมูลตัวอักษรให้เป็นตัวเลขเพื่อให้โมเดลสามารถคำนวณได้<br />
                                            • แปลงค่า Yes/No, Smoker/Non-Smoker, Family_History เป็น 1 กับ 0<br />
                                            • แปลง Exercise_Level เป็นตัวเลข 3 ระดับ คือ Low = 0, <br />Moderate = 1, High = 2<br />
                                            • แปลง BP_History เป็นตัวเลข 3 ระดับ คือ Normal = 0, Prehypertension = 1, Hypertension = 2
                                        </>
                                            ),
                                    icon: <Tags  />, 
                                },
                                {
                                    title: "One-Hot Encoding",
                                    desc: (
                                        <>
                                            ใช้ฟังก์ชัน pd.get_dummies กับคอลัมน์ Medication เพื่อแตกหมวดหมู่ยาออกเป็นคอลัมน์ใหม่ย่อยๆ 
                                            โดยตั้งค่า drop_first=True  เพื่อลบข้อมูลตั้งต้นออกป้องกันปัญหาความซ้ำซ้อนของตัวแปร 
                                        </>
                                    ),
                                    icon: <Binary  />,
                                },
                                {
                                    title: "Feature Scaling",
                                    desc: (                                           
                                            <>
                                            ใช้ StandardScaler ในการปรับขนาดของข้อมูลทุกคอลัมน์<br/>
                                            ให้มีค่าเฉลี่ยเป็น 0  
                                            และความแปรปรวนเป็น 1 
                                            </>                
                                    ),
                                    icon: <Scaling  />,
                                },
                                {
                                    title: "Train-Test Split",
                                    desc: (
                                        <>
                                            ทำการแยกข้อมูล Hypertension ออกมา และแบ่งข้อมูลเป็น 2 ส่วน คือ ข้อมูลสำหรับ Train 80% 
                                            และข้อมูลสำหรับ Test 20% 
                                            โดยกำหนดค่า random_state=42 เพื่อให้การสุ่มแบ่งข้อมูลได้ผลเหมือนเดิมทุกครั้ง
                                        </>
                                    ), 
                                    icon: <ScissorsLineDashed  />,
                                },
                            ].map((step, i) => (
                                <div
                                    key={i}
                                    className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100"
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
                <section className="card bg-white shadow-lg border border-blue-100">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-blue-700 flex items-center gap-2">
                            <span className="text-3xl"><BrainCircuit size={"35px"} /></span> The 3 Models
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                            {/* Logistic Regression */}
                            <div className="card bg-gradient-to-b from-blue-50 to-blue-100 border border-blue-200 shadow-md hover:shadow-xl transition-shadow">
                                <div className="card-body items-center text-center">
                                    <div className="text-5xl mb-2"><ChartLine  size={"50px"}/></div>
                                    <h3 className="card-title text-blue-700">Logistic Regression</h3>
                                    <p className="text-md text-gray-600">
                                        Logistic Regression มีจุดประสงค์เพื่อใช้เป็นโมเดลพื้นฐาน ในการจำแนกประเภทข้อมูลแบบสองคลาส
                                        เรียกใช้ฟังก์ชัน LogisticRegressionโมเดลนี้จะทำงานโดยอาศัยสมการเชิงเส้นและฟังก์ชัน Sigmoid 
                                        เพื่อคำนวณหาค่าความน่าจะเป็นที่ผู้ป่วยที่จะมีภาวะความดันโลหิตสูง
                                    </p>
                                    <div className="badge badge-outline badge-primary mt-2">Linear Classifier</div>
                                </div>
                            </div>

                            {/* KNN */}
                            <div className="card bg-gradient-to-b from-purple-50 to-purple-100 border border-purple-200 shadow-md hover:shadow-xl transition-shadow">
                                <div className="card-body items-center text-center">
                                    <div className="text-5xl mb-2"><ChartScatter size={"50px"} /></div>
                                    <h3 className="card-title text-purple-700">K-Nearest Neighbors</h3>
                                    <p className="text-md text-gray-600">
                                        จำแนกคลาสของข้อมูลโดยอาศัยการเปรียบเทียบความคล้ายคลึงของฟีเจอร์ต่างๆ ในการตั้งค่าโมเดล 
                                        ได้กำหนดค่าพารามิเตอร์ n_neighbors=5 เมื่อมีข้อมูลผู้ป่วยรายเข้ามา ระบบจะทำการวัดระยะห่าง  
                                        เพื่อค้นหาข้อมูลผู้ป่วยในชุดข้อมูล Training Set ที่มีลักษณะสุขภาพใกล้เคียงที่สุดจำนวน 5 ลำดับแรก 
                                        จากนั้นจะทำการโหวตเลือกคลาสจากเพื่อนบ้านทั้ง 5 จุด เพื่อตัดสินใจว่าผู้ป่วยมีความเสี่ยงหรือไม่
                                    </p>
                                    <div className="badge badge-outline badge-secondary mt-2">k = 5</div>
                                </div>
                            </div>

                            {/* Decision Tree */}
                            <div className="card bg-gradient-to-b from-amber-50 to-amber-100 border border-amber-200 shadow-md hover:shadow-xl transition-shadow">
                                <div className="card-body items-center text-center">
                                    <div className="text-5xl mb-2"><Trees size={"35px"} /></div>
                                    <h3 className="card-title text-amber-700">Decision Tree</h3>
                                    <p className="text-md text-gray-600">
                                        ทำงานโดยการสร้างกฎเงื่อนไขการตัดสินใจ If-Else  โดยแตกกิ่งก้านตามความสำคัญของตัวแปร
                                        โดยจำกัดความลึกสูงสุดของต้นไม้ตัดสินใจไม่ให้เกิน 5 ระดับ เพื่อป้องกันปัญหา Overfitting

                                    </p>
                                    <div className="badge badge-outline badge-warning mt-2">max_depth = 5</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {/* Enemble */}
                    <p className="text-md text-black  text-left indent-6">
                        Ensemble Learning ผ่านคลาส VotingClassifier โดยนำโมเดลทั้ง 3 รูปแบบ Logistic Regression, KNN, Decision Tree มาทำงานร่วมกัน
                        จะโดยตัดสินใจผลลัพธ์ด้วยหลักการ Soft Voting เป็นการนำค่าความน่าจะเป็นจากทุกโมเดลมาหาค่าเฉลี่ย แทนการโหวตด้วยเสียงข้างมาก
                    </p>
                </section>

                {/* Workflow Diagram */}
                <section className="card bg-white shadow-lg border border-blue-100">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-blue-700 flex items-center gap-2">
                            <span className="text-3xl"><Workflow size={"35px"} /></span>Workflow
                        </h2>
                        <div className="flex flex-col items-center mt-4 space-y-3">
                            {[
                                {
                                    label: (
                                        <p className='text-left'>
                                            นำ dataset มาจัดการกับค่าว่างจากนั้นทำการแปลงข้อมูลตัวอักษรให้เป็นตัวเลขทั้งหมด
                                            แปลงข้อมูลเชิงกลุ่มที่มีลำดับหรือมี 2 ตัวเลือก  <br />
                                            • แปลง Yes/No และ Smoker/Non-Smoker เป็น 1 และ 0<br />
                                            • ใช้คำสั่ง pd.get_dummies กับคอลัมน์ Medication เพื่อแตกหมวดหมู่ของยาออกเป็นคอลัมน์ย่อยๆ
                                        </p> 
                                    ), 
                                    color: "bg-blue-100 text-blue-800 border-blue-300" },
                                { label: "↓", color: "" },
                                
                                { 
                                    label: (
                                        <p className='text-left'>
                                            ทำการแยกข้อมูลที่ต้องการทำนายคือคอลัมน์ Has_Hypertension ออกจากฟีเจอร์อื่นๆและ
                                            ใช้ฟังก์ชัน train_test_split แบ่งข้อมูลออกเป็น 2 ส่วน คือ ชุดข้อมูล Training Set 80% 
                                            และชุดข้อมูล Testing Set 20%
                                        </p>
                                    ), 
                                    color: "bg-purple-100 text-purple-800 border-purple-300" },
                                { label: "↓", color: "" },
                                
                                { 
                                    label: (
                                        <p className='text-left'>
                                            ใช้ฟังก์ชัน StandardScaler ในการปรับขนาดข้อมูลของทุกคอลัมน์ให้อยู่ในสเกลเดียวกัน
                                        </p>
                                    ), 
                                    color: "bg-amber-100 text-amber-800 border-amber-300" },
                                { label: "↓", color: "" },
                                
                                { 
                                    label: (
                                        <p className='text-left'>
                                            สร้างโมเดลพื้นฐาน 3 รูปแบบ ได้แก่ Logistic Regression, K-Nearest Neighbors (k=5) และ Decision Tree (max_depth=5)
                                            หลังจากนั้นนำโมเดลทั้ง 3 มารวมกันเป็น Ensemble Model ผ่านวิธีการ VotingClassifier โดยตั้งค่าการโหวตเป็นแบบ soft เพื่อหาค่าเฉลี่ยความน่าจะเป็นจากทุกโมเดล
                                        </p>
                                    ), 
                                    color: "bg-green-100 text-green-800 border-green-300" },
                                { label: "↓", color: "" },
                                
                                { 
                                    label: (
                                        <p className='text-left'>
                                            บันทึกโมเดลที่ผ่านการเทรนแล้วออกเป็นไฟล์ .pkl รวมถึงไฟล์ปรับสเกลข้อมูลควบคู่ไปด้วยเพราะ
                                            ตัว Scaler จะทำหน้าที่เป็นตัวแปลงข้อมูลดิบ เช่น อายุหรือค่า BMI ให้อยู่ในสัดส่วนมาตรฐานเดียวกับตอนที่โมเดลเรียนรู้
                                            เนื่องจาก ไฟล์ Modelผ่านการแปลงสเกลจากตัว Scaler เรียบร้อยแล้ว โมเดลก็จะสามารถทำความเข้าใจ 
                                            นำไปเข้าสมการคณิตศาสตร์ และทำนายผลลัพธ์สูงออกมา
                                        </p>
                                    ), 
                                    color: "bg-gradient-to-r from-green-200 to-cyan-200 text-green-900 border-green-400 font-bold" },
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
