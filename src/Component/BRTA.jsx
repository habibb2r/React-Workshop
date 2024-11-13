import robin from'../assets/robin.jpg'

const BRTA = () => {
    return (
        <div className="py-[2%]">
           <div>
           <div className="flex flex-col justify-center items-center gap-2 text-center">
                <h1>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h1>
                <h1>সড়ক পরিবহন ও মহাসড়ক বিভাগ</h1>
                <h1>বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ)</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 pt-5 border-b-2 pb-[2%]">
                <h1 className="text-xl font-semibold text-[#008002]">যাচাইকরণ সফল</h1>
                <p className="text-sm text-blue-600">এই ই-ড্রাইভিং লাইসেন্সটি বৈধ</p>
                <div>
                    <img className='h-[150px] w-[150px]' src={robin} alt="" />
                </div>
            </div>

            <div className='py-[2%] px-[3%]'>
                <h1 className='text-xl font-bold text-start text-[#464343] py-[5%] md:py-[3%]'>ড্রাইভিং লাইসেন্স এর তথ্য</h1>
                <div className='grid lg:grid-cols-2 gap-6 md:gap-10 px-[3%] '>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>রেফারেন্স নম্বর:</p>
                        <p className='font-semibold'>CM2K2176147NP</p>
                    </div>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>রেফারেন্স এর তারিখ:</p>
                        <p className='font-semibold'>18/11/2024</p>
                    </div>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>লাইসেন্স এর ধরন:</p>
                        <p className='font-semibold'>PROFESSIONAL</p>
                    </div>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>যানবাহনের শ্রেণী:</p>
                        <p className='font-semibold'>LIGHT, MOTORCYCLE</p>
                    </div>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>ইস্যুর তারিখ:</p>
                        <p className='font-semibold'>18/11/2024</p>
                    </div>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>মেয়াদোত্তীর্ণের তারিখ:</p>
                        <p className='font-semibold'>17/11/2029</p>
                    </div>
                </div>
            </div>
            <div className='py-[2%] px-[3%] border-b-2 border-black'>
                <h1 className='text-xl font-semibold text-start text-[#464343] py-[5%] md:py-[3%]'>ব্যক্তিগত তথ্য</h1>
                <div className='grid md:grid-cols-2 gap-10 px-[3%]'>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>নাম:</p>
                        <p className='font-semibold'>ROBIN PAL</p>
                    </div>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>পিতা / স্বামীর নাম(ইংরেজী):</p>
                        <p className='font-semibold'>TAPASH PAL</p>
                    </div>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>মায়ের নাম :</p>
                        <p className='font-semibold'>SHELA PAL</p>
                    </div>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>জন্ম তারিখ:</p>
                        <p className='font-semibold'>24/12/1999</p>
                    </div>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>রক্তের গ্রুপ:</p>
                        <p className='font-semibold'>A+</p>
                    </div>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>মোবাইল নম্বর:</p>
                        <p className='font-semibold'>01878281282</p>
                    </div>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>স্থায়ী ঠিকানা:</p>
                        <p className='font-semibold'>BHATIKHAIN, PATIYA, CHATTOGRAM-4370</p>
                    </div>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>বর্তমান ঠিকানা:</p>
                        <p className='font-semibold'>271/J, KAIBALYADHAM H/E, FIROZSHAH, KHULSHI, CHATTOGRAM-4207</p>
                    </div>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>জাতীয় পরিচয়পত্র নম্বর:</p>
                        <p className='font-semibold'>91****91</p>
                    </div>
                    <div className=' grid md:grid-cols-2'>
                        <p className='text-sm font-semibold text-[#464343]'>লাইসেন্সিং কর্তৃপক্ষ:</p>
                        <p className='font-semibold'>CTG METRO,BRTA</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default BRTA;