import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react';




export default function FirstPost() {



  const styles = {
    style: "App-red", style2: "App-after-click", text: "hello world, I'm Ayanda",
   
    
};

//  Inside the function
const [style, setStyle] = useState("App-red");



//  Inside the click function.
function clickHandler() { 
setStyle("App-after-click");
} 




  return (
    <>

      <Head>
        <title>Ayandas Mind</title>
      </Head>




      <h1 id="heading" onClick={clickHandler} className={style}>{styles.text}</h1>



      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>


      <style jsx>{`

  
.App-red{
  color: red;
  animation: turnYellow forwards 3s linear;
}

@keyframes turnYellow {
  from {
    opacity: 0;
    color: red;
  }
  to {
    opacity: 1;
    color: yellow;
  }
}

.App-after-click{
  color: black;
}
`}</style>


    </>

  
  )

  

}
