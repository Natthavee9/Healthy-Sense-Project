import {
    FileSpreadsheet, BrainCircuit,
    ScanSearch, SlidersHorizontal,
    Minimize2, Unplug,
    TextAlignJustify, Workflow
} from 'lucide-react';
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
                            <span className="text-3xl"><FileSpreadsheet size={"35px"} /></span> Dataset
                        </h2>
                        <span className='indent-3 text-left text-xl'>
                            นำมาจาก{" "}
                            <a
                                href="https://www.kaggle.com/datasets/kmader/skin-cancer-mnist-ham10000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
                            >
                                skin-cancer-mnist-ham10000
                            </a>{" "}
                            ชุดข้อมูลไฟล์รูปภาพรอยโรคผิวหนังจำนวน 20,030 รูป และตารางรายละเอียดข้อมูลผู้ป่วยจำนวน 10,015 เคส
                            ข้อมูลถูกจัดกลุ่มออกเป็นโรคผิวหนังและมะเร็งผิวหนัง 7 ประเภท ได้แก่ nv, mel, bkl, bcc, akiec, vasc และ df
                        </span>
                    </div>
                </section>


                {/* Algorithm Theory */}
                <section className="card bg-white shadow-lg border border-green-100">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-green-700 flex items-center gap-2">
                            <span className="text-3xl"><BrainCircuit size={"35px"} /></span> Algorithm Theory
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 text-left text-xl">
                            {[
                                {
                                    title: "Conv2D",
                                    desc: (
                                        <>
                                            เลเยอร์คอนโวลูชัน ทำหน้าที่ใช้ฟิลเตอร์สแกนรูปภาพเพื่อดึงลักษณะเด่น
                                            เช่น เส้นขอบ พื้นผิว หรือสีของรอยโรค
                                        </>
                                    ),
                                    icon: <ScanSearch />,
                                },
                                {
                                    title: "BatchNormalization",
                                    desc: (
                                        <>
                                            เลเยอร์ปรับสมดุล ทำหน้าที่ปรับสเกลข้อมูลระหว่างการส่งผ่านแต่ละเลเยอร์ให้มีความเสถียร 
                                            รวดเร็วและมีประสิทธิภาพขึ้น
                                        </>
                                        
                                    ),
                                    icon: <SlidersHorizontal />,
                                },
                                {
                                    title: "MaxPooling2D",
                                    desc: (
                                        <>
                                            เลเยอร์ลดขนาดมิติลดขนาดของรูปภาพโดยคงไว้เฉพาะข้อมูลที่มีน้ำหนักความสำคัญ
                                            เพื่อลดปริมาณข้อมูล
                                        </>
                                    ),
                                    icon: <Minimize2 />,
                                },
                                {
                                    title: "Dropout",
                                    desc: (
                                        <>
                                            เลเยอร์ป้องกันการจำ ทำการสุ่มตัดการเชื่อมต่อของโหนดออกบางส่วนระหว่างการ train
                                            เพื่อลดปัญหา{" "}Overfitting
                                        </>
                                    ),
                                    icon: <Unplug />,
                                },
                                {
                                    title: "Flatten",
                                    desc: (
                                        <>
                                            เลเยอร์ตัดสินใจจะคลี่ข้อมูลภาพที่ผ่านการกรองลักษณะแล้วให้กลายเป็นเวกเตอร์ 1 มิติ และส่งต่อไปยังชั้น Dense
                                            เพื่อทำการคำนวณความน่าจะเป็นและจำแนกประเภทของโรคผิวหนังออกมา
                                        </>
                                    ),
                                    icon: <TextAlignJustify />,
                                },

                                
                                
                                
                            ].map((step, i, arr) => (
                                <div
                                    key={i}
                                    className={`p-4 rounded-xl bg-gradient-to-br from-green-50 to-cyan-50 border border-green-100 ${i === arr.length - 1 && arr.length % 2 !== 0 ? 'md:col-span-2 mx-auto w-full max-w-sm' : ''}`}
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

                


                {/* Workflow Diagram */}
                <section className="card bg-white shadow-lg border border-green-100">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-green-700 flex items-center gap-2">
                            <span className="text-3xl"><Workflow size={"35px"} /></span> Workflow
                        </h2>
                        <div className="flex flex-col items-center mt-4 space-y-3">
                            {[
                                { label: (
                                    <p className='text-left'>
                                        ดาวน์โหลดชุดข้อมูลจาก KaggleHub เปิดอ่านไฟล์ตารางเพื่อตรวจสอบจำนวนภาพและ
                                        สำรวจสัดส่วนของปริมาณผู้ป่วยในแต่ละคลาสของโรค
                                    </p>
                                    
                                ), 
                                color: "bg-blue-100 text-blue-800 border-blue-300" },
                                
                                { label: "↓", color: "" },
                                
                                { label: (
                                    <p className='text-left'>
                                        นำรูปภาพมาผ่านกระบวนการปรับขนาดเป็น 32x32 พิกเซล จัดการรูปแบบข้อมูลสี และแบ่งชุดข้อมูล
                                    </p>
                                    
                                ), 
                                color: "bg-purple-100 text-purple-800 border-purple-300" },
                                
                                { label: "↓", color: "" },
                                
                                { label: (
                                    <p className='text-left'>
                                        ทำการสร้างสถาปัตยกรรมของโมเดลโดยเรียงลำดับการประมวลผลเลเยอร์ 
                                        Conv2D, BatchNormalization, MaxPooling2D, Dropout, Flatten และ Dense เข้าด้วยกัน
                                    </p>
                                    
                                ), 
                                color: "bg-amber-100 text-amber-800 border-amber-300" },
                                
                                { label: "↓", color: "" },
                                
                                { label: (
                                    <p className='text-left'>
                                        กำหนดฟังก์ชันหาค่า Loss  ,Optimizer และ Accuracy 
                                        จากนั้นใส่ชุดข้อมูลรูปภาพให้โมเดลเรียนรู้เป็นจำนวน 50 Epochs
                                    </p>
                                    
                                ), 
                                color: "bg-green-100 text-green-800 border-green-300" },
                                
                                
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
