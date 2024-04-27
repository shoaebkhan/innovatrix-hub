import React from 'react'
import MyButton from '@/components/myButton';
import ABoutPage from '@/components/markup with jsx';
import Image from 'next/image'
function MyButton2(){
    return (
        <button className="p-2 bg-slate-100 rounded-lg"> Button 2</button>
    );
}
const user={
    imagURL:'E:\Next.JS\innovatrix-hub\public\img.webp',
    name:'Herry',
    imageSize:90
};
function reactLearning() {
  return (

        <div className="space-y-5">
            <h1 className="flex flex-col gap-5 text-xs p-10 font-bold"> Welcome to my React App </h1>
            create a react component
            <div className="space-y-5 gap-2">
                <MyButton/>
                <MyButton2/>    
            </div>
            <div>
            <Image
                src={user.imagURL}
                width={user.imageSize}
                height={user.imageSize}
                alt={"Picture of " + user.name}
            />

                <ABoutPage></ABoutPage>
            </div>
            
    </div>
  )
}

export default reactLearning;