
import ReactEcharts from "echarts-for-react"; 
import { AllData } from "../Data";


const color=AllData.map((el)=>{
    return el.Color_intensity
})

const Hue=AllData.map((el)=>{
    return el.Hue
})



export const ScatterChart=()=>{

  
    var option = {
        title: {
            text: 'Color Intensity and Hue Data',
            left: 'center'
          },
          visualMap: {
            min: .11,
            max: 13,
            dimension: 1,
            orient: 'vertical',
            right: 10,
            top: 'center',
            text: ['HIGH', 'LOW'],
            calculable: true,
            inRange: {
              color:  ['#37A2FF', '#FF0087']
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
              dataView: { show: true, readOnly: true },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          xAxis: [
            {
              type: 'category',
              name: 'Color intensity',
              data: color,
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
              name: 'Hue',
              
            }
          ],
          series: [
            {
              name: 'Hue',
              type: 'scatter',
             
            //   scatterWidth: '50%',
              data:Hue,
              emphasis: {
                focus: 'series'
              },
              animationDelay: function (idx) {
                return idx * 10;
              }
            }
          ],
          animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx) {
            return idx * 5;
          }
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
            <h4 style={{marginTop:'-80px'}}>Color Intensity</h4>
        </>
    )
      
}