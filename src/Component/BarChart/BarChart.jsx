import ReactEcharts from "echarts-for-react"; 
import { AllData } from "../Data";




const avgData={}

for(let item of AllData){

    const className=item.Alcohol

   
     
    if(!avgData[className]){
        avgData[className]={
            totalMalicAcid: 0,
          numSamples: 0
        }
    }

    avgData[className].totalMalicAcid += item.MalicAcid;
    avgData[className].numSamples++;

    console.log(typeof   avgData[className],avgData)
}


const malicAcid=[] 
const alcohalData=[]
for(let name in avgData){
    
    const avg=avgData[name].totalMalicAcid / avgData[name].numSamples
      let res=avg.toFixed(2)
     malicAcid.push(res)
     alcohalData.push(name)
    // console.log(name,avg.toFixed(2))
}












// const alcohalData=AllData.map((el)=>{
//     return el.Alcohol
//  })

//  const malicAcid=AllData.map((el)=>{
  
//     // let total=0
//     //   let i=0
//     //   for(let key in el){
//     //     total+=Number(el[key])
//     //     i++
//     //   }
    
//     // console.log(el,total,i)
//     return (el.MalicAcid)
//  })

export const BarChart=()=>{
    


   var option = {
    title: {
        text: 'Alcohol and Malic Acid Data',
        left: 'center'
      },
      visualMap: {
        min:12,
        max: 14,
        dimension: 1,
        orient: 'vertical',
        right: 10,
        top: 'center',
        text: ['HIGH', 'LOW'],
        calculable: true,
        inRange: {
          color:  ['#f2c31a', '#24b7f2']
        }
    },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle:{
            color:'#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      xAxis: [
        {
          type: 'category',
          name: 'Alcohol',
          data: alcohalData,
          axisTick: {
            alignWithLabel: true
          },
          splitLine: {
            show: false
          }

        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Malic Acid',
          
        }
      ],
      series: [
        {
          name: 'Malic Acid',
          type: 'bar',
         
          barWidth: '30%',
          data:malicAcid,
          emphasis: {
            focus: 'series'
          },
        
        }
      ],
   
    };
     

    const Style={
        height:'400px',
        width:'85%',
        padding:'5%',
        paddingRight:'2%',
        margin:'auto',
    }
     


    return(
        <>
            <ReactEcharts 
          
             lazyUpdate={true}
             style={Style}
            option={option}/>
            <h4 style={{marginTop:'-80px'}}>Alcohol</h4>
            
        </>
    )
}